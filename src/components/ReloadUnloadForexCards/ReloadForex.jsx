import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChevronDown, ArrowRight } from 'lucide-react'
import Select from 'react-select';

const ReloadForex = ({ data }) => {
    const [totalAmount, setTotalAmount] = useState(0);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            cardDoYouHave: "",
            currencyWant: "US Dollar",
            forexAmount: "",
            inrAmount: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
    };


    const cardOptions = data?.cardlist?.map((card) => ({
        value: card.Cardname,
        label: card.Cardname,
    }));
    const currencyListOption = data?.currencylist?.map((cur) => ({
        value: cur.Currencycode,
        label: (
            <div className="flex items-center space-x-2">
                <img
                    src={cur.CurrimgUrl}
                    alt={cur.Currencyname}
                    className="w-5 h-5"
                />
                <span>{`${cur.Currencyname} (${cur.Currencycode}) ${cur?.Price}`}</span>
            </div>
        ),
    }));


    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* City Selection */}
            <div className="space-y-1.5">
                <label className="text-sm font-medium">{data?.ForexCardTypelbl || `What kind of card do you have?*`}</label>
                <Select
                    options={cardOptions}
                    placeholder={data?.cardtypewatermark}
                    {...register("cardDoYouHave", { required: "City is required" })}
                    classNamePrefix="react-select"
                />
                {errors.cardDoYouHave && <p className="text-red-500 text-sm">{errors.cardDoYouHave.message}</p>}
            </div>
            <div className="space-y-1.5">
                <label className="text-sm font-medium">{data?.Currencylistlbl || 'What kind of card do you have?*'}</label>
                <Select
                    options={currencyListOption}
                    placeholder={data?.Currwatermark}
                    {...register("cardDoYouHave", { required: "City is required" })}
                    classNamePrefix="react-select"
                />
                {errors.cardDoYouHave && <p className="text-red-500 text-sm">{errors.cardDoYouHave.message}</p>}
            </div>


            {/* Currency Selection Row */}
            <div className="grid grid-cols-2 gap-4">
                {/* Amount Fields */}
                <div className="space-y-1.5">
                    <label className="text-sm font-medium"> {data?.forexcontrollbl || `Forex Amount*`}</label>
                    <input
                        type="number"
                        {...register("forexAmount", {
                            required: "Forex amount is required",
                            min: { value: 1, message: "Amount must be greater than zero" },
                        })}
                        className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`${data?.forexcontrolwatermark || `Enter amount`}`}
                    />
                    {errors.forexAmount && <p className="text-red-500 text-sm">{errors.forexAmount.message}</p>}
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium"> {data?.inrcontrollbl || `Forex Amount*`}</label>
                    <input
                        type="number"
                        {...register("inrAmount", {
                            required: "Forex amount is required",
                            min: { value: 1, message: "Amount must be greater than zero" },
                        })}
                        className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`${data?.inrcontrolwatermark || `Enter amount`}`}
                    />
                    {errors.inrAmount && <p className="text-red-500 text-sm">{errors.inrAmount.message}</p>}
                </div>
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
    )
}


export default ReloadForex