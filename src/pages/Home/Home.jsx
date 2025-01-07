import React from 'react'
import HeroSection from '../../components/HomePage/HeroSection'
import Services from '../../components/HomePage/services.jsx'
import ForeignExchange from '../../components/HomePage/ForeignExchange.jsx'
import Testimonials from '../../components/HomePage/Testimonials.jsx'
import FAQ from '../../components/HomePage/FaqSection.jsx'


const Home = () => {
    return (
        <div className='container mx-auto'>
            <HeroSection />
            <Services />
            <ForeignExchange />
            <Testimonials />
            <FAQ />
        </div>
    )
}

export default Home