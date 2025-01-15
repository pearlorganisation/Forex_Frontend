import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { ArrowRight, Edit, Trash2 } from 'lucide-react';
import DynamicCity from '../DynamicCity/DynamicCity';

const Selling = ({ data, isLoading }) => {
    const [products, setProducts] = useState([]); // State to store added products
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        control,
        formState: { errors },
    } = useForm();

    const [inrAmount, setInrAmount] = useState(0)
    const [currencyHaveAmt, setCurrencyHaveAmt] = useState(0)

    const addProduct = () => {
        const formData = watch(); // Get current form values

        // Find the selected currencyWant and extract its price
        const selectedCurrencyWant = data?.Currencywant?.find(
            (currency) => currency.Currencycode === formData.currencyWant?.value
        );
        console.log(selectedCurrencyWant, "here")
        const calculatedAmount = inrAmount;

        // Add the product to the list with the calculated total amount
        setProducts([...products, { ...formData, inrAmount, totalAmount: calculatedAmount }]);
    };

    const removeProduct = (index) => {
        setProducts(products.filter((_, i) => i !== index)); // Remove the product by index
    };

    // Calculate the overall total amount
    const grandTotal = products.reduce((sum, product) => {
        return (Number(sum) + Number(product.totalAmount || 0)).toFixed(2);
    }, 0);



    const currencyHave = data?.CurrencyHave?.map((currency) => ({
        value: currency?.Price,
        label: `${currency.Currencyname} ${currency?.Price} (${currency.Currencycode})`,
    }));

    const currencyWant = data?.Currencywant?.map((currency) => ({
        value: currency.Price,
        label: `${currency.Currencyname} ${currency.Price} (${currency.Currencycode})`,
    }));

    const productList = data?.prodlist?.map((prod) => ({
        value: prod.prodname,
        label: prod.prodname,
    }));

    return (
        <form className="space-y-4" onSubmit={handleSubmit()}>
            {/* City Selection */}
            <DynamicCity
                lbl={data?.citylbl}
                data={data}
                control={control}
                name="city"
                rules={{ required: "City is required" }}
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}

            {/* Currency You Have and Want */}
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium">{data?.Currhavlbl}</label>
                    <Controller
                        name="currencyHave"
                        control={control}
                        rules={{ required: "Please select the currency you have" }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={currencyHave}
                                classNamePrefix="react-select"
                                placeholder={data?.Currhavewatermark}
                                onChange={(e) => {
                                    setCurrencyHaveAmt(e?.value)
                                    field.onChange(e);

                                }}
                            />
                        )}
                    />
                    {errors.currencyHave && <p className="text-red-500 text-sm">{errors.currencyHave.message}</p>}
                </div>
                <div>
                    <label className="text-sm font-medium">{data?.Currwantlbl}</label>
                    <Controller
                        name="currencyWant"
                        control={control}
                        rules={{
                            required: "Please select the currency you want",
                            validate: (value) =>
                                value !== watch("currencyHave") || "Currency you want cannot be the same as currency you have",
                        }}
                        render={({ field }) => (
                            <Select {...field} options={currencyWant} classNamePrefix="react-select" placeholder={data?.Currwantwatermark} />
                        )}
                    />
                    {errors.currencyWant && <p className="text-red-500 text-sm">{errors.currencyWant.message}</p>}
                </div>
            </div>

            {/* Forex Cards Select */}
            <div>
                <label className="text-sm font-medium">{data?.prodlbl}</label>
                <Controller
                    name="product"
                    control={control}
                    rules={{ required: "Please select a Product" }}
                    render={({ field }) => (
                        <Select {...field} options={productList} classNamePrefix="react-select" placeholder={data?.prodwatermark} />
                    )}
                />
                {errors.product && <p className="text-red-500 text-sm">{errors.product.message}</p>}
            </div>

            {/* Forex and INR Amount */}
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium">{data?.Forexlbl}</label>
                    <input
                        type="number"
                        {...register("forexAmount", { required: "Forex amount is required", onChange: (e) => { setInrAmount(Number(currencyHaveAmt * e.target?.value).toFixed(2)) } })}
                        className="w-full border rounded-lg py-2 px-4"
                        placeholder={data?.Forexwatermark}
                    />
                    Rate: {currencyHaveAmt}
                    {errors.forexAmount && <p className="text-red-500 text-sm">{errors.forexAmount.message}</p>}
                </div>
                <div>
                    <label className="text-sm font-medium">{data?.Inrlbl}</label>
                    <input
                        type="number"
                        value={inrAmount}
                        {...register("inrAmount", { required: "INR amount is required" })}
                        className="w-full border rounded-lg py-2 px-4"
                        placeholder={data?.InrWatermark}
                    />
                    {errors.inrAmount && <p className="text-red-500 text-sm">{errors.inrAmount.message}</p>}
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
                                        <td className="p-2">{product.currencyHave?.label || "N/A"}</td>
                                        <td className="p-2">{product?.product?.label || "N/A"}</td>
                                        <td className="p-2 text-right">{product.forexAmount || "N/A"}</td>
                                        <td className="p-2 text-right flex flex-col">₹{product.inrAmount || "N/A"}<span className='text-xs'>{product?.currencyHave?.label}</span></td>
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
