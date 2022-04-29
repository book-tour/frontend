import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { GlobalState } from '../contexts/GlobalState'

import TextField from '@mui/material/TextField';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import PaymentPage from '../components/payment/PaymentPage'


const Payment = () => {
   

    return (

        <div className="detail-tour-page-container">
            <div className="grid wide">
                <div className={'detail-tour-page-wrapper'}>
                    <Header />
                    <PaymentPage />

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Payment;