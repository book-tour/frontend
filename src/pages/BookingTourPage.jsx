import React from 'react'
import Header from '../components/header/Header'
import BookTour from '../components/book-tour/BookTour'
import Footer from '../components/footer/Footer'

const BookingTourPage = () => {
    return (
        <div className="booking-tour-page__container">
            <div className="grid wide">
                <Header />
                <BookTour />
                <Footer />
            </div>
        </div>
    )
}

export default BookingTourPage