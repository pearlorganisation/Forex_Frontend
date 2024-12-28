import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChevronDown, ArrowRight } from 'lucide-react'

const TransferMoney = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            city: "",
            transferFrom: "Indian Rupee",
            transferTo: "US Dollar",
            product: "",
            sendingAmount: "",
            receivingAmount: "",

        },
    });

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
    };


    const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"]
    const currencies = ["Indian Rupee", "US Dollar", "Euro", "British Pound", "Japanese Yen"]
    const forexCards = ["Travel Card", "Forex Card", "Multi-Currency Card"]

    return (
        <div className='w-full max-w-xl mx-auto p-6'>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* City Selection */}
                <div className="space-y-1.5">
                    <label className="text-sm font-medium">Select City*</label>
                    <div className="relative">
                        <select
                            {...register("city", { required: "City is required" })}
                            className="w-full rounded-lg border border-gray-300 py-2.5 px-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Choose an option</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
                    </div>
                    {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                </div>

                {/* Currency Selection Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium">Transfer From*</label>
                        <div className="relative">
                            <select
                                {...register("transferFrom", { required: "Please select the currency you have" })}
                                className="w-full rounded-lg border border-gray-300 py-2.5 px-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {currencies.map((currency) => (
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
                        </div>
                        {errors.transferFrom && <p className="text-red-500 text-sm">{errors.transferFrom.message}</p>}
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium">Transfer To*</label>
                        <div className="relative">
                            <select
                                {...register("transferTo", {
                                    required: "Please select the currency you want",
                                    validate: (value) =>
                                        value !== watch("currencyHave") || "Currency you want cannot be the same as currency you have",
                                })}
                                className="w-full rounded-lg border border-gray-300 py-2.5 px-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {currencies.map((currency) => (
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
                        </div>
                        {errors.transferTo && <p className="text-red-500 text-sm">{errors.transferTo.message}</p>}
                    </div>
                </div>

                {/* Forex Cards */}
                <div className="space-y-1.5">
                    <label className="text-sm font-medium">Product*</label>
                    <div className="relative">
                        <select
                            {...register("product", { required: "Please select a forex card" })}
                            className="w-full rounded-lg border border-gray-300 py-2.5 px-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a card</option>
                            {forexCards.map((card) => (
                                <option key={card} value={card}>
                                    {card}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
                    </div>
                    {errors.product && <p className="text-red-500 text-sm">{errors.forexCards.message}</p>}
                </div>

                {/* Amount Fields */}
                <div className="space-y-1.5">
                    <label className="text-sm font-medium">Receiving Amount*</label>
                    <input
                        type="number"
                        {...register("receivingAmount", {
                            required: "Receiving amount is required",
                            min: { value: 1, message: "Amount must be greater than zero" },
                        })}
                        className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter amount"
                    />
                    {errors.receivingAmount && <p className="text-red-500 text-sm">{errors.receivingAmount.message}</p>}
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium">Sending Amount*</label>
                    <input
                        type="number"
                        {...register("sendingAmount", {
                            required: "INR amount is required",
                            min: { value: 1, message: "Amount must be greater than zero" },
                        })}
                        className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter amount"
                    />
                    {errors.sendingAmount && <p className="text-red-500 text-sm">{errors.sendingAmount.message}</p>}
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
        </div>

    )
}



export default TransferMoney