import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDown, ArrowRight, Trash2 } from 'lucide-react';
import instance from '../../api/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import DynamicCountry from '../DynamicCountry/DynamicCountry';
import { useNavigate } from 'react-router-dom';

const TravelInsurance = () => {
    const fetchTravelInsurance = async () => {
        const response = await instance.get(`/api/Forex/GetForexHomePage`);
        return response?.data;
    };
    const navigate =useNavigate()

    const generateEnquiry= async(payloadData)=>{
        const response= await instance.post(`/api/Forex/GenerateEnquiry`,payloadData);
        return  response?.data
    };
    const { mutate, isPending } = useMutation({
        mutationFn: generateEnquiry,
        onSuccess: (data) => {
            console.log(data, 'Success');
            alert('Enquiry submitted successfully!');
            navigate('/orderConfirmation',{state:data})
        },
        onError: (error) => {
            console.error('Error:', error);
            alert('There was an error submitting your enquiry.');
        },
    });    
    const useTravelInsurance = () => {
        return useQuery({
            queryKey: ['fetchTravelInsurance'],
            queryFn: fetchTravelInsurance,
            select: (data) => data?.travelInsurance,
        });
    };

    const { data, isLoading, error } = useTravelInsurance();
    const [totalAmount, setTotalAmount] = useState(0);
    const [products, setProducts] = useState([]);
    
    console.log("products",products)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        control,
    } = useForm({
        defaultValues: {
            cardDoYouHave: '',
            startDate: '',
            endDate: '',
        },
    });

    const addProduct = () => {
        const formData = watch();

        if (!formData.ageOfTravellers || !formData.destination || !formData.startDate || !formData.returnDate) {
            alert('Please fill all required fields!');
            return;
        }

        const newProduct = {
            age: formData.ageOfTravellers,
            destination: formData.destination.value, 
            startDate: formData.startDate,
            returnDate: formData.returnDate,
        };

        setProducts((prevProducts) => [...prevProducts, newProduct]);
    };

    const onSubmit = (data) => {
        console.log('Form Submitted:', data);

      
    const userData = JSON.parse(localStorage.getItem('userDetails'));
const requestCode={RequestCode:5,RequestName:"Travel Insurance"}
    const payloadData = {
        ...userData,...requestCode,
        enquiryData: products.map(item => {
            return {                             
            CityName: item?.destination,
            MemberAge: item?.age,
            TravelStartdate: item?.startDate,
            TravelEnddate: item?.returnDate,
            };

        })
    };


  

  
  

        console.log('Payload:', payloadData);

        mutate(payloadData);
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
        <div className="w-full max-w-xl mx-auto p-6">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <DynamicCountry
                    lbl={data?.countrylbl}
                    data={data?.countries}
                    control={control}
                    name="destination"
                    rules={{ required: 'Country is required' }}
                    setValue={setValue}
                />
                {errors.destination && (
                    <p className="text-red-500 text-sm">{errors.destination.message}</p>
                )}

                <div className="space-y-1.5">
                    <label className="text-sm font-medium">
                        {data?.agelbl || 'This is Placeholder Label'}
                    </label>
                    <input
                        type="number"
                        {...register('ageOfTravellers', {
                            required: 'Age is required',
                            min: { value: 1, message: 'Age must be greater than zero' },
                        })}
                        className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={data?.agewatermark}
                    />
                    {errors.ageOfTravellers && (
                        <p className="text-red-500 text-sm">{errors.ageOfTravellers.message}</p>
                    )}
                </div>

                <div className="grid md:grid-cols-2 gap-y-4 md:gap-x-4">
                    <div className="grid space-y-1.5 w-full">
                        <label className="text-sm font-medium">{data?.Tripstdatelbl || 'Trip Start Date*'}</label>
                        <input
                            type="date"
                            {...register('startDate', {
                                required: 'Departure Date is required',
                            })}
                            className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={data?.tripstdatewatermark}
                        />
                        {errors.startDate && (
                            <p className="text-red-500 text-sm">{errors.startDate.message}</p>
                        )}
                    </div>
                    <div className="grid space-y-1.5 w-full">
                        <label className="text-sm font-medium">{data?.Tripenddatelbl || 'Trip End Date*'}</label>
                        <input
                            type="date"
                            {...register('returnDate', {
                                required: 'Return Date is required',
                            })}
                            className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={data?.tripenddatewatermark}
                        />
                        {errors.returnDate && (
                            <p className="text-red-500 text-sm">{errors.returnDate.message}</p>
                        )}
                    </div>
                </div>

                {/* Total Amount and Add Product Button */}
                <div className="flex items-center justify-between pt-2">
                    <div>
                        <span className="text-sm font-medium">Total Amount: </span>
                        <span className="text-lg font-semibold">₹{totalAmount}</span>
                    </div>
                    <button
                        type="button"
                        onClick={addProduct}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                        + Add Product
                    </button>
                </div>

                {/* Display Added Product Data */}
                {products.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Product List</h2>
                        <table className="min-w-full border border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b">
                                    <th className="p-2 text-left">Age</th>
                                    <th className="p-2 text-left">Destination</th>
                                    <th className="p-2 text-left">Start Date</th>
                                    <th className="p-2 text-left">End Date</th>
                                    <th className="p-2 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="p-2">{product.age}</td>
                                        <td className="p-2">{product.destination}</td>
                                        <td className="p-2">{product.startDate}</td>
                                        <td className="p-2">{product.returnDate}</td>
                                        <td className="p-2 text-center">
                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() => setProducts((prev) => prev.filter((_, i) => i !== index))}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Submit Button */}
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

export default TravelInsurance;
