import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { div } from 'framer-motion/client';

const InternationalSimCards = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            cardDoYouHave: "",
            startDate: "",
            endDate: "",
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
                    <label className="text-sm font-medium">Select countries Travelling To*</label>
                    <div className="relative">
                        <select
                            {...register("countriesTravelingTo", { required: "Country is required" })}
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
                    {errors.countriesTravelingTo && <p className="text-red-500 text-sm">{errors.countriesTravelingTo.message}</p>}
                </div>


                <div className="space-y-1.5">
                    <label className="text-sm font-medium">Start Date*</label>
                    <input
                        type="date"
                        {...register("startDate", {
                            required: "Start Date is required",
                            min: { value: 1, message: "Amount must be greater than zero" },
                        })}
                        className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Start Date"
                    />
                    {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate.message}</p>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium">End Date*</label>
                    <input
                        type="date"
                        {...register("endDate", {
                            required: "End Date is required",
                            min: { value: 1, message: "Amount must be greater than zero" },
                        })}
                        className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="End Date"
                    />
                    {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate.message}</p>}
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




export default InternationalSimCards