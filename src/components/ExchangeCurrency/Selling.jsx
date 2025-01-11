import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { ArrowRight } from 'lucide-react';
import DynamicCity from '../DynamicCity/DynamicCity';

const Selling = ({ data, isLoading }) => {
    const [totalAmount, setTotalAmount] = useState(0);
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
    };

    const forexCards = ["Travel Card", "Forex Card", "Multi-Currency Card"];

    const cityOptions = data?.cityLists?.map((city) => ({
        value: city.Cityname,
        label: city.Cityname,
    }));

    const currencyHave = data?.CurrencyHave?.map((currency) => ({
        value: currency.Currencycode,
        label: (
            <div className="flex items-center space-x-2">
                <img
                    src={currency.CurrimgUrl}
                    alt={currency.Currencyname}
                    className="w-5 h-5"
                />
                <span>{`${currency.Currencyname} (${currency.Currencycode})`}</span>
            </div>
        ),
    }));
    const currencyWant = data?.Currencywant?.map((currency) => ({
        value: currency.Currencycode,
        label: (
            <div className="flex items-center space-x-2">
                <img
                    src={currency.CurrimgUrl}
                    alt={currency.Currencyname}
                    className="w-5 h-5"
                />
                <span>{`${currency.Currencyname} (${currency.Currencycode})`}</span>
            </div>
        ),
    }));
    const productList = data?.prodlist?.map((prod) => ({
        value: prod.prodname,
        label: (
            <div className="flex items-center space-x-2">

                <span>{prod?.prodname}</span>
            </div>
        ),
    }));

    const forexCardOptions = forexCards.map((card) => ({
        value: card,
        label: card,
    }));

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* City Selection */}
            <div className="space-y-1.5">
                {/* <label className="text-sm font-medium">
                    {data?.citylbl || `Select City*`}
                </label> */}
                <DynamicCity
                    lbl={data?.citylbl}
                    data={data}
                    control={control}
                    name="city"
                    rules={{ required: "City is required" }} // Add validation rule here
                    setValue={setValue}
                />

                {errors.city && <p className="text-red-500  text-sm">{errors.city.message}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-4">

                {/* Currency You Have */}
                <div className="space-y-1.5">
                    <label className="text-sm font-medium">{data?.Currhavlbl || 'Currency you have*'}</label>
                    <Controller
                        name="currencyHave"
                        control={control}
                        rules={{
                            required: "Please select the currency you have",
                        }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={currencyHave}
                                placeholder={data?.Currhavewatermark || "Select the currency you have"}
                                classNamePrefix="react-select"
                            />
                        )}
                    />
                    {errors.currencyHave && (
                        <p className="text-red-500 text-sm">{errors.currencyHave.message}</p>
                    )}
                </div>

                {/* Currency You Want */}
                <div className="space-y-1.5">
                    <label className="text-sm font-medium">{data?.Currwantlbl || 'Currency you want*'}</label>
                    <Controller
                        name="currencyWant"
                        control={control}
                        rules={{
                            required: "Please select the currency you want",
                            validate: (value) =>
                                value !== watch("currencyHave") || "Currency you want cannot be the same as currency you have",
                        }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={currencyWant}
                                placeholder={data?.Currwantwatermark || "Select the currency you want"}
                                classNamePrefix="react-select"
                            />
                        )}
                    />
                    {errors.currencyWant && (
                        <p className="text-red-500 text-sm">{errors.currencyWant.message}</p>
                    )}
                </div>
            </div>

            {/* Forex Cards Select */}
            <div className="space-y-1.5">
                <label className="text-sm font-medium">{data?.prodlbl || "Select Forex Card*"} </label>
                <Controller
                    name="forexCards"
                    control={control}
                    rules={{
                        required: "Please select a forex card", // Validation rule for forex cards
                    }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={productList}
                            placeholder={data?.prodwatermark || "Select a card"}
                            classNamePrefix="react-select"
                        />
                    )}
                />
                {errors.forexCards && (
                    <p className="text-red-500 text-sm">{errors.forexCards.message}</p>
                )}
            </div>

            {/* Amount Fields */}
            <div className="space-y-1.5">
                <label className="text-sm font-medium"> {data?.Forexlbl || `Forex Amount*`}</label>
                <input
                    type="number"
                    {...register("forexAmount", {
                        required: "Forex amount is required",
                        min: { value: 1, message: "Amount must be greater than zero" },
                    })}
                    className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`${data?.Forexwatermark || `Enter amount`}`}
                />
                {errors.forexAmount && <p className="text-red-500 text-sm">{errors.forexAmount.message}</p>}
            </div>

            <div className="space-y-1.5">
                <label className="text-sm font-medium">{data?.Inrlbl || `INR Amount*`}</label>
                <input
                    type="number"
                    {...register("inrAmount", {
                        required: "INR amount is required",
                        min: { value: 1, message: "Amount must be greater than zero" },
                    })}
                    className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`${data?.InrWatermark || `Enter amount`}`}
                />
                {errors.inrAmount && <p className="text-red-500 text-sm">{errors.inrAmount.message}</p>}
            </div>

            {/* Total Amount */}
            <div className="flex items-center justify-between pt-2">
                <div>
                    <span className="text-sm font-medium">Total Amount: </span>
                    <span className="text-lg font-semibold">₹{totalAmount}</span>
                </div>
                <button
                    type="button"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                    + Add Product
                </button>
            </div>

            {/* Book Order Button */}
            <button
                type="submit"
                className="w-full bg-[#012F76] text-white py-3 rounded-lg mt-4 flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors"
            >
                Book this Order
                <ArrowRight className="w-5 h-5" />
            </button>
        </form>
    );
};

export default Selling;
