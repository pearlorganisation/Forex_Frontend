import React from "react";

const TravelInsurance = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Travel Insurance</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Destinations</label>
          <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
            <option>Choose an option</option>
            <option>USA</option>
            <option>Europe</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Age of Travellers</label>
          <input
            type="date"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Trip Start Date</label>
          <div className="flex space-x-2">
            <input
              type="date"
              className="block w-1/2 border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Departure Date"
            />
            <input
              type="date"
              className="block w-1/2 border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Return Date"
            />
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md mt-4">
          Continue
        </button>
      </form>
    </div>
  );
};

export default TravelInsurance;
