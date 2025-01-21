import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChevronDown, ArrowRight } from 'lucide-react'
import instance from '../../api/api';
import { useQuery } from '@tanstack/react-query';
import Select from 'react-select';
import DynamicCountry from '../DynamicCountry/DynamicCountry';

const InternationalSimCards = () => {

    const fetchSimCards = async () => {
        const response = await instance.get(`/api/Forex/GetForexHomePage`)
        return response?.data
    }
    const useSimCards = () => {
        return useQuery({
            queryKey: ["fetchSimCards"],
            queryFn: fetchSimCards,
            select: data => data?.Simcard
        })
    }

    const { data, isLoading, error } =  useSimCards()
    const [totalAmount, setTotalAmount] = useState(0);
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        control,
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
const payloadData={
    TransferToCountry:data.countryToTravel.value,
    TravelEnddate: data.endDate,
    TravelStartdate:data.startDate
}
console.log("payload",payloadData)
    };

    const countryOption = data?.countries?.map((cur) => ({
        value: cur.Currencycode,
        label: (
            <div className="flex items-center space-x-2">
                <img
                    src={cur.CountryLogo}
                    alt={cur.CountryLogo}
                    className="w-5 h-5"
                />
                <span>{`${cur.Countryname} (${cur.CountryCode || '00'})`}</span>
            </div>
        ),
    }));

    return (
        <div className='w-full max-w-xl mx-auto p-6'>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* City Selection */}
                <DynamicCountry
                    lbl={data?.trnsfrmlbl}
                    data={data?.countries}
                    control={control}
                    name='countryToTravel'
                    rules={{ required: "Country is required" }} // Add validation rule here
                    setValue={setValue}
                />
                {errors.countryToTravel && <p className="text-red-500 text-sm">{errors.countryToTravel.message}</p>}


                <div className="space-y-1.5">
                    <label className="text-sm font-medium"> {data?.travelstlbl || 'Start Date*'}</label>
                    <input
                        type="date"
                        {...register("startDate", {
                            required: "Start Date is required",
                            min: { value: 1, message: "Amount must be greater than zero" },
                        })}
                        className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={data?.travelstwatermark}
                    />
                    {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate.message}</p>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium">{data?.travelendlbl || 'End Date*'}</label>
                    <input
                        type="date"
                        {...register("endDate", {
                            required: "End Date is required",
                            min: { value: 1, message: "Amount must be greater than zero" },
                        })}
                        className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={data?.travelendwatermark}
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