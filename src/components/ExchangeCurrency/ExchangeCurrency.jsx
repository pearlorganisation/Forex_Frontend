
import { useState } from "react"
import Buying from "./Buying"
import Selling from "./Selling"

export default function ExchangeCurrency() {
    const [activeTab, setActiveTab] = useState("buying")

    return (
        <div className="w-full max-w-xl mx-auto p-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
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


