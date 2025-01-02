import { div, object } from "framer-motion/client";
import React, { useState } from "react";

const OrderDetails = () => {
  const data = [
    {
      currency: "US Dollar",
      forex: "1.00",
      product: "Product 1",
      amount: "75.50",
    },

    // Add more data as needed
  ];
 const[uploadedFiles,setuploadedFiles]=useState({
  panCard:null,
  passprotFront:null,
  passportBack:null,
  airTicket:null,
  validVisa:null
 })

const handleFileUpload=(e,field)=>{
  const file= e.target.files[0];
  if(file){
    const reader= new FileReader();
    reader.onload=()=>
    {
      setuploadedFiles((prev)=>({...prev,[field]:reader.result}));
    };
    reader.readAsDataURL(file);
  }

};

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Order Details */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold  bg-[#BFE3FD]  px-3 py-4  mb-4">
          <span className="bg-[#012F76] text-white rounded-full  px-3 py-1 mr-1">
            1
          </span>{" "}
          Order Details
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Order Type
            </label>
            <select className="mt-1 block w-full  border border-gray-300 rounded-md shadow-sm p-2">
              <option>BUY</option>
              <option>SELL</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Currency
            </label>
            <select className="mt-1 block w-full border  border-gray-300 rounded-md shadow-sm p-2">
              <option>US Dollar</option>
              <option>Euro</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Foreign Currency Amount
            </label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 border rounded-md shadow-sm p-2"
              placeholder="Enter Foreign Currency Amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              INR Amount
            </label>
            <input
              type="text"
              className="mt-1 block w-full  border  border-gray-300 rounded-md shadow-sm p-2"
              placeholder="+91 XXXX-XXXX"
            />
          </div>
        </div>
        <div className="flex  justify-end">
          <button className="mt-4 bg-[#012F76] text-white px-4 py-2 rounded-full ">
            + Add Product
          </button>
        </div>

        <div className="overflow-x-auto p-4">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Currency
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Forex
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  INR Amount
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {row.currency}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {row.forex}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {row.product}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {row.amount}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => handleAction(row.currency)}
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Action
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <div className="bg-[rgba(255, 255, 255, 1)] text-gray-500">
            Have a Discount Code?
          </div>
          <div className="border-2  border-[#63E830] flex w-64 justify-end ">
            <div className="    w-20 bg-[#63E830] text-white text-center ">
              Apply
            </div>
          </div>
          {}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Have a Discount Code?
          </label>
          <div className="flex items-center mt-2">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-l-md p-2"
              placeholder="Enter Discount Code"
            />
          </div>
        </div>
      </section>

      {/* Customer Details */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold bg-[#BFE3FD]  px-3 py-4 mb-4">
          <span className="bg-[#012F76] text-white rounded-full  px-3 py-1 mr-2">
            2
          </span>
          Customer Details
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Traveller's Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              className="mt-1 block w-full border first-letter: border-gray-300 rounded-md shadow-sm p-2"
              placeholder="+91 XXXX-XXXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="example@email.com"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pan Number
            </label>
            <input
              type="text"
              className="mt-1 block w-full border order-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter PAN"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Country You're Traveling To
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
              <option>Select Country</option>
              <option>USA</option>
              <option>Canada</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Travel Start Date
            </label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter Date"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Travel End Date
            </label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter Date"
            />
          </div>
        </div>
        <div className="flex  justify-end">
          <button className="mt-4 bg-[#012F76] text-white px-4 py-2 rounded-full ">
            Continue
          </button>
        </div>

      </section>

      {/* Eligibility Check */}
      <section>
        <h2 className="text-lg font-semibold bg-[#BFE3FD]  px-3 py-4 mb-4 ">
          <span className="bg-[#012F76] text-white rounded-full w-30  px-3 py-1 mr-2 ">
            3
          </span>
          Eligibility Check
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Purpose
          </label>
          <select className="mt-1 block w-52 border  border-gray-300 rounded-md shadow-sm p-2">
            <option>Select Purpose</option>
            <option>Business</option>
            <option>Travel</option>
          </select>
        </div>
        <div className="flex flex-row gap-10 items-center justify-center">
          <div className="text-gray-500">Document Required</div>
       
  <label className="flex  flex-row items-center gap-2">
    <input
      type="radio"
      name="option"
      value="yes"
      className="cursor-pointer accent-[#63E830] "
    />
    Yes
  </label>
  <label className="flex items-center gap-2">
    <input
      type="radio"
      name="option"
      value="no"
      className="cursor-pointer accent-[#63E830]"
    />
    No
  </label>

        </div>

{/* img section */}

<div>
  <div>upload require documents</div>
  <div>
    {Object.entries(uploadedFiles).map(([key,value])=>(
      <div key={key} className="p-4  border  rounded-lg">
        <img src={value ||`/path/to/${key}-sample.png`} alt={`${key} sample`}  
        className="mb-2 w-full h-32 object-cover"
        />
<button className="text-blue-600 underline mb-2">view sample </button>
 <input type="file" id={key} className="hidden" accept="image/*" onChange={(e)=>{handleFileUpload(e,key)}}/>
<label htmlFor={key} className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer text-center block">
  {value?"change":"upload"}</label>
      </div>
    ))}
  </div>
</div>


      </section>

      <button className="bg-green-600 text-white px-4 rounded-r-md">
        Apply
      </button>

    </div>
  );
};

export default OrderDetails;
