import React from 'react'
import './loading-page.css'

const LoadingPage = ({ message }) => {
    return (
        <div className="loading-page">
            <div className="lds-component">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <span>{message || 'Đang tải dữ liệu'}</span>
        </div>
    )
}

export default LoadingPage