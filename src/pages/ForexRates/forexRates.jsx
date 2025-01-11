import React from "react";

const ForexRates = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full bg-blue-900 text-white text-center py-6 relative">
        <img
          src="public/bgrating.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10">
          <h1 className="text-3xl font-bold">
            FOREX <span className="text-yellow-400">RATES</span>
          </h1>
          {/* Filters Section */}
          <div className="shadow-md w-11/12 mt-6 p-4 rounded-lg flex gap-10 items-center mx-auto ">
            <select className="border border-gray-300 text-gray-700 rounded px-4 py-2 w-1/2 text-sm">
            <option value="">Choose Your City</option>
              <option>City 1</option>
              <option>City 2</option>
              <option>City 3</option>
            </select>
            <select className="border border-gray-300 rounded px-4 py-2 w-1/2 text-sm text-gray-700">
  <option value="" disabled selected>
    Select Date
  </option>
  <option value="2025-01-10">January 10, 2025</option>
  <option value="2025-01-11">January 11, 2025</option>
  <option value="2025-01-12">January 12, 2025</option>
  <option value="2025-01-13">January 13, 2025</option>
  <option value="2025-01-14">January 14, 2025</option>
  {/* Add more dates dynamically */}
</select>

          </div>
        </div>
      </div>

{/* Table Section */}
<div className="bg-white shadow-md w-11/12 mx-auto mt-6 p-4 rounded-lg overflow-x-auto">
  <table className="table-auto w-full text-left border-collapse">
    {/* Table Header */}
    <thead>
      <tr className="bg-blue-900 text-white text-center">
        <th className="p-4 border-r border-green-400" colSpan="1">
          CURRENCY
        </th>
        <th className="p-4 border-r border-green-400" colSpan="4">
          BUY RATES
        </th>
        <th className="p-4" colSpan="3">
          SELL RATES
        </th>
      </tr>
      <tr className="bg-white text-black text-center">
        <td className="p-4 border-r border-green-400">
          <input
            type="text"
            placeholder="Search Currency"
            className="w-full p-2 border rounded-lg"
          />
        </td>
        <th className="p-4 border-r border-green-400">Prepaid Forex Cards</th>
        <th className="p-4 border-r border-green-400">
          Wire Transfer (TT) / Demand Draft (DD)
        </th>
        <th className="p-4 border-r border-green-400">Cash (CN)*</th>
        <th className="p-4 border-r border-green-400">
          Cash (Bought with Card)**
        </th>
        <th className="p-4">Cash (CN)*</th>
        <th className="p-4">Prepaid Card</th>
      </tr>
    </thead>
    <tbody>
      {/* Sample Row */}
      <tr className="border-b text-center">
        <td className="p-4 flex items-center justify-center border-r border-green-400">
          <img
            src="path-to-flag.png"
            alt="flag"
            className="w-6 h-6 mr-2"
          />
          US Dollar - $
        </td>
        <td className="p-4 border-r border-green-400">83.42</td>
        <td className="p-4 border-r border-green-400">83.73</td>
        <td className="p-4 border-r border-green-400">84.4263</td>
        <td className="p-4 border-r border-green-400">84.3022</td>
        <td className="p-4">84.3022</td>
        <td className="p-4">84.3022</td>
      </tr>
      <tr className="border-b text-center">
        <td className="p-4 flex items-center justify-center border-r border-green-400">
          <img
            src="path-to-flag.png"
            alt="flag"
            className="w-6 h-6 mr-2"
          />
          Euro - €
        </td>
        <td className="p-4 border-r border-green-400">87.3399</td>
        <td className="p-4 border-r border-green-400">87.6016</td>
        <td className="p-4 border-r border-green-400">88.0401</td>
        <td className="p-4 border-r border-green-400">88.6568</td>
        <td className="p-4">88.6568</td>
        <td className="p-4">88.6568</td>
      </tr>
    </tbody>
  </table>
</div>


    </div>
  );
};

export default ForexRates;
