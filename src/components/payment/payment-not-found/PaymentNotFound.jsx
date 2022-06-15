import React from 'react'
import { Link } from 'react-router-dom'
import './payment-not-found.css'

const PaymentNotFound = () => {
    return (
        <div className="payment-not-found__container">
            <h3 className="payment-not-found__title">
                Không tìm thấy thông tin thanh toán
            </h3>
            <Link to='/'>Về trang chủ</Link>
        </div>
    )
}

export default PaymentNotFound