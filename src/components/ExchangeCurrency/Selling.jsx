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

    const addProduct = () => {
        const formData = watch(); // Get current form values

        // Find the selected currencyWant and extract its price
        const selectedCurrencyWant = data?.Currencywant?.find(
            (currency) => currency.Currencycode === formData.currencyWant?.value
        );
        console.log(selectedCurrencyWant)
        const currencyPrice = selectedCurrencyWant?.Price || 0;

        // Calculate the total amount based on forexAmount and currency price
        const calculatedAmount = formData.forexAmount * currencyPrice;

        // Add the product to the list with the calculated total amount
        setProducts([...products, { ...formData, totalAmount: calculatedAmount }]);
    };

    const removeProduct = (index) => {
        setProducts(products.filter((_, i) => i !== index)); // Remove the product by index
    };

    // Calculate the overall total amount
    const grandTotal = products.reduce((sum, product) => {
        return (Number(sum) + Number(product.totalAmount || 0)).toFixed(2);
    }, 0);

    const cityOptions = data?.cityLists?.map((city) => ({
        value: city.Cityname,
        label: city.Cityname,
    }));

    const currencyHave = data?.CurrencyHave?.map((currency) => ({
        value: currency.Currencycode,
        label: `${currency.Currencyname} (${currency.Currencycode})`,
    }));

    const currencyWant = data?.Currencywant?.map((currency) => ({
        value: currency.Currencycode,
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
                setValue={setValue}
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}

            {/* Currency You Have and Want */}
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium">{data?.Currhavlbl || 'Currency you have*'}</label>
                    <Controller
                        name="currencyHave"
                        control={control}
                        rules={{ required: "Please select the currency you have" }}
                        render={({ field }) => (
                            <Select {...field} options={currencyHave} classNamePrefix="react-select" />
                        )}
                    />
                    {errors.currencyHave && <p className="text-red-500 text-sm">{errors.currencyHave.message}</p>}
                </div>
                <div>
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
                            <Select {...field} options={currencyWant} classNamePrefix="react-select" />
                        )}
                    />
                    {errors.currencyWant && <p className="text-red-500 text-sm">{errors.currencyWant.message}</p>}
                </div>
            </div>

            {/* Forex Cards Select */}
            <div>
                <label className="text-sm font-medium">{data?.prodlbl || 'Select Forex Card*'}</label>
                <Controller
                    name="forexCards"
                    control={control}
                    rules={{ required: "Please select a forex card" }}
                    render={({ field }) => (
                        <Select {...field} options={productList} classNamePrefix="react-select" />
                    )}
                />
                {errors.forexCards && <p className="text-red-500 text-sm">{errors.forexCards.message}</p>}
            </div>

            {/* Forex and INR Amount */}
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium">Forex Amount</label>
                    <input
                        type="number"
                        {...register("forexAmount", { required: "Forex amount is required" })}
                        className="w-full border rounded-lg py-2 px-4"
                        placeholder="Enter Forex Amount"
                    />
                    {errors.forexAmount && <p className="text-red-500 text-sm">{errors.forexAmount.message}</p>}
                </div>
                <div>
                    <label className="text-sm font-medium">INR Amount</label>
                    <input
                        type="number"
                        {...register("inrAmount", { required: "INR amount is required" })}
                        className="w-full border rounded-lg py-2 px-4"
                        placeholder="Enter INR Amount"
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
                            {products.map((product, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-2">{product.currencyHave?.label || "N/A"}</td>
                                    <td className="p-2">{product.forexCards?.label || "N/A"}</td>
                                    <td className="p-2 text-right">{product.forexAmount || "N/A"}</td>
                                    <td className="p-2 text-right">₹{product.inrAmount || "N/A"}</td>
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
