import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { ArrowRight, Edit, Trash2 } from 'lucide-react';
import DynamicCity from '../DynamicCity/DynamicCity';
import { useMutation } from '@tanstack/react-query';
import instance from '../../api/api';

const generateEnquiry = async (payload) => {
    const response = await instance.post(`/api/Forex/GenerateEnquiry`, payload);
    return response?.data;
};




const Buying = ({ data }) => {
    const [products, setProducts] = useState([]); // State to store added products
    const { register, handleSubmit, watch, setValue, control, reset, formState: { errors } } = useForm();
    const { mutate, isPending } = useMutation({
        mutationFn: generateEnquiry,
        onSuccess: (data) => {
            console.log(data, 'Success');
            alert('Enquiry submitted successfully!');
        },
        onError: (error) => {
            console.error('Error:', error);
            alert('There was an error submitting your enquiry.');
        },
    });

    const onSubmit = () => {
        const data = JSON.parse(localStorage.getItem("userDetails"));
        const payload = {
            ...data, enquiryData: products?.map(item => {
                return {
                    ...item,
                    CityName: item?.CityName?.value,
                    FromCurrencyCode: item?.FromCurrencyCode?.currencyCode,
                    ToCurrencyCode: item?.ToCurrencyCode?.currencyCode,
                    ConversionAmount: Number(item?.ToCurrencyCode?.value),
                    ProductName: item?.ProductName?.value,
                    ForexAmount: Number(item?.ForexAmount),
                    INRAmount: Number(item?.INRAmount),


                }
            })
        }
        mutate(payload)
        console.log(payload, "products")
    }
    const [inrAmount, setInrAmount] = useState()
    const [currencyWantAmt, setCurrencyWantAmt] = useState(0)

    const addProduct = () => {
        const formData = watch(); // Get current form value
        setProducts([...products, { TransactionType: 'BUY', ...formData }]); // Add product with calculated amount
    };

    const removeProduct = (index) => {
        setProducts(products.filter((_, i) => i !== index)); // Remove the product by index
    };

    // Calculate the overall total amount
    const grandTotal = products.reduce((sum, product) => {
        return (Number(sum) + Number(product.INRAmount || 0)).toFixed(2)
    }, 0);

    const currencyHave = data?.CurrencyHave?.map((cur) => ({
        value: cur.Price,
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
        currencyName: cur.Currencyname,
        currencyCode: cur.Currencycode,
    }));

    const currencyWant = data?.Currencywant?.map((cur) => ({
        value: cur.Price,
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
        currencyName: cur.Currencyname,
        currencyCode: cur.Currencycode,
    }));

    const productList = data?.prodlist?.map((prod) => ({
        value: prod.prodname,
        label: prod?.prodname,
    }));

    return (
        <>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* City Selection */}
                <DynamicCity
                    lbl={data?.citylbl}
                    data={data}
                    control={control}
                    name="CityName"
                    rules={{ required: "City is required" }}
                    setValue={setValue}
                />
                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}

                {/* Currency You Have and Want */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium">{data?.Currhavlbl}</label>
                        <Controller
                            name="FromCurrencyCode"
                            control={control}
                            rules={{ required: "Please select the currency you have" }}
                            render={({ field }) => (
                                <Select {...field} options={currencyHave} classNamePrefix="react-select"

                                />
                            )}
                        />
                        {errors.currencyHave && (
                            <p className="text-red-500 text-sm">{errors.currencyHave.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="text-sm font-medium">{data?.Currwantlbl}</label>
                        <Controller
                            name="ToCurrencyCode"
                            control={control}
                            rules={{ required: "Please select the currency you want" }}
                            render={({ field }) => (
                                <Select

                                    {...field}
                                    options={currencyWant}
                                    classNamePrefix="react-select"
                                    onChange={(e) => {
                                        setCurrencyWantAmt(e?.value)
                                        field.onChange(e);
                                    }}
                                />
                            )}
                        />

                        {errors.currencyWant && (
                            <p className="text-red-500 text-sm">{errors.currencyWant.message}</p>
                        )}
                    </div>
                </div>

                {/* Forex Cards Select */}
                <div>
                    <label className="text-sm font-medium">{data?.prodlbl}</label>
                    <Controller
                        name="ProductName"
                        control={control}
                        rules={{ required: "Please select a forex card" }}
                        render={({ field }) => (
                            <Select {...field} options={productList} classNamePrefix="react-select" />
                        )}
                    />
                    {errors.forexCards && (
                        <p className="text-red-500 text-sm">{errors.forexCards.message}</p>
                    )}
                </div>

                {/* Forex and INR Amount */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium">{data?.Forexlbl}</label>
                        <input
                            type="number"

                            {...register("ForexAmount", {
                                required: "Forex amount is required", onChange: (e) => {
                                    setValue("INRAmount", Number(currencyWantAmt * e.target?.value).toFixed(2))
                                }
                            })}
                            className="w-full border rounded-lg py-2 px-4"
                            placeholder="Enter Forex Amount"
                        />
                        Rate: {currencyWantAmt}
                        {errors.forexAmount && (
                            <p className="text-red-500 text-sm">{errors.forexAmount.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="text-sm font-medium">{data?.Inrlbl}</label>
                        <input
                            type="text"
                            // value={inrAmount}
                            {...register("INRAmount", { required: "INR amount is required" })}
                            className="w-full border rounded-lg py-2 px-4"
                            placeholder="Enter INR Amount"
                        />
                        {errors.INRAmount && (
                            <p className="text-red-500 text-sm">{errors.INRAmount.message}</p>
                        )}
                    </div>
                </div>

                {/* Add Product Button */}
                <button
                    type="button"
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    onClick={addProduct}
                >
                    + Add Product
                </button>

                {/* Book Order Button */}
                {
                    isPending ? <button
                        type="button"
                        className="w-full bg-[#012F76] text-white py-3 rounded-lg mt-4 flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors"
                    >
                        Loading...
                    </button> : <button
                        type="submit"
                        className="w-full bg-[#012F76] text-white py-3 rounded-lg mt-4 flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors"
                    >
                        Book this Order
                        <ArrowRight className="w-5 h-5" />
                    </button>
                }
            </form>
 
            {/* Product List Table */}
            {products.length > 0 && (
                <div className="mt-8">
                    <table className="w-full border border-collapse">
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
                            {products.map((product, index) => {
                                console.log(product)
                                return (
                                    <tr key={index} className="border-b">
                                        <td className="p-2">{product.FromCurrencyCode?.label || "N/A"}</td>
                                        <td className="p-2">{product.ProductName?.label || "N/A"}</td>
                                        <td className="p-2 text-right flex flex-col">{product.ForexAmount || "N/A"}<span className='text-xs'>Rate {product?.FromCurrencyCode?.value}</span></td>
                                        <td className="p-2 text-right">₹{product.INRAmount || "N/A"}</td>
                                        <td className="p-2 text-center">

                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() => removeProduct(index)}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    {/* Grand Total Display */}
                    <div className="mt-4 text-right">
                        <span className="text-lg font-medium">Total: </span>
                        <span className="text-xl font-semibold">₹{grandTotal}</span>
                    </div>
                </div>
            )}
        </>
    );
};








export default Buying;



