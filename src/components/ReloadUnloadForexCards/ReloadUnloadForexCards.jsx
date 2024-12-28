
import { useState } from "react"
import ReloadForex from "./ReloadForex"
import UnloadForex from "./UnloadForex"


export default function ReloadUnloadForexCards() {
    const [activeTab, setActiveTab] = useState("reload")

    return (
        <div className="w-full max-w-xl mx-auto p-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                {/* Tabs */}
                <div className="flex justify-around gap-8 mb-6">
                    <button
                        onClick={() => setActiveTab("reload")}
                        className={`text-xl font-medium ${activeTab === "reload"
                            ? "text-black border-b-2 border-black"
                            : "text-gray-400"
                            }`}
                    >
                        Reload Forex
                    </button>
                    <button
                        onClick={() => setActiveTab("unload")}
                        className={`text-xl font-medium ${activeTab === "unload"
                            ? "text-black border-b-2 border-black"
                            : "text-gray-400"
                            }`}
                    >
                        Unload Forex
                    </button>
                </div>

                {
                    activeTab === 'reload' && <ReloadForex />
                }
                {
                    activeTab === 'unload' && <UnloadForex />
                }
            </div>
        </div>
    )
}
