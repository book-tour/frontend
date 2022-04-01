import React, { useState, useEffect } from 'react'
import TourItem from './tour_item/TourItem'
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios'

import './tour-list.css'
const TourList = ({ heading, link }) => {

    const [tours, setTours] = useState([])



    useEffect(() => {
        axios.get('https://doan1-tourapi.herokuapp.com/get/tour')
            .then(res => {
                const tourList = res.data.data;
                tourList.listStartedDate = JSON.parse(tourList.listStartedDate);
                setTours(res.data.data);
            })
            .catch(err => console.log({ err }));
    }, [])

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