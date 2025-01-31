import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import instance from "../../api/api";
import Select from "react-select";
import { useQuery, useMutation } from "@tanstack/react-query";
import DynamicCity from "../DynamicCity/DynamicCity";
import DynamicCountry from "../DynamicCountry/DynamicCountry";
import { useNavigate } from "react-router-dom";

const TransferMoney = () => {
  const navigate = useNavigate();
  const fetchTransferMoney = async () => {
    const response = await instance.get(`/api/Forex/GetForexHomePage`);
    return response?.data;
  };

  const generateEnquiry = async (payload) => {
    const response = await instance.post(`/api/Forex/GenerateEnquiry`, payload);
    return response?.data;
  };

  const useTransferMoney = () => {
    return useQuery({
      queryKey: ["transferMoney"],
      queryFn: fetchTransferMoney,
      select: (data) => data?.transfermoney,
    });
  };

  const { data, isLoading, error } = useTransferMoney();
  const [totalAmount, setTotalAmount] = useState(0);
  const [receivingAmount, setReceivingAmount] = useState([]);
  const [sendingAmount, setSendingAmount] = useState([]);
  const [receiving, setReceiving] = useState(null);
  const [sending, setSending] = useState(null);
  const [rate, setRate] = useState(0);
  const [newenquiryData, setNewEnquiryData] = useState([]);
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: generateEnquiry,
    onSuccess: (data) => {
      console.log("Success", data);
      alert("Enquiry submitted successfully");
      navigate("/orderConfirmation", { state: data });
    },
    onError: (error) => {
      console.error("Error:", error);
      alert("There was an error submitting your enquiry.");
    },
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      const userData = JSON.parse(localStorage.getItem("userDetails"));
      if (!userData) {
        alert("User details not found. Please log in again.");
        return;
      }

      console.log("Form Data:", data);

      const reqCodeNaame = { RequestCode: 2, RequestName: "Transfer Money" };
      const enquiryData = [
        {
          CityName: data?.city?.value || "",
          TransferCountry: data?.transferFrom?.value || "",
          TransferToCountry: data?.transferTo?.value || "",
          RecCurrency: Number(data?.receivingAmount?.value || 0),
          ProductName: data?.product?.value || "",
          SendCurrency: Number(totalAmount || 0),
        },
      ];
      setNewEnquiryData((prevData) => [...prevData, enquiryData]);
      console.log("Mapped Enquiry Data:", enquiryData);

      const finalPayload = {
        ...userData,
        ...reqCodeNaame,

        enquiryData: [...newenquiryData, ...enquiryData],
      };

      console.log("Final Payload:", finalPayload);

      mutate(finalPayload, {
        onSuccess: (response) => {
          console.log("Success:", response);
          alert("Enquiry submitted successfully!");
        },
        onError: (error) => {
          console.error("Error submitting enquiry:", error);
          alert(
            "There was an error submitting your enquiry. Please try again."
          );
        },
      });
    } catch (error) {
      console.error("Error in onSubmit function:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  useEffect(() => {
    const receivingAmt = data?.ReceiveAmount?.map((rec) => ({
      value: rec.Price,
      label: (
        <div className="flex items-center space-x-2">
          <img
            src={rec.CurrimgUrl}
            alt={rec.Currencyname}
            className="w-5 h-5"
          />
          <span>{`${rec.Currencyname} (${rec.Currencycode}) ${rec?.Price}`}</span>
        </div>
      ),
    }));

    const sendingAmt = data?.SendAmount?.map((rec) => ({
      value: rec.Price,
      label: (
        <div className="flex items-center space-x-2">
          <img
            src={rec.CurrimgUrl}
            alt={rec.Currencyname}
            className="w-5 h-5"
          />
          <span>{`${rec.Currencyname} (${rec.Currencycode}) ${rec?.Price}`}</span>
        </div>
      ),
    }));

    setReceivingAmount(receivingAmt);
    setSendingAmount(sendingAmt);
  }, [data]);

  useEffect(() => {
    if (Array.isArray(receivingAmount) && receivingAmount.length > 0) {
      setReceiving(receivingAmount[0].value);
    }

    if (Array.isArray(sendingAmount) && sendingAmount.length > 0) {
      setSending(sendingAmount[0].value);
    }
  }, [receivingAmount, sendingAmount]);

  useEffect(() => {
    setRate(receiving);
  }, [receiving]);

  const forexCards = ["Travel Card", "Forex Card", "Multi-Currency Card"];

  return (
    <div className="w-full max-w-xl mx-auto p-6 border text-black border-b-2 rounded-md mt-10">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* City Selection */}
        <div className="space-y-1.5">
          <DynamicCity
            lbl={data?.citylbl}
            data={data}
            control={control}
            name="city"
            rules={{ required: "City is required" }}
            setValue={setValue}
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        {/* Currency Selection Row */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <DynamicCountry
              lbl={data?.trnsfrmlbl}
              data={data?.Transferfrom}
              placeholder={data?.trnsfrmwatermark}
              control={control}
              name="transferFrom"
              rules={{ required: "Country is required" }}
            />
            {errors.transferFrom && (
              <p className="text-red-500 text-sm">
                {errors.transferFrom.message}
              </p>
            )}
          </div>

          <div>
            <DynamicCountry
              lbl={data?.trnstolbl}
              data={data?.Transferto}
              control={control}
              placeholder={data?.trnstowatermark}
              name="transferTo"
              rules={{ required: "Country is required" }}
            />
            {errors.transferTo && (
              <p className="text-red-500 text-sm">
                {errors.transferTo.message}
              </p>
            )}
          </div>
        </div>

        {/* Forex Cards */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Product*</label>
          <Controller
            name="product"
            control={control}
            rules={{
              required: { value: true, message: "Please select a forex card" },
            }}
            render={({ field }) => (
              <Select
                {...field}
                options={forexCards.map((card) => ({
                  value: card,
                  label: card,
                }))}
                placeholder="Select a card"
                classNamePrefix="react-select"
              />
            )}
          />
          {errors.product && (
            <p className="text-red-500 text-sm">{errors.product.message}</p>
          )}
        </div>

        {/* Receiving Amount */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium">{data?.reclbl}</label>
          <div className="flex items-center gap-2 border-2 rounded-md p-[2px]">
            <Controller
              name="receivingAmount"
              control={control}
              rules={{ required: "Receiving amount is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  value={receivingAmount?.find(
                    (opt) => opt.value === receiving
                  )}
                  options={receivingAmount}
                  placeholder={data?.recwatermark}
                  classNamePrefix="react-select"
                  onChange={(selectedOption) => {
                    setReceiving(selectedOption?.value);
                    field.onChange(selectedOption);
                  }}
                />
              )}
            />
            <input
              type="text"
              name="customAmount"
              placeholder={data?.recwatermark}
              className="px-3 py-2 focus:outline-none rounded-md"
              onChange={(e) => {
                const value = e.target.value;
                const pro = value * receiving;
                setTotalAmount(pro.toFixed(2));
              }}
            />
          </div>
          <div className="text-right">Rate: {rate && rate}</div>
          {errors.receivingAmount && (
            <p className="text-red-500 text-sm">
              {errors.receivingAmount.message}
            </p>
          )}
        </div>

        {/* Sending Amount */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium">
            {data?.sendlbl || "Sending Amount**"}
          </label>
          <div className="flex items-center gap-2 border-2 rounded-md p-[2px]">
            <Controller
              name="sendingAmount"
              control={control}
              rules={{ required: "Sending amount is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  value={sendingAmount?.find((opt) => opt.value === sending)}
                  options={sendingAmount}
                  placeholder={data?.sendwatermark || "Select sending amount"}
                  classNamePrefix="react-select"
                  onChange={(selectedOption) => {
                    setSending(selectedOption?.value);
                    field.onChange(selectedOption);
                  }}
                />
              )}
            />
            <input
              type="text"
              name="customAmount"
              value={totalAmount}
              placeholder={data?.sendwatermark}
              className="px-3 py-2 focus:outline-none rounded-md"
            />
          </div>
          {errors.sendingAmount && (
            <p className="text-red-500 text-sm">
              {errors.sendingAmount.message}
            </p>
          )}
        </div>

        {/* Total Amount */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-sm font-medium">Total Amount: </span>
            <span className="text-lg font-semibold">₹{totalAmount}</span>
          </div>
        </div>

        {/* Book Order Button */}
        {isPending ? (
          <button
            type="submit"
            className="w-full bg-[#012F76] text-white py-3 rounded-lg mt-4 flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors"
          >
            Loading...
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-[#012F76] text-white py-3 rounded-lg mt-4 flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors"
          >
            Book this Order
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </form>
    </div>
  );
};

export default TransferMoney;
