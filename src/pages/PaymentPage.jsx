import React from 'react'
import Header from '../components/header/Header'
import Payment from '../components/payment/Payment'
import Footer from '../components/footer/Footer'
import PaymentNotFound from '../components/payment/payment-not-found/PaymentNotFound'
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
    let { state } = useLocation()
    state = state || {}
    const { bookingData, tour } = state


    return (
        <div className="payment-page-container">
            <div className={'page-wrapper'}>
                <div className="grid wide">
                    <Header />
                </div>

                {
                    bookingData ?
                        (<Payment bookingData={bookingData} tour={tour} />) :
                        (<PaymentNotFound />)
                }
                <div className="grid wide">
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default PaymentPage