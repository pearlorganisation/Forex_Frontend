

import { useState } from 'react'
import { ChevronLeft, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import instance from '../../api/api'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { img } from 'framer-motion/client'


// const faqs = [
//     {
//         question: "Can I get my TCS amount back?",
//         answer: "Yes, most certainly. Unlike TDS, Tax Collected at Source (TCS) can be adjusted while filing tax returns.",
//         isOpen: true
//     },
//     {
//         question: "I have booked a Forex card, when will it be delivered?",
//         answer: "Forex cards are typically delivered within 2-3 business days after booking confirmation."
//     },
//     {
//         question: "How long does it take for the card to get activated?",
//         answer: "Cards are usually activated within 24 hours after delivery."
//     },
//     {
//         question: "What currencies are available for exchange?",
//         answer: "We offer major currencies including USD, EUR, GBP, AUD, and more."
//     },
//     {
//         question: "Can I buy 2 or more currencies in single order?",
//         answer: "Yes, you can purchase multiple currencies in a single transaction."
//     }
// ]

export default function ForexRatedFAQ() {
    const fetchFaqData = async () => {
        const response = await instance.get(`/api/Forex/GetForexHomePage`);
        return response.data;
    };

    const useFaqData = () => {
        return useQuery({
            queryKey: ["faqData"],
            queryFn: fetchFaqData,
            select: (data) => data?.faqs
        });
    };

    const { data: faqs, isLoading, error } = useFaqData();
    console.log(faqs, "faqs");


    const [openItems, setOpenItems] = useState(() => {
        const initial = {}
        faqs?.forEach((faq, index) => {
            if (faq.isOpen) initial[index] = true
        })
        return initial
    })

    const toggleItem = (index) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-[#1a237e]/90 text-white py-12 px-4 relative">
                <div className='grid grid-cols-3 absolute top-0 w-full opacity-30'>
                    {Array.from({ length: 3 })?.map(item => {
                        return <img className='w-full h-full' src="https://s3-alpha-sig.figma.com/img/2512/5d0a/e6cce41280d2808fb0127b01e97507ad?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YQ63PR-y7hxb451NOqcsr9bsUWkEW~s0qWjlLVQ7GvVzZBG~EPXK-FVboXF~twkFqjjhVRrtu~opuCFwj8aC1G6frnq3ftmirXCuxHtSxg-eq~opb6Gq3U5gcbUJ37Ru5m44mL-TdTLAbzhyEk9sGIOpTrvVY6gDJOo~uZQsP8Kvmt~LWvLSz~U4s~xivwUreqnz3HXgawX2EOVkKWa~JooMGaZTHA7pQbeCATsyOJg5DsMvZXokM~IHu3m-CRcjmor9OgihOFh2nlrccwY4UMmFQIq96tvU2qB6QaQ6jXCFIdpCjbl-c92doghLR8SgqgxbRXncmjkQbHhtl~kgxQ__" alt="" srcset="" />
                    })}
                </div>
                <div className="max-w-3xl h-[35vh] mx-auto  flex flex-col justify-center items-center">
                    <Link
                        to="#"
                        className="absolute left-4 top-4 md:left-8 md:top-8 inline-flex items-center text-white/80 hover:text-white"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <span className="ml-1">Back</span>
                    </Link>
                    <div className="text-center space-y-3">
                        <h1 className="text-3xl md:text-[60px] font-bold mb-2 !leading-normal">
                            Frequently Asked
                            <span className="block text-amber-400">Questions</span>
                        </h1>
                        <p className="text-white/80 md:w-[70%] text-base md:text-[20px] text-center mx-auto">
                            Got a question in mind? Leave it here and we will answer right away
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ List */}
            {
                isLoading ? <>Loading</> : <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="space-y-4 border-2 border-[#012F76] rounded-lg p-8">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 rounded-lg overflow-hidden transition-all"
                            >
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                                >
                                    <span className="font-medium text-gray-900">{faq?.FaqHeader}</span>
                                    {openItems[index] ? (
                                        <Minus className="w-5 h-5 text-gray-500" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-500" />
                                    )}
                                </button>
                                {openItems[index] && (
                                    <motion.div
                                        initial={{ opacity: 0.1 }}
                                        animate={{ opacity: 1 }}
                                        className="px-4 pb-4 text-gray-600">
                                        {faq?.FaqValue}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}



