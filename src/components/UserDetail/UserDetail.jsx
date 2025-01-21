import { useState, useEffect } from "react";

export default () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem("userDetails");
        if (!data) {
            setIsVisible(true);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const CustomerName = e.target.name.value;
        const Phone = e.target.phone.value;
        const Email = e.target.email.value;
        const userDetails = { CustomerName, Phone, Email };
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center absolute top-0 backdrop-blur z-50 bg-black/30 sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl font-mono">Enter Details</h3>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#012F76] shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#012F76] shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#012F76] shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white font-medium bg-[#012F76] hover:bg-[#012F76] active:bg-[#012F76] rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};
