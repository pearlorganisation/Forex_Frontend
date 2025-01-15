import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Select from 'react-select';

const ReloadForex = ({ data }) => {
  console.log("dattttt",data)
  const [totalAmount, setTotalAmount] = useState(0);
  const [addedProducts, setAddedProducts] = useState([]); 
  const [selectedCard, setSelectedCard] = useState(null); 
  const [selectedCurrency, setSelectedCurrency] = useState(null); 
console.log("selected currency",selectedCurrency)
  console.log("addproduct",addedProducts)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      forexAmount: '',
      inrAmount: '',
    },
  });

  const onSubmit = (formData) => {
    console.log('Form SUBMIT', formData);
  };

  const handleAddProduct = () => {

    const formData = watch();
    if (!formData.forexAmount || !formData.inrAmount || !selectedCard || !selectedCurrency) {
      alert('Please fill in all required fields before adding a product.');
      return;
    }

    const currencyPrice = selectedCurrency?.price || 1; 
    console.log("currencyprice",currencyPrice)
    const calculatedAmount = formData.forexAmount * currencyPrice;

    setAddedProducts((prev) => [
      ...prev,
      {
        cardDoYouHave: selectedCard?.label || 'N/A',
        forexAmount: formData.forexAmount,
        inrAmount: formData.inrAmount,
        currencyWant: selectedCurrency?.label || 'N/A',
      },
    ]);


    setTotalAmount((prevTotal) => prevTotal + calculatedAmount);
  };

  const cardOptions = data?.cardlist?.map((card) => ({
    value: card.Cardname,
    label: card.Cardname,
  }));
  console.log(cardOptions,"cardoprtion")

  const currencyListOption = data?.currencylist?.map((cur) => ({

    value: cur.Currencycode,
    label: (
      <div className="flex items-center space-x-2">
        <img src={cur.CurrimgUrl} alt={cur.Currencyname} className="w-5 h-5" />
        <span>{`${cur.Currencyname} (${cur.Currencycode}) ${cur?.Price}`}</span>
      </div>
    ),
    price: cur.Price, 
  }));
  
  console.log("curee",currencyListOption)

  if (!data) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="space-y-8">
      {/* Form Section */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Card Selection */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium">
            {data?.ForexCardTypelbl || `What kind of card do you have?*`}
          </label>
          <Select
            options={cardOptions}
            placeholder={data?.cardtypewatermark}
            value={selectedCard}
            onChange={(selectedOption) => setSelectedCard(selectedOption)}
            classNamePrefix="react-select"
          />
          {!selectedCard && (
            <p className="text-red-500 text-sm">Card type is required</p>
          )}
        </div>

        {/* Currency Selection */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium">
            {data?.Currencylistlbl || 'What kind of currency do you want?*'}
          </label>
          <Select
            options={currencyListOption}
            placeholder={data?.Currwatermark}
            value={selectedCurrency}
            onChange={(selectedOption) =>{
              console.log("selectedonchnge",selectedOption)
              setSelectedCurrency(selectedOption)}}
            classNamePrefix="react-select"
          />
          {!selectedCurrency && (
            <p className="text-red-500 text-sm">Currency selection is required</p>
          )}
        </div>

   
        <div className="grid grid-cols-2 gap-4">
          {/* Amount Fields */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium">
              {data?.forexcontrollbl || `Forex Amount*`}
            </label>
            <input
              type="number"
              {...register('forexAmount', {
                required: 'Forex amount is required',
                min: { value: 1, message: 'Amount must be greater than zero' },
              })}
              className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`${data?.forexcontrolwatermark || `Enter amount`}`}
            />
            {errors.forexAmount && (
              <p className="text-red-500 text-sm">{errors.forexAmount.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">
              {data?.inrcontrollbl || `INR Amount*`}
            </label>
            <input
              type="number"
              {...register('inrAmount', {
                required: 'INR amount is required',
                min: { value: 1, message: 'Amount must be greater than zero' },
              })}
              className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`${data?.inrcontrolwatermark || `Enter amount`}`}
            />
            {errors.inrAmount && (
              <p className="text-red-500 text-sm">{errors.inrAmount.message}</p>
            )}
          </div>
        </div>

        {/* Add Product Button */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-sm font-medium">Total Amount: </span>
            <span className="text-lg font-semibold">₹{totalAmount}</span>
          </div>
          <button
            type="button"
            onClick={handleAddProduct}
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

      {/* Table Section */}
      {addedProducts.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Added Products</h2>
          <table className="w-full border border-gray-300 mt-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border border-gray-300">Card Type</th>
                <th className="p-2 border border-gray-300">Forex Amount</th>
                <th className="p-2 border border-gray-300">INR Amount</th>
                <th className="p-2 border border-gray-300">Currency</th>
              </tr>
            </thead>
            <tbody>
              {addedProducts.map((product, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border border-gray-300">{product.cardDoYouHave}</td>
                  <td className="p-2 border border-gray-300">{product.forexAmount}</td>
                  <td className="p-2 border border-gray-300">{product.inrAmount}</td>
                  <td className="p-2 border border-gray-300">{product.currencyWant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReloadForex;
