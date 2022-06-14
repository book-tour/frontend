import React from 'react'
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import AllDestinations from '../components/all-destinations/AllDestinations'

const AlllDestinationsPage = () => {
    return (
        <div className="app-container">
            <div className="grid wide">
                <Header />
                <AllDestinations />
                <Footer />
            </div>
        </div>
    )
}

export default AlllDestinationsPage