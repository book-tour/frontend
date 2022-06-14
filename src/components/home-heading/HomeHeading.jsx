import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import './home-heading.css'

const HomeHeading = ({ heading, link, headingCssClass, linkCssClass, dataNavigate }) => {

    const navigate = useNavigate()
    const navigateLink = link || '/tours'
    const handleNavigate = (e) => {
        e.preventDefault()
        navigate(navigateLink, { state: dataNavigate })
    }

    return (
        <div className='home-heading-cotainer'>
            <h2 className={`home-heading__title ${headingCssClass}`}>
                {heading}
            </h2>

            <Link onClick={handleNavigate} to={navigateLink} className={`home-heading__view-all hover-effect-color ${linkCssClass}`}>
                <FaEdit />
                <span>Xem tất cả</span>
            </Link>

        </div>
    )
}

export default HomeHeading