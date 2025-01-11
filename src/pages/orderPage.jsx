
import React, { useState } from "react";
import { TiPencil } from "react-icons/ti";
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
  const [uploadedFiles, setuploadedFiles] = useState({
    panCard: null,
    passprotFront: null,
    passportBack: null,
    airTicket: null,
    validVisa: null,
  });

  const handleFileUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setuploadedFiles((prev) => ({ ...prev, [field]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const [modal, setModal] = useState();
  const [comment, setComment] = useState("");
  const [selectedOption, setSelectedOption] = useState("No");
  const [isChecked, setIsChecked] = useState(false);

  const handleCommentChange = (e) => setComment(e.target.value);

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Order Details */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold  bg-[#BFE3FD]  px-3 py-4  mb-4">
          <span className="bg-[#012F76] text-white rounded-full  px-3 py-1 mr-1">
            1
          </span>{" "}
          Order Details
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
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
                      className=" text-white px-4 py-2 rounded"
                    >
                  
                    <TiPencil className="text-gray-600" size={20} />
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
        <div className="grid md:grid-cols-3 gap-4">
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
        <div className="grid md:grid-cols-3 gap-4 mt-4">
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
          <div className="flex flex-row gap-20 flex-wrap">
            {Object.entries(uploadedFiles).map(([key, value]) => (
              <div key={key} className="p-4  border  rounded-lg">
                <img
                  src={value || `/path/to/${key}-sample.png`}
                  alt={`${key} sample`}
                  className="mb-2 w-52 h-32 object-cover"
                />
                <div className="flex flex-row gap-4 mt-4">
                  <button className="text-blue-600 underline mb-2">
                    view sample{" "}
                  </button>
                  <div>
                    {" "}
                    <input
                      type="file"
                      id={key}
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        handleFileUpload(e, key);
                      }}
                    />
                    <label
                      htmlFor={key}
                      className="bg-[#0A225F]  text-white px-6 py-2 rounded-3xl cursor-pointer text-center block"
                    >
                      {value ? "change" : "upload"}
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <button className="bg-green-600 text-white px-4 mt-4 rounded-r-md">
        Apply
      </button>

      <div className="py-10">
        <input type="checkbox" id="visa-requirement" className="mr-4" />
        <label htmlFor="visa-requirement" className="text-[#6E7491]">
          Click here in case you do not require a Visa or if you will receive a
          Visa on arrival.
        </label>

        <div>
          <input type="checkbox" id="visa-requirment-1" className="mr-4" />
          <label htmlFor="visa-requirement-1" className="text-[#6E7491]">
            {" "}
            I confirm that I’m in possession of valid documents as per the list
            shown above and that I haven’t bought or transferred foreign
            currency for more than USD 2,50,000 (or equivalent in another
            currency) in the current financial year.{" "}
          </label>
        </div>
      </div>
      {/* Customer Details */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold bg-[#BFE3FD]  text-[#012F76] px-3 py-4 mb-4">
          <span className="bg-[#012F76] text-white rounded-full  px-3 py-1 mr-2">
            4
          </span>
          Order Processing
        </h2>
        <div className="grid  md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Delivery Coordination Phone
            </label>
            <input
              type="text"
              className="mt-1 block w-full sm:w-48 lg:w-96 border border-gray-300 rounded-md shadow-sm p-2" // Responsive width for phone number
              placeholder="Please enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Street Address
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter your address"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
              <option>Select City</option>
              <option>USA</option>
              <option>Canada</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
              <option>Select State</option>
              <option>USA</option>
              <option>Canada</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pin Code
            </label>
            <input
              type="text"
              className="mt-1 block w-full border order-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter Pin code"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Landmark
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter Landmark"
            />
          </div>
        </div>

        <input type="checkbox" id="cn" className="mr-2" />
        <label htmlFor="cn">
          I confirm that I will be present myself to collect the order at the
          time of delivery.
        </label>

        <div className="flex  justify-end">
          <button className="mt-4 bg-[#012F76] text-white px-16 py-3 rounded-full ">
            Review Order
          </button>
        </div>
      </section>

      <section>
        <div className="p-8 bg-gray-100">
          {/* Step Header */}
          <h2 className="text-lg font-semibold bg-[#BFE3FD]  text-[#012F76] px-3 py-4 mb-4">
          <span className="bg-[#012F76] text-white rounded-full  px-3 py-1 mr-2">
      5
          </span>
          Review Details
        </h2>

          {/* Main Container */}
          <div className="bg-white shadow-md rounded-lg p-6 space-y-8">
            {/* Trip Essentials Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Trip Essentials</h3>
              <div className="flex  md:flex-row  flex-col items-center md:w-[450px] border p-4 rounded-lg shadow-sm">
                <div className="md:w-[297px]">
                  <h4 className="text-lg font-semibold">
                    International SIM Card
                  </h4>
                  <p className="text-sm text-gray-600 mt-2 ">
                    Save tons on your international voice & data usage. Get up
                    to 50% off on international SIM cards on BookMyForex.
                  </p>
                  <p className="text-sm font-semibold mt-2">
                    Plans Starting From:{" "}
                    <span className="text-black">$128</span>
                  </p>
                </div>

                <div className="flex  justify-end">
                  <button className="mt-4 bg-[#012F76] text-white px-6 py-3 rounded-full ">
                    See Plans
                  </button>
                </div>
              </div>
            </div>
<div className="flex flex-col md:flex-row justify-between">
  {/* Order Details Section */}
  <div>
              <h3 className="text-lg font-semibold mb-4">Order Details</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left text-gray-700 font-medium border-b  flex-row ">
                    <th className="py-2">Currency</th>
                    <th>Product</th>
                    <th>Forex Amount</th>
                    <th>INR Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">US Dollar</td>
                    <td>Forex Card</td>
                    <td>2,000.00</td>
                    <td>$1,70,280.00</td>
                  </tr>
                </tbody>
              </table>

              {/* Discount Code */}
              <div className="mt-4 flex flex-col md:flex-row items-center">
                <label className="text-gray-700">Have a Discount Code?</label>
                <input
                  type="text"
                  placeholder="Enter Discount Code"
                  className="border px-4 py-2 ml-4 flex-1 rounded-lg"
                />
                <button className="ml-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  Apply
                </button>
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="bg-gray-50  rounded-md" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              <h3 className="text-lg font-semibold mb-4 rounded-md px-4 py-3">Your Order Summary</h3>
              <div className="p-4 rounded-lg shadow-sm">
                <div className="flex justify-between py-2">
                  <span>Total</span>
                  <span>$1,70,280.00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>GST</span>
                  <span>$243.25</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Service Charge</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Grand Total</span>
                  <span className="text-blue-600">$1,70,533.00</span>
                </div>
              </div>
            </div>
</div>
          
          </div>
        </div>
      </section>
      <section>
  <div className="p-8 bg-gray-100">
    {/* Step Header */}

    {/* Main Container */}
    <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
      <h1 className="font-semibold text-2xl">How would you like to make your payment?</h1>

      <div>
        <h3 className="text-[#012F76] font-bold">Select a Payment Mode From The Options Below</h3>
      </div>

      <div className="flex  flex-col md:flex-row gap-4   mx-auto">
        
        <img
          src="public/assets/upi_logo_icon_169316 1.png"
          className="w-[192px] sm:w-[150px] md:w-[192px] lg:w-[120px]"
          alt="UPI Logo"
        />
        <img
          src="public/assets/free-netbanking.png"
          className="w-[192px] sm:w-[150px] md:w-[192px] lg:w-[120px]"
          alt="Free Netbanking"
        />
        <img
          src="public/assets/bank transfer.png"
          className="w-[140px] sm:w-[100px] md:w-[170px] lg:w-[120px] px-2"
          alt="349260"
        />
      </div>

      <div className="flex flex-row items-center gap-4">
        <div><img src="public/assets/cart.png" alt="" className="w-10" /></div>
        <div>
          <div>Total Amount Payable:</div>
          <div>$170,623.00</div>
        </div>
      </div>

      <div className="text-[#012F76] bg-[#ECF7FE] px-10 py-6">
        The payment must come from a savings account belonging to the customer. In case the payment is made from a joint account, please provide us with a copy of a cancelled cheque or a copy of your passbook/bank statement confirming that your account is a joint account. Transfer instructions would be provided to you via email after you complete your order booking.
      </div>

      <h1 className="text-[#012F76] text-2xl px-8 py-6 font-semibold">Lock-in Your Exchange Rates</h1>
      <div className="text-[#012F76] bg-[#ECF7FE] px-10 py-6">
        To complete your order, a deposit worth 2% of your order total needs to be paid now to fix the exchange rates for 3 working days (including today). This deposit will be refunded in full, back to the original source of payment within 12 working hours of order completion and may take up to 7 working days to reflect. This deposit will be forfeited in case of explicit cancellations or non-compliance with regulatory requirements and/or reasons as mentioned in our cancellation policy.
     
      <div className="flex flex-row items-center gap-4">
        <div><img src="public/assets/cart.png" alt="" className="w-10" /></div>
        <div>
          <div>Total Amount Payable:</div>
          <div>$170,623.00</div>
        </div>
      </div>

      <div className="text-black">Special Instructions (Optional)</div>
    </div>

    <div className="max-w-4xl mx-auto p-4">
      {/* Special Instructions */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Special Instructions (Optional)</h2>
        <textarea
          placeholder="Enter Your Comment"
          value={comment}
          onChange={handleCommentChange}
          className="w-full border-2 border-[#A1B0CC] rounded-md p-3 outline-none focus:border-[#A1B0CC]"
        />
      </div>

      {/* UPI Section */}
      <div className="mb-4">
        <div className="flex items-center space-x-4 p-3 bg-green-100 rounded-md border border-[#43e305]">
          <img
            src="public/assets/upi_logo_icon_169316 1.png"
            alt="UPI"
            className="w-14 h-12"
          />
          <p className="text-sm">
            Make your payments for the advance deposit using UPI and enjoy same
            day refund*
          </p>
        </div>
      </div>

      {/* Question Section */}
      <div className="mb-4 bg-green-100 p-3 rounded-md border border-[#43e305]">
        <p className="text-sm">
          Have you purchased or transferred foreign currency worth more than
          INR. 700,000 in the present financial year including the current
          order?
        </p>
        <div className="flex items-center space-x-6 mt-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="Yes"
              checked={selectedOption === "Yes"}
              onChange={() => setSelectedOption("Yes")}
              className="form-radio w-10 h-5 accent-green-600"
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="No"
              checked={selectedOption === "No"}
              onChange={() => setSelectedOption("No")}
              className="form-radio w-5 h-5 accent-green-600"
            />
            <span>No</span>
          </label>
        </div>
      </div>

      {/* Note Section */}
      <div className="mb-4 bg-green-100 p-3 rounded-md border border-[#43e305]">
        <p className="text-sm">
          * Payment is directly made to the account of the assigned authorized
          dealer responsible for executing the forex order. Please note that
          BookMyForex does not collect money on behalf of the vendor under any
          circumstances.
        </p>
      </div>

      {/* Terms and Agreement */}
      <div className="mb-4">
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="form-checkbox text-green-600"
          />
          <span className="text-sm">
            I, ABHINAV SINGH, agree to abide by the terms of use, confirm the
            accuracy of the provided information, and acknowledge that I am
            obligated to pay 2% of order total as cancellation charges in the
            event of order cancellation as outlined in BookMyForex’s
            cancellation policy.
          </span>
        </label>
      </div>

      {/* Refund Notice */}
      <p className="text-sm text-gray-600 mb-4">
        Same day refund is not applicable when UPI payment is made via
        @paytm* vpa
      </p>

      {/* Pay Now Button */}
       
      <div className="flex  justify-end">
          <button className="mt-4 bg-[#012F76] text-white px-20 md:px-32 py-3 rounded-full hover:bg-blue-900 "  isabled={!isChecked}> 
          Pay Now
          </button>
        </div>
    </div>
  </div> </div>

</section>

    </div>
  );
};

export default OrderDetails;
