import { div } from "framer-motion/client";
import React from "react";

const services = [
  {
    icon: "/src/assets/eth-front-color-1.png",
    title: "Currency Exchange",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit eligendi maxime consectetur temporibus ea ad optio, odio quidem explicabo. Voluptate omnis, eum quo harum molestiae expedita tenetur quae doloribus.",
    gradient: "bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200",
  },
  {
    icon: "/src/assets/sheild-front-color.png",
    title: "Send Money Abroad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit eligendi maxime consectetur temporibus ea ad optio, odio quidem explicabo. Voluptate omnis, eum quo harum molestiae expedita tenetur quae doloribus.",
    gradient: "bg-gradient-to-r from-green-400 via-green-300 to-green-200",
  },
  {
    icon: "/src/assets/medal-front-color.png",
    title: "Prepaid Forex Cards",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit eligendi maxime consectetur temporibus ea ad optio, odio quidem explicabo. Voluptate omnis, eum quo harum molestiae expedita tenetur quae doloribus.",
    gradient: "bg-gradient-to-r from-red-400 via-red-300 to-red-200",
  },
  {
    icon: "/src/assets/eth-front-color (1).png",
    title: "Travel Insurance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit eligendi maxime consectetur temporibus ea ad optio, odio quidem explicabo. Voluptate omnis, eum quo harum molestiae expedita tenetur quae doloribus.",
    gradient: "bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200",
  },
  {
    icon: "/src/assets/sheild-front-color (1).png",
    title: "International Sim Card",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gradient: "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200",
  },
  {
    icon: "/src/assets/medal-front-color (1).png",
    title: "Trade Remittance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gradient: "bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white p-8 px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {services.map((service, index) => (
          // <div
          //   key={index}
          //   className="relative flex flex-col items-center text-center p-6 h-full w-full"
          //   style={{
          //     borderTop: "4px solid",
          //     borderLeft: "4px solid",
          //     borderRight: "4px solid",
          //     borderImage: "linear-gradient(180deg, #012F76 -26.17%, rgba(164, 164, 164, 0) 79.91%, rgba(255, 255, 255, 0) 79.91%)",
          //     borderImageSlice: 1,
          //     borderRadius: "15px",
          //   }}
          // >
          //   <div className="absolute -top-6 mb-6">
          //     {/* Icon above the gradient background */}
          //     <div className="relative z-10 h-16 w-16 flex items-center justify-center mb-4">
          //       <img src={service.icon} alt={service.title} className="h-full w-full" />
          //     </div>

          //     {/* Gradient Background */}
          //     <div
          //       className={`absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-8 h-24 w-24 ${service.gradient} blur-lg`}
          //     ></div>
          //   </div>

          //   {/* Content */}
          //   <h3 className="mt-20 font-bold text-lg">{service.title}</h3>
          //   <p className="mt-2 text-sm text-gray-500">{service.description}</p>
          // </div>
<div className="relative">
  <div
    className="p-1 rounded-t-lg"
    style={{
      background:
        "linear-gradient(180deg, #012F76 -10%, rgba(164, 164, 164, 0) 50%, rgba(255, 255, 255, 0) 50%)",
      border: "1px solid transparent",
      borderRadius: "20px",
      backgroundClip: "padding-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "3px",
      borderLeft: "1px solid transparent",
      borderRight: "1px solid transparent",
      borderBottom: "none",
    }}
  >
    <div className="border bg-white px-4 py-6 border-b-0"   style={{ borderRadius: "15px 15px 0 0" }}>
    <div
    className="p-1 rounded-t-lg"
    style={{
      background:
        "linear-gradient(180deg, #012F76 -10%, rgba(164, 164, 164, 0) 50%, rgba(255, 255, 255, 0) 50%)",
      border: "1px solid transparent",
      borderRadius: "20px",
      backgroundClip: "padding-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "3px",
      borderLeft: "1px solid transparent",
      borderRight: "1px solid transparent",
      borderBottom: "none",
    }}
  >
    <div className="border bg-white px-4 py-6 border-b-0"  style={{ borderRadius: "15px 15px 0 0" }}>
      {/* Icon Section */}
      <div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        style={{ zIndex: 50 }}
      >
     
        <div
          className={`absolute h-24 w-24 blur-xl rounded-full ${service.gradient}`}
          style={{
            zIndex: 10, 
          }}
        ></div>
        {/* Icon */}
        <div
          className="relative z-20 h-16 w-16 flex  items-center justify-center"
          style={{
       
            borderRadius: "50%", 
          }}
        >
          <img src={service.icon} alt={service.title} className="h-full w-full" />
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center mt-8" style={{WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent)"}}>
        <h3 className="font-bold text-lg">{service.title}</h3>
        <p className="mt-2 text-sm text-gray-500 mb-10">{service.description}</p>
      </div>
    </div>
  </div></div>
</div>
</div>


  ))}
      </div>
    </div>
  );
};

export default Services;
