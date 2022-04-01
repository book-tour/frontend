import React from 'react'
import { Link } from 'react-router-dom'
import './not-found.css'
const NotFound = () => {
    return (
        <>
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>404</h1>
                        <h2>Trang không tồn tại</h2>
                    </div>
                    <Link to='/'>Về trang chủ</Link>
                </div>
            </div>
        </>
    )
}

export default NotFound