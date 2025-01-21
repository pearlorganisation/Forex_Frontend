import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChevronDown, ArrowRight } from 'lucide-react'
import instance from '../../api/api';
import { useQuery } from '@tanstack/react-query';
import Select from 'react-select';
import DynamicCountry from '../DynamicCountry/DynamicCountry';

const TravelInsurance = () => {

    const fetchTravelInsurance = async () => {
        const response = await instance.get(`/api/Forex/GetForexHomePage`)
        return response?.data
    }
    const useTravelInsurance = () => {
        return useQuery({
            queryKey: ["fetchTravelInsurance"],
            queryFn: fetchTravelInsurance,
            select: data => data?.travelInsurance
        })
    }

    const { data, isLoading, error } = useTravelInsurance()
    const [totalAmount, setTotalAmount] = useState(0);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        control
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
       MemberAge:data.ageOfTravellers,
       CityName:data.destination,
       TravelStartdate:data.startDate,
       TravelEnddate:data.returnDate

    }
    console.log("payloadData",payloadData)
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

                <DynamicCountry
                    lbl={data?.countrylbl}
                    data={data?.countries}
                    control={control}
                    name='destination'
                    rules={{ required: "Country is required" }} // Add validation rule here
                    setValue={setValue}
                />
                {errors.destination && <p className="text-red-500 text-sm">{errors.destination.message}</p>}


                <div className="space-y-1.5">
                    <label className="text-sm font-medium">  {data?.agelbl || "This is Placeholder Label"}</label>
                    <input
                        type="number"
                        {...register("ageOfTravellers", {
                            required: "Age is required",
                            min: { value: 1, message: "Age must be greater than zero" },
                        })}
                        className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={data?.agewatermark}
                    />
                    {errors.ageOfTravellers && <p className="text-red-500 text-sm">{errors.ageOfTravellers.message}</p>}
                </div>


                <div className='grid md:grid-cols-2 gap-y-4 md:gap-x-4'>
                    <div className='grid space-y-1.5 w-full '>
                        <label className="text-sm font-medium "> {data?.Tripstdatelbl || 'Trip Start Date*'}</label>
                        <div className="space-y-1.5">
                            <input
                                type="date"
                                {...register("startDate", {
                                    required: "Departure Date is required",
                                    min: { value: 1, message: "Amount must be greater than zero" },
                                })}
                                className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder={data?.tripstdatewatermark}
                            />
                            {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate.message}</p>}
                        </div>

                    </div>
                    <div className='grid space-y-1.5 w-full '>
                        <label className="text-sm font-medium"> {data?.Tripenddatelbl || 'Trip End Date*'}</label>

                        <div className="space-y-1.5">
                            <input
                                type="date"
                                {...register("returnDate", {
                                    required: "Return Date is required",
                                    min: { value: 1, message: "Amount must be greater than zero" },
                                })}
                                className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder={data?.tripenddatewatermark}
                            />
                            {errors.returnDate && <p className="text-red-500 text-sm">{errors.returnDate.message}</p>}
                        </div>
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
        </div>
    )
}





export default TravelInsurance