import React from 'react'
import HashLoader from "react-spinners/HashLoader"
import { css } from "@emotion/react";
import './loading-check-payment.css'

const LoadingCheckPayment = () => {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
        with
    `;
    return (
        <div className="loading-check-payment">
            <div className="loading-check-payment-container">
                <HashLoader color={'#333'} loading={true} size={100} css={override} />
                <p>Đang kiểm tra thông tin thanh toán</p>
                <p>Vui lòng chờ</p>
            </div>
        </div>
    )
}

export default LoadingCheckPayment