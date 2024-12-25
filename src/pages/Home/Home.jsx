import React from 'react'
import HeroSection from '../../components/HomePage/HeroSection'
import Services from '../../components/Section/services.jsx'
import ForeignExchange from '../../components/Section/ForeignExchange.jsx'


const Home = () => {
    return (
        <>
            <HeroSection />
            <Services/>
            <ForeignExchange/>
        </>
    )
}

export default Home