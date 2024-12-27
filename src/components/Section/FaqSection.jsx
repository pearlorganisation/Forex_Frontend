import React, { useState } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
      answer:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      question: 'Need to book US Dollar today at best price? How do I go about it?',
      answer:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      question: 'Is there any specific time or day when I can buy or sell USD Dollar?',
      answer:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];

  return (
    <div className="bg-[#011536] min-h-screen flex justify-center items-center">
      <div className="max-w-lg w-full p-6">
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
              <span>{openIndex === index ? <IoIosArrowDropdownCircle size={25} /> : <IoIosArrowDropupCircle size={25} />}</span>
            </div>
            {openIndex === index && faq.answer && (
              <div className="bg-gray-100 p-4 text-sm">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
