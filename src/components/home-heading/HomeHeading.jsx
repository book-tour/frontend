import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './home-heading.css'

const HomeHeading = ({ heading, link, headingCssClass, linkCssClass }) => {
    return (
        <div className='home-heading-cotainer'>
            <h2 className={`home-heading__title ${headingCssClass}`}>
                {heading}
            </h2>

            <Link to={link || '#'} className={`home-heading__view-all hover-effect-color ${linkCssClass}`}>
                <FaEdit />
                <span>Xem tất cả</span>
            </Link>

        </div>
    )
}

export default HomeHeading