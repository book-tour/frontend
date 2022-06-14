import React from 'react'
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import AllTour from '../components/all-tour/AllTour'


const AllTours = () => {
    return (
        <div className="app-container">
            <div className="grid wide">
                <Header />
                <AllTour />
                <Footer />
            </div>
        </div>
    )
}

export default AllTours