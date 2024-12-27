import React from 'react'
import HeroSection from '../../components/HomePage/HeroSection'
import Services from '../../components/Section/services.jsx'
import ForeignExchange from '../../components/Section/ForeignExchange.jsx'
import Testimonials from '../../components/Section/testiminals.jsx'
import FAQ from '../../components/Section/FaqSection.jsx'


const Home = () => {
    return (
        <>
            <HeroSection />
            <Services/>
            <ForeignExchange/>
            <Testimonials/>
            <FAQ/>
        </>
    )
}

export default Home