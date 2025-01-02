import React, { useEffect, useState } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Will carrying a forex card be a better option than carrying cash?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      question: 'When you think international travel, think us.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      question: 'Need to book US Dollar today at best price? How do I go about it?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      question: 'Is there any specific time or day when I can buy or sell USD Dollar?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: '8vh',
      flexDirection: "row",
      gap: "20px",
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    square: {
      width: "20px",
      height: "20px",
      backgroundColor: "#3CD616",
      transform: "rotate(45deg)",
    },
    smallSquare: {
      width: "18px",
      height: "8px",
    },
  };

  const headingColor = Array(22).fill("#3CD616");

  return (
    <div className="h-auto py-28 overflow-hidden">
      {isMobile ? (
        <div className="flex flex-row gap-8 w-full mb-18 overflow-hidden">
          <div style={styles.container}>
            <div style={styles.wrapper}>
              {headingColor.slice(0, 6).map((color, index) => (
                <div
                  key={index}
                  style={{ ...styles.smallSquare, backgroundColor: color }}
                ></div>
              ))}
              <div style={styles.square}></div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <h1
              className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#012F76] font-normal leading-[32px] sm:leading-[36px] md:leading-[42px] lg:leading-[50px] mx-auto text-center decoration-none tracking-wide"
              style={{ fontFamily: "Stoke" }}
            >
              FAQ’s
            </h1>
          </div>
          <div style={styles.container}>
            <div style={styles.wrapper}>
              <div style={styles.square}></div>
              {headingColor.slice(0, 6).map((color, index) => (
                <div
                  key={index}
                  style={{ ...styles.smallSquare, backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="flex flex-row gap-8 w-full mb-10">
            <div style={styles.container}>
              <div style={styles.wrapper}>
                {headingColor.map((color, index) => (
                  <div
                    key={index}
                    style={{ ...styles.smallSquare, backgroundColor: color }}
                  ></div>
                ))}
                <div style={styles.square}></div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <h1
                className="text-[40px] text-[#012F76] font-normal leading-[50px] mx-auto text-center decoration-none underline-from-font decoration-skip-ink-none w-[80%] tracking-wide"
                style={{ fontFamily: "Stoke" }}
              >
                FAQ’s
              </h1>
            </div>
            <div style={styles.container}>
              <div style={styles.wrapper}>
                <div style={styles.square}></div>
                {headingColor.map((color, index) => (
                  <div
                    key={index}
                    style={{ ...styles.smallSquare, backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#011536] max-w-2xl mx-auto rounded-lg shadow-md min-h-screen flex justify-center items-center">
        <div className="bg-[#F3F4F6] rounded-lg shadow-md p-6 max-w-lg w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white text-blue-900 rounded-lg shadow-lg mb-4 overflow-hidden ${
                openIndex === index ? 'border-yellow-400 border' : ''
              }`}
            >
              <div
                className="p-4 font-bold flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <IoIosArrowDropdownCircle size={25} />
                  ) : (
                    <IoIosArrowDropupCircle size={25} />
                  )}
                </span>
              </div>
              {openIndex === index && faq.answer && (
                <div className="bg-gray-100 p-4 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
