import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ChevronDown, ArrowRight, Trash2 } from 'lucide-react'
import Select from 'react-select';
import { useMutation } from '@tanstack/react-query';
import instance from '../../api/api';
import { useNavigate } from 'react-router-dom';



const generateEnquiry= async(payloadData)=>{
    const response= await instance.post(`/api/Forex/GenerateEnquiry`,payloadData);
    return  response?.data
};

const ReloadForex = ({ data }) => {
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalInr, setTotalInr] = useState(0);
    const [rate, setRate] = useState(0);
    const [products, setProducts] = useState([]); // State to store added products
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        control,
        setValue
    } = useForm({ });
    const navigate=useNavigate()
    const { mutate, isPending } = useMutation({
        mutationFn: generateEnquiry,
        onSuccess: (data) => {
            console.log(data, 'Success');
            alert('Enquiry submitted successfully!');
            navigate("/orderConfirmation", { state: data });
        },
        onError: (error) => {
            console.error('Error:', error);
            alert('There was an error submitting your enquiry.');
        },
    });

    const addProduct = () => {
        const formData = watch(); // Get current form values
        const calculatedAmount = totalInr;
        console.log(formData)

        // Add the product to the list with the calculated total amount
        setProducts([...products, { ...formData, totalInr, totalAmount: calculatedAmount }]);
    };

    const removeProduct = (index) => {
        setProducts(products.filter((_, i) => i !== index)); // Remove the product by index
    };

    // Calculate the overall total amount
    const grandTotal = products.reduce((sum, product) => {
        return (Number(sum) + Number(product.totalAmount || 0)).toFixed(2);
    }, 0);

    const onSubmit = () => {
        const userData = JSON.parse(localStorage.getItem("userDetails"));
        
        const reqCodeName = { RequestCode: 3, RequestName: "Reload/Unload Forex Cards" };
        const payloadData = {
            ...userData,...reqCodeName,
            enquiryData: products.map(item => {
                return {
                    TransactionType:"reload",
                    ProductName: item?.cardDoYouHave?.value,
                    RecCurrency: Number(item?.currency?.value),
                    ForexAmount: Number(item?.forexAmount),
                    INRAmount: Number(item?.inrAmount),
                };

            })
        };
    
        console.log("payloadData", payloadData);
        mutate(payloadData);
    };
    

    const cardOptions = data?.cardlist?.map((card) => ({
        value: card.Cardname,
        label: card.Cardname,
    }));
    const currencyListOption = data?.currencylist?.map((cur) => ({
        value: cur?.Price,
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
        currencyName: cur.Currencyname
    }));


    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* City Selection */}
            <div className="space-y-1.5">
                <label className="text-sm font-medium">{data?.ForexCardTypelbl}</label>
                <Controller
                    name="cardDoYouHave"
                    control={control}
                    rules={{ required: "City is required" }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={cardOptions}
                            placeholder={data?.cardtypewatermark}
                            classNamePrefix="react-select"
                        />
                    )}
                />
                {errors.cardDoYouHave && <p className="text-red-500 text-sm">{errors.cardDoYouHave.message}</p>}
            </div>
            <div className="space-y-1.5">
                <label className="text-sm font-medium">{data?.Currencylistlbl}</label>
                <Controller
                    name="currency"
                    control={control}
                    rules={{ required: "Currency is required" }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={currencyListOption}
                            placeholder={data?.Currwatermark}
                            classNamePrefix="react-select"
                            onChange={(selectedOption) => {
                                setRate(selectedOption?.value);
                                field.onChange(selectedOption);
                            }}
                        />
                    )}
                />
                {errors.currency && <p className="text-red-500 text-sm">{errors.currency.message}</p>}
            </div>


            {/* Currency Selection Row */}
            <div className="grid grid-cols-2 gap-4">
                {/* Amount Fields */}
                <div className="space-y-1.5">
                    <label className="text-sm font-medium"> {data?.forexcontrollbl}</label>
                    <input
                        type="number"
                        {...register("forexAmount", {
                            required: "Forex amount is required",
                            min: { value: 1, message: "Amount must be greater than zero" },
                            onChange: (e) => {
                                const val = e.target.value
                                const total = val * rate
                                setTotalInr(total.toFixed(2))
                                setValue("inrAmount", total.toFixed(2))
                                console.log(total.toFixed(2), "total")
                            }
                        })}
                        className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`${data?.forexcontrolwatermark}`}
                    />
                    <div className="text-left">Rate: {rate && rate}</div>
                    {errors.forexAmount && <p className="text-red-500 text-sm">{errors.forexAmount.message}</p>}
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium"> {data?.inrcontrollbl}</label>
                    <input
                        type="number"
                        {...register("inrAmount", {
                            required: "Inr amount is required",
                            min: { value: 1, message: "Amount must be greater than zero" },
                        })}
                        // value={totalInr}
                        className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`${data?.inrcontrolwatermark}`}
                    />
                    {errors.inrAmount && <p className="text-red-500 text-sm">{errors.inrAmount.message}</p>}
                </div>
            </div>

{/* Product List Table */}
{products.length > 0 && (
    <div className="mt-8">
        {/* Heading Section */}
        <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold">Product List</h2>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
            <table className="min-w-full border border-collapse">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="p-2 text-left">Currency</th>
                        <th className="p-2 text-left">Product</th>
                        <th className="p-2 text-right">Forex Amount</th>
                        <th className="p-2 text-right">INR Amount</th>
                        <th className="p-2 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="border-b">
                            <td className="p-2">{product.currency?.currencyName || "N/A"}</td>
                            <td className="p-2">{product?.cardDoYouHave?.label || "N/A"}</td>
                            <td className="p-2 text-center">{product.forexAmount || "N/A"}</td>
                            <td className="p-2 text-center">
                                ₹{product.inrAmount || "N/A"}{" "}
                                <span className="text-xs">{product?.currency?.value}</span>
                            </td>
                            <td className="p-2 text-center">
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => removeProduct(index)}
                                >
                                    <Trash2 size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Grand Total Display */}
        <div className="mt-4 text-right">
            <span className="text-lg font-medium">Total: </span>
            <span className="text-xl font-semibold">₹{grandTotal}</span>
        </div>
    </div>
)}


            {/* Total Amount */}
            <div className="flex items-center justify-between pt-2">
                <div>
                    <span className="text-sm font-medium">Total Amount: </span>
                    <span className="text-lg font-semibold">₹{totalAmount}</span>
                </div>
                <button
                    onClick={addProduct}
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