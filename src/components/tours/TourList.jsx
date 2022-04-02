import React, { useContext } from 'react'
import TourItem from './tour_item/TourItem'
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { GlobalState } from '../../contexts/GlobalState';
import './tour-list.css'

const TourList = ({ heading, link }) => {

    const { tourContext: { tours } } = useContext(GlobalState)

    return (
        <div className='tours-list'>
            <div className='tour-list__heading'>
                <h2 className='tour-list__title'>
                    {heading || 'Tour Trong Nước'}
                </h2>

                <Link to={link || '/'} className='tour-list__view-all hover-effect-color'>
                    <FaEdit />
                    <span>Xem tất cả</span>
                </Link>

            </div>
            <div className="tour-list__list">
                <div className='row'>
                    {
                        tours.map(item => (
                            <TourItem
                                key={item._id}
                                tour={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TourList