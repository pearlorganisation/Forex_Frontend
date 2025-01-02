import React, { useEffect, useState } from "react";
import image1 from "/assets/image 1.png";
import image2 from "/assets/image 2 (1).png";
import image3 from "/assets/3d-trading-icon-png 1.png";
import { color } from "framer-motion";
import bgimg from "/assets/bg-img.png";

const cardData = [
  {
    color: "#05FF00",
    border: "#05FF00",
    text: "$ Billion +",
    subtitle: "Exchange so far",
  },
  {
    color: "#FAFF00",
    border: "#FAFF00",
    text: "$ Billion +",
    subtitle: "Exchange so far",
  },
  {
    subdata: [
      {
        color: "#B85EFF",
        border: "#B85EFF",
        text: "$ Billion +",
        subtitle: "Exchange so far",
      },
      {
        color: "#76DFFF",
        border: "#76DFFF",
        text: "$ Billion +",
        subtitle: "Exchange so far",
      },
    ],
  },
  {
    buysell: [
      {
        image: image1,
        account: "Create Account",
        accountStatus: "Sign Up with your Email & Mobile in just 5 minutes",
        border: "#05FF00",
        color: "#05FF00",
      },
      {
        image: image2,
        account: "Verify Your Bank",
        accountStatus: "Verify your bank account in an easy way.",
        border: "#FAFF00",
        color: "#FAFF00",
      },
      {
        image: image3,
        account: "Start Instantly",
        accountStatus: "Buy & Sell a variety of top coins at the best prices.",
        border: "#B85EFF",
        color: "#B85EFF",
      },
    ],
  },
];
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width:"100%",
    // height: '10vh', // Adjust height as needed
    flexDirection: "row", // Align items vertically
    gap: "20px", // Add gap between sections (container)
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px", // Gap between small squares and square
  },
  square: {
    width: "20px",
    height: "20px",
    backgroundColor: "#3CD616",
    transform: "rotate(45deg)", // Rotate the square
  },
  smallSquare: {
    width: "18px",
    height: "8px",
  },
};
const headingColor = [
  "#3CD616",
  "#3CD616",
  "#3CD616",
  "#3CD616",
  "#3CD616",
  "#3CD616",
  "#3CD616",
  "#3CD616",
  "#3CD616",
  "#3CD616",


  
];
const styles2 = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width:"100%",
    // height: '10vh', // Adjust height as needed
    flexDirection: "row", // Align items vertically
    gap: "20px", // Add gap between sections (container)
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px", // Gap between small squares and square
  },
  square: {
    width: "20px",
    height: "20px",
    backgroundColor: "#27AAE1",
    transform: "rotate(45deg)", // Rotate the square
  },
  smallSquare: {
    width: "18px",
    height: "8px",
  },
};
const headingSkyblue = [
  "#27AAE1",
  "#27AAE1",
  "#27AAE1",
  "#27AAE1",
  "#27AAE1",
  "#27AAE1",
  "#27AAE1",
  "#27AAE1",
  "#27AAE1",
  "#27AAE1",
];

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}
function ForeignExchange() {
  const rows = chunkArray(cardData, 2); 
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

{isMobile?(
    <div className="flex flex-row gap-8 w-full mb-18 overflow-hidden">
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Mapped Small Squares */}
        {headingColor.slice(0, 2).map((color, index) => (
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
            >The World's First & Largest Online Foreign Exchange Marketplace</h1>
        </div>
  
    <div style={styles.container}>
      <div style={styles.wrapper}>  
        {/* Rotated Square */}
        <div style={styles.square}></div>
  
        {/* Mapped Small Squares */}
        {headingColor?.slice(0, 2).map((color, index) => (
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
          {headingColor.map((color, index) => (
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
            >The World's First & Largest Online Foreign Exchange Marketplace</h1>
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

    
      {/* <div className="flex flex-row gap-8 w-full mb-10 overflow-hidden">
        <div style={styles.container}>
          <div style={styles.wrapper}> */}
            {/* Mapped Small Squares */}
            {/* {headingColor?.map((color, index) => (
              <div
                key={index}
                style={{ ...styles.smallSquare, backgroundColor: color }}
              ></div>
            ))} */}

            {/* Rotated Square */}
            {/* <div style={styles.square}></div>
          </div>
        </div>
        <div className="flex items-center  justify-center">
          <h1
            className="text-[40px] text-[#012F76] font-normal leading-[50px] mx-auto text-center decoration-none underline-from-font decoration-skip-ink-none w-[80%] tracking-wide"
            style={{ fontFamily: "Stoke" }}
          >
            The World's First & Largest Online Foreign Exchange Marketplace
          </h1>
        </div>

        <div style={styles.container}>
          <div style={styles.wrapper}>
            {/* Rotated Square */}
            {/* <div style={styles.square}></div> */}

            {/* Mapped Small Squares */}
            {/* {headingColor?.map((color, index) => ( */}
              {/* <div
                key={index}
                style={{ ...styles.smallSquare, backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
      </div> */} 
      <div>
        <div
          className="flex flex-col gap-10  items-center justify-center"
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* Render rows dynamically */}
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex  flex-col  lg:flex-row gap-10">
              {row.map((item, index) => (
                <React.Fragment key={index}>
                  {/* Render main cards */}
                  {item.color && (
                    <div
                      className="bg-[#011536] h-30 w-72 px-4 py-4 border-2 items-center text-center rounded-md"
                      style={{
                        borderColor: item.border,
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                    >
                      <div
                        className="text-[#05FF00] text-3xl"
                        style={{
                          color: item.color,
                          fontFamily: "'Sarpanch', sans-serif",
                        }}
                      >
                        {item.text}
                      </div>
                      <div
                        className="text-white"
                        style={{
                          fontFamily: "'Sansation', sans-serif",
                          fontSize: "22px",
                        }}
                      >
                        {item.subtitle}
                      </div>
                    </div>
                  )}

                  {/* Render subdata */}
                  {item.subdata && (
                    <div className="flex  flex-col lg:flex-row lg:gap-10">
                      {item.subdata.map((subitem, subIndex) => (
                        <div
                          key={subIndex}
                          className="bg-[#011536] h-30 w-72 px-4 py-4 border-2 items-center text-center rounded-md"
                          style={{
                            borderColor: subitem.border,
                            boxShadow:
                              "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          }}
                        >
                          <div
                            className="text-[#05FF00] text-3xl"
                            style={{
                              color: subitem.color,
                              fontFamily: "'Sarpanch', sans-serif",
                            }}
                          >
                            {subitem.text}
                          </div>
                          <div
                            className="text-white"
                            style={{
                              fontFamily: "'Sansation', sans-serif",
                              fontSize: "22px",
                            }}
                          >
                            {subitem.subtitle}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>

        {/* Render "Buy & Sell" Section */}
        {cardData.map((item, index) =>
        
          item.buysell ? (
            <div key={index} className="py-10">


{isMobile?(
    <div className="flex flex-row gap-8 w-full mb-18 overflow-hidden">
    <div style={styles2.container}>
      <div style={styles2.wrapper}>
        {/* Mapped Small Squares */}
        {headingSkyblue.slice(0, 2).map((color, index) => (
          <div
            key={index}
            style={{ ...styles2.smallSquare, backgroundColor: color }}
          ></div>
        ))}
  
        {/* Rotated Square */}
        <div style={styles2.square}></div>
      </div>
    </div>
  
    <div className="flex items-center  justify-center">
                  <h1
                    className="text-[40px] text-[#04080e] font-normal leading-[50px] mx-auto text-center decoration-none underline-from-font decoration-skip-ink-none w-[80%] tracking-wide"
                    style={{ fontFamily: "Stoke" }}
                  >
                    Start Buying & Selling Forex in Few Steps
                  </h1>
                </div>
  
    <div style={styles.container}>
      <div style={styles.wrapper}>  
        {/* Rotated Square */}
        <div style={styles2.square}></div>
  
        {/* Mapped Small Squares */}
        {headingSkyblue?.slice(0, 2).map((color, index) => (
          <div
            key={index}
            style={{ ...styles2.smallSquare, backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  </div>
  
    ):(<>
         <div className="flex flex-row gap-8 w-full mb-10">
                <div style={styles2.container}>
                  <div style={styles2.wrapper}>
                    {/* Mapped Small Squares */}
                    {headingSkyblue?.map((color, index) => (
                      <div
                        key={index}
                        style={{
                          ...styles2.smallSquare,
                          backgroundColor: color,
                        }}
                      ></div>
                    ))}

                    {/* Rotated Square */}
                    <div style={styles2.square}></div>
                  </div>
                </div>
                <div className="flex items-center  justify-center">
                  <h1
                    className="text-[40px] text-[#04080e] font-normal leading-[50px] mx-auto text-center decoration-none underline-from-font decoration-skip-ink-none w-[80%] tracking-wide"
                    style={{ fontFamily: "Stoke" }}
                  >
                    Start Buying & Selling Forex in Few Steps
                  </h1>
                </div>

                <div style={styles2.container}>
                  <div style={styles2.wrapper}>
                    {/* Rotated Square */}
                    <div style={styles2.square}></div>

                    {/* Mapped Small Squares */}
                    {headingSkyblue?.map((color, index) => (
                      <div
                        key={index}
                        style={{
                          ...styles.smallSquare,
                          backgroundColor: color,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div></>)}

        

              <div className="flex flex-col lg:flex-row gap-10    justify-center">
                {item.buysell.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="bg-[#011536] h-30 w-72 px-2 py-2 border-2 items-center text-center rounded-md mx-auto"
                    style={{
                      borderColor: step.border,
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                  >
                    <div className="flex flex-row  mx-auto gap-2 text-start justify-start items-center">
                      <div>
                        <img
                          src={step.image}
                          alt={step.account}
                          className="w-20 h-10 mx-auto "
                        />
                      </div>
                      <div>
                        <h3
                          className="text-base font-semibold text-start text-[#012F76]"
                          style={{ color: step.color }}
                        >
                          {step.account}
                        </h3>
                        <p
                          className="text-base text-start"
                          style={{ color: "rgba(255, 255, 255, 0.65)" }}
                        >
                          {step.accountStatus}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
}

export default ForeignExchange;
