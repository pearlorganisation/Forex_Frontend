import { Link } from "react-router-dom";


export default function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-[#0A225F]">
                            Discover the easiest way to buy and sell Forex assets
                        </h1>
                        <p className="mx-auto lg:mx-0 max-w-[600px] text-gray-600 md:text-xl">
                            Forex currencies let you buy goods and services, or trade them for profit. Here's more about what forex is, how to buy it and how to protect yourself.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 min-[400px]:gap-6">




                            {/* Explore More Button */}
                            <button className="relative bg-[#011536] px-4 py-2 text-white before:content-[`hello`] before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-10 before:translate-x-3 before:-skew-x-[25deg] before:bg-blue-900">
                                <div className="z-10">Explore more</div>
                            </button>
                            {/* Start Trading Button */}
                            <button className="relative bg-blue-900 px-4 py-2 text-white before:content-[`hello`] before:absolute before:left-0 before:top-0 before:h-full before:w-10 before:-translate-x-3 before:-skew-x-[25deg] before:bg-blue-900 before:-z-10">
                                <div className="z-10">Start Trading</div>
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[600px] aspect-[4/3]">
                            <img
                                src="/HeroImg.png"
                                alt="Forex Trading Illustration"
                                width={600}
                                height={450}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

