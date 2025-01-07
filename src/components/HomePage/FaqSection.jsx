import React, { useEffect, useState } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import instance from '../../api/api';

const faqData = [
  {
    question: "Will carrying a forex card be a better option than carrying cash?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "When you think international travel, think us.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Need to book US Dollar today at best price? How do I go about it?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Is there any specific time or day when I can buy or sell USD Dollar?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <motion.div className={`mb-4 overflow-hidden bg-white rounded-lg transition-shadow py-4 ${isOpen ? 'outline outline-2 outline-yellow-400' : ''
      }`} initial={false}>
      <button onClick={onToggle} className="flex items-center justify-between w-full p-4 text-left">
        <span className="font-medium">{item?.FaqHeader}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-blue-900" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 pb-4 text-gray-600">{item?.FaqValue}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {

  const fetchFaqs = async () => {
    const response = await instance.get(`/api/Forex/GetForexHomePage`)
    return response?.data
  }
  const useFetchFaqs = () => {
    return useQuery({
      queryKey: ["faqa"],
      queryFn: fetchFaqs,
      select: data => data.faqs
    })
  }

  const { data, isLoading, error } = useFetchFaqs()
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
      <div className="min-h-screen pt-28 p-4 rounded-[20px] bg-[#0a1233] flex items-start justify-center">
        <div className="w-full max-w-4xl">
          {data?.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
