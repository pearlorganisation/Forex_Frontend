import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules"; // Correct import for Navigation module

import bg1 from "/assets/Vector 10.png";
import bg2 from "/assets/Vector 11.png";

const testimonials = [
  {
    name: "Kato Drake Smith",
    role: "App Developer",
    image: "/assets/Vector 18-1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
  },
  {
    name: "Kato Drake Smith",
    role: "App Developer",
    image: "/assets/Vector 18-1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
  },
  {
    name: "Kato Drake Smith",
    role: "App Developer",
    image: "/assets/Vector 18-1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
  },  {
    name: "Kato Drake Smith",
    role: "App Developer",
    image: "/assets/Vector 18-1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
  },
   {
    name: "Kato Drake Smith",
    role: "App Developer",
    image: "/assets/Vector 18-1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
  },
  {
    name: "Kato Drake Smith",
    role: "App Developer",
    image: "/assets/Vector 18-1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
  },  {
    name: "Kato Drake Smith",
    role: "App Developer",
    image: "/assets/Vector 18-1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
  },
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
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:"100%",
    height: '10vh', // Adjust height as needed
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
    backgroundColor:"#27AAE1",
    transform: "rotate(45deg)", // Rotate the square
  },
  smallSquare: {
    width: "18px",
    height: "8px",
  },
};

const Testimonials = () => {
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsActive(true);
      } else {
        setIsActive(false); // For smaller screens, set it to false
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="py-16 bg-[#FFFFF] over">
      {/* <h1 className="text-center text-[40px] text-[#012F76] font-normal leading-[50px] mb-20">
     
      </h1> */}
      {isMobile?(
    <div className="flex flex-row gap-8 w-full mb-18 overflow-hidden">
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Mapped Small Squares */}
        {headingSkyblue?.slice(0, 4).map((color, index) => (
          <div
            key={index}
            style={{ ...styles.smallSquare, backgroundColor: color }}
          ></div>
        ))}
  
        {/* Rotated Square */}
        <div style={styles.square}></div>
      </div>
    </div>
  
    <div className="w-full flex items-center justify-center">
    <div className="flex items-center mx-auto justify-center ">
                  <h1
                    className="text-[40px] text-[#04080e] font-normal  mx-auto text-center decoration-none underline-from-font  tracking-wide"
                    style={{ fontFamily: "Stoke" }}
                  >
                   Testimonials
                  </h1>
                </div> 
    </div>
  
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Rotated Square */}
        <div style={styles.square}></div>
  
        {/* Mapped Small Squares */}
        {headingSkyblue?.slice(0, 4).map((color, index) => (
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
          {headingSkyblue.map((color, index) => (
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
            >Testimonials</h1>
        </div>
  
        <div style={styles.container}>
          <div style={styles.wrapper}>
            {/* Rotated Square */}
            <div style={styles.square}></div>
  
            {/* Mapped Small Squares */}
            {headingSkyblue?.map((color, index) => (
              <div
                key={index}
                style={{ ...styles.smallSquare, backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
      </div></>)
   }
      {/* <div className="flex flex-row gap-8 w-full mb-20 ">
                <div style={styles2.container}>
                  <div style={styles2.wrapper}>
                    {/* Mapped Small Squares */}
                    {/* {headingSkyblue?.map((color, index) => (
                      <div
                        key={index}
                        style={{
                          ...styles2.smallSquare,
                          backgroundColor: color,
                        }}
                      ></div>
                    ))} */}

                    {/* Rotated Square */}
                    {/* <div style={styles2.square}></div>
                  </div>
                </div>
                <div className="flex items-center mx-auto justify-center ">
                  <h1
                    className="text-[40px] text-[#04080e] font-normal leading-[50px] mx-auto text-center decoration-none underline-from-font decoration-skip-ink-none w-[80%] tracking-wide"
                    style={{ fontFamily: "Stoke" }}
                  >
                   Testimonials
                  </h1>
                </div> */}

                {/* <div style={styles2.container}>
                  <div style={styles2.wrapper}>
                    {/* Rotated Square */}
                    {/* <div style={styles2.square}></div> */}

                    {/* Mapped Small Squares */}
                    {/* {headingSkyblue?.map((color, index) => (
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
              </div> */}

      <div className="relative">
  {/* Swiper Prev Button */}
  <div className="swiper-button-prev absolute !left-[35px] lg:!left-[250px] top-1/2 !mt-10 transform -translate-y-1/2 !text-gray-500 z-10 text-xl scale-75 font-bold"></div>
  
  {/* Swiper Next Button */}
  <div className="swiper-button-next absolute !right-[35px]  lg:!right-[250px] !h-10 !mt-10 top-1/2 transform -translate-y-1/2 !text-gray-500 z-10 text-xl font-bold scale-75"></div>
  
  {/* Text */}
  <h1 className="absolute left-[50%] -top-12 transform -translate-x-1/2 -translate-y-1/2 text-center  text-2xl lg:text-3xl text-[#525252] font-bold font-roboto leading-[42.19px]   decoration-transparent mt-28">

  What Our Clients Say About Us
  </h1>
  
  {/* Pagination */}
  <div className="absolute left-[50%]  bottom-5 transform -translate-x-1/2 text-center">
    <div className="swiper-pagination"></div>
  </div>
</div>


        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            el:".swiper-pagination",
            clickable:true,
          }}
          modules={[Navigation,Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center mt-28">
                <div className="relative w-[400px] h-[350px] mb-20">
                  <img src={bg1} alt="Vector Background" className="w-[450px]" />
                  <img
  src={bg2}
  alt="Vector Overlay"
  className="absolute top-2 right-10 w-[380px] "
/> 



                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-400 mb-4">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  
                    <p className="text-gray-600 mt-4 px-10">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  
  );
};

export default Testimonials;
