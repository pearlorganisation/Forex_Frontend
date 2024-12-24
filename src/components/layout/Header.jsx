

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SlideTabs } from '../SlideTabs'

export default function Header() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <header className="w-full bg-white shadow-sm">
            {/* Top bar with logo and auth buttons */}
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center ">
                    <Link to="/">
                        <img
                            src="https://kzmoqp3064445j068k1m.lite.vusercontent.net/placeholder.svg"
                            alt="Pinki Tours & Travels"

                            className="size-14"
                        />
                    </Link>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="px-8 py-2 text-white bg-[#43E305] font-medium rounded-full transition-colors"
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className="px-8 py-2 text-white bg-[#0A225F] font-medium rounded-full transition-colors"
                    >
                        Register
                    </Link>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="border-t">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8 font-medium">
                            <SlideTabs />

                        </div>

                        <div className='space-x-6'>
                            {/* Forex Rates Button */}
                            <Link
                                href="/faqs"
                                className="py-4 text-[#1A237E] font-medium hover:text-[#151B60] transition-colors"
                            >
                                FAQ's
                            </Link>
                            <Link
                                href="/forex-rates"
                                className="px-6 py-2 text-white bg-gradient-to-b from-[#012F76] to-[#43E305] font-medium rounded-full transition-colors"
                            >
                                Forex Rates
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <div
                                className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden transition-opacity duration-300 ease-in-out"
                                style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
                                onClick={() => setIsOpen(false)}
                            />
                            {/* Sliding Menu */}
                            <div
                                className={`
                  fixed top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl 
                  transform transition-all duration-300 ease-in-out
                  md:hidden
                  ${isOpen ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-full scale-95 opacity-0'}
                `}
                            >
                                {/* Close button */}
                                <button
                                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>

                                {/* Menu Items */}
                                <div className="flex flex-col space-y-4 p-6 pt-16">
                                    {['Home', 'Services', 'Top Currencies', 'Currency Convertor', "FAQ's"].map((item, index) => (
                                        <Link
                                            key={item}
                                            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className={`
                        text-gray-500 hover:text-gray-800 transition-all duration-300 ease-in-out
                        ${item === 'Home' ? 'text-gray-800 font-medium' : ''}
                        ${item === "FAQ's" ? 'text-[#1A237E] font-medium hover:text-[#151B60]' : ''}
                        transform transition-transform duration-300 ease-in-out
                        ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                      `}
                                            style={{ transitionDelay: `${index * 50}ms` }}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}


