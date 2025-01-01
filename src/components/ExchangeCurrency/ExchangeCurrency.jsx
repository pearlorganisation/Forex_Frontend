
import { useState } from "react"
import Buying from "./Buying"
import Selling from "./Selling"

export default function ExchangeCurrency() {
    const [activeTab, setActiveTab] = useState("buying")
    const [img, setImg] = useState("https://s3-alpha-sig.figma.com/img/0a9d/1900/208e1f578c87f2b9c9f537a5607ff734?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhe7V1ILNpk4sf5j7P0tj6HlfX1nFR1T2wlVVWYRhY589pO75qv7zg-227YVvNvPNUre7R9Vsj-kIyu37tUeXCK9XmMB4T-iQZPGe~YC6z9ebGdKfcQHyX38jQ8OH72-jASxgLYTybCcyJqveE7D-HQ5EOxXH6IB1MFAUmITb0DowWSEyEShXCndr16YcVasqcbkPoL0fMo1HOisR0u0uSClklog9VoBtUpKDXhStotfB~JaioLwYd1nT1meTV~934PLE2TDxVJq5tjZ3MPoiT1piQCAgYkT-oVY7DKDODCAgmdDQ3BHg1QTuCIGCgmnMzJYy~L9FhHl2GMWBOtw5Q__")


    return (
        <div className="w-full max-w-xl mx-auto p-6">
            <div className="bg-white relative rounded-2xl shadow-sm border border-gray-200 p-6">
                <img className="absolute hidden md:block right-[-8.5rem] size-48 top-[8rem] -z-10 -rotate-[30deg]" src={img} alt="" />
                <img className="absolute hidden md:block left-[-8.5rem] size-48 bottom-[8rem] -z-10 -rotate-[30deg]" src={img} alt="" />
                {/* Tabs */}
                <div className="flex justify-around gap-8 mb-6">
                    <button
                        onClick={() => setActiveTab("buying")}
                        className={`text-xl font-medium ${activeTab === "buying"
                            ? "text-black border-b-2 border-black"
                            : "text-gray-400"
                            }`}
                    >
                        Buying
                    </button>
                    <button
                        onClick={() => setActiveTab("selling")}
                        className={`text-xl font-medium ${activeTab === "selling"
                            ? "text-black border-b-2 border-black"
                            : "text-gray-400"
                            }`}
                    >
                        Selling
                    </button>
                </div>

                {
                    activeTab === 'buying' && <Buying />
                }
                {
                    activeTab === 'selling' && <Selling />
                }
            </div>
        </div>
    )
}


