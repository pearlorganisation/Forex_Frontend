import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { BiHeading } from "react-icons/bi";

const services = [
  {
    icon: "/assets/eth-front-color-1.png",
    title: "Currency Exchange",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit eligendi maxime consectetur temporibus ea ad optio, odio quidem explicabo. Voluptate omnis, eum quo harum molestiae expedita tenetur quae doloribus.",
    gradient: "bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200",
  },
  {
    icon: "/assets/sheild-front-color.png",
    title: "Send Money Abroad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit eligendi maxime consectetur temporibus ea ad optio, odio quidem explicabo. Voluptate omnis, eum quo harum molestiae expedita tenetur quae doloribus.",
    gradient: "bg-gradient-to-r from-green-400 via-green-300 to-green-200",
  },
  {
    icon: "/assets/medal-front-color.png",
    title: "Prepaid Forex Cards",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit eligendi maxime consectetur temporibus ea ad optio, odio quidem explicabo. Voluptate omnis, eum quo harum molestiae expedita tenetur quae doloribus.",
    gradient: "bg-gradient-to-r from-red-400 via-red-300 to-red-200",
  },
  {
    icon: "/assets/eth-front-color (1).png",
    title: "Travel Insurance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit eligendi maxime consectetur temporibus ea ad optio, odio quidem explicabo. Voluptate omnis, eum quo harum molestiae expedita tenetur quae doloribus.",
    gradient: "bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200",
  },
  {
    icon: "/assets/sheild-front-color (1).png",
    title: "International Sim Card",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gradient: "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200",
  },
  {
    icon: "/assets/medal-front-color (1).png",
    title: "Trade Remittance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gradient: "bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200",
  },
];
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // width:"100%",
    // height: '10vh', // Adjust height as needed
    flexDirection: 'row', // Align items vertically
    gap: '20px', // Add gap between sections (container)
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // Gap between small squares and square
  },
  square: {
    width: '20px',
    height: '20px',
    backgroundColor: 'rgba(1, 47, 118, 1)',
    transform: 'rotate(45deg)', // Rotate the square
  },
  smallSquare: {
    width: '18px',
    height: '8px',
  },
};

const headingColor=[
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",
  "#012F76",

]

const headingSkyblue=[

"3CD616",
"3CD616",
"3CD616",
"3CD616",
"3CD616",
"3CD616",
"3CD616",
"3CD616",
"3CD616",
"3CD616",
"3CD616",
"3CD616",
"3CD616",
"3CD616",
"3CD616",

]
{/* <div id=""></div>
< id="3CD616"></ */}

const Services = () => {
   const[isMobile,setIsMobile]=useState(false)
   
   useEffect(()=>{
    const checkWindowSize =()=>{
      setIsMobile(window.innerWidth<768)
    };
    window.addEventListener("resize",checkWindowSize);

    checkWindowSize();
    return ()=>{
      window.removeEventListener("resize",checkWindowSize)
    };
   },[])

  return (
<>
<div>
   {isMobile?(
    <div className="flex flex-row gap-8 w-full mb-10 overflow-hidden">
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Mapped Small Squares */}
        {headingColor?.slice(0, 4).map((color, index) => (
          <div
            key={index}
            style={{ ...styles.smallSquare, backgroundColor: color }}
          ></div>
        ))}
  
        {/* Rotated Square */}
        <div style={styles.square}></div>
      </div>
    </div>
    <div className="w-full  flex items-center  justify-center">
        <h1 className="text-4xl font-normal leading-[50px] mx-auto text-center decoration-none underline-from-font decoration-skip-ink-none tracking-wide"
              style={{ fontFamily: "Stoke" }}
            >Our Best Services</h1>
        </div>
  
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Rotated Square */}
        <div style={styles.square}></div>
  
        {/* Mapped Small Squares */}
        {headingColor?.slice(0, 4).map((color, index) => (
          <div
            key={index}
            style={{ ...styles.smallSquare, backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  </div>
  
    ):(<><div className="flex flex-row gap-8 w-full mb-10 overflow-hidden">
      <div style={styles.container}>
        <div style={styles.wrapper}>
          {/* Mapped Small Squares */}
          {headingColor?.map((color, index) => (
            <div
              key={index}
              style={{ ...styles.smallSquare, backgroundColor: color }}
            ></div>
          ))}
  
          {/* Rotated Square */}
          <div style={styles.square}></div>
        </div></div>
        <div className="w-full  flex items-center  justify-center">
        <h1 className="text-4xl font-normal leading-[50px] mx-auto text-center decoration-none underline-from-font decoration-skip-ink-none tracking-wide"
              style={{ fontFamily: "Stoke" }}
            >Our Best Services</h1>
        </div>
  
        <div style={styles.container}>
          <div style={styles.wrapper}>
            {/* Rotated Square */}
            <div style={styles.square}></div>
  
            {/* Mapped Small Squares */}
            {headingColor?.map((color, index) => (
              <div
                key={index}
                style={{ ...styles.smallSquare, backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
      </div></>)
   }

</div>

    <div className="min-h-screen bg-white p-8 px-20">
 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {services.map((service, index) => (
        
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
    </>
  );
};

export default Services;
