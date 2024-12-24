import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-white pt-16 pb-8 relative">

            <div className="container mx-auto px-4 z-50">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Services Section */}


                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-3">
                            {[
                                'Currency Exchange',
                                'Send Money Aboard',
                                'Prepaid Travel Forex Card',
                                'Travel Insurance',
                                'International Sim Card',
                                'Trade Remittance'
                            ].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Information</h3>
                        <ul className="space-y-3">
                            {[
                                'FAQ',
                                'Forex Rates',
                                'Currencies',
                                'Currency Converter'
                            ].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {[
                                'About us',
                                'Careers',
                                'Contact us'
                            ].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscribe Section */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 px-4 py-2 rounded-l-md border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button
                                type="button"
                                className="px-4 py-2 bg-[#011536] text-white rounded-r-md hover:bg-[#151B60] transition-colors"
                            >
                                →
                            </button>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Logo */}
                        <Link href="/" className="mb-4 md:mb-0">
                            <img
                                src="https://kzmoqp3064445j068k1m.lite.vusercontent.net/placeholder.svg"
                                alt="Pinki Tours & Travels"
                                width={150}
                                height={50}
                                className="h-10 w-auto"
                            />
                        </Link>

                        {/* Legal Links */}
                        <div className="flex space-x-6 font-semibold">
                            {['Terms', 'Privacy', 'Cookies'].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {[
                                { name: 'LinkedIn', href: '#' },
                                { name: 'Facebook', href: '#' },
                                { name: 'Twitter', href: '#' }
                            ].map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    {social.name === 'LinkedIn' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    )}
                                    {social.name === 'Facebook' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                        </svg>
                                    )}
                                    {social.name === 'Twitter' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

