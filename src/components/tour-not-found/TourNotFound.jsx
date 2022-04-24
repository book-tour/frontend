import React from 'react'
import { Link } from 'react-router-dom'
import './tour-not-found.css'

const TourNotFound = () => {
    return (
        <div className="tour-not-found__container">
            <h3 className="tour-not-found__title">
                Tour không tồn tại
            </h3>
            <Link to='/'>Về trang chủ</Link>
        </div>
    )
}

export default TourNotFound