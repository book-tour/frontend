import React, { useContext, useEffect, useState } from 'react'
import HomeHeading from '../home-heading/HomeHeading'
import { GlobalState } from '../../contexts/GlobalState';
import ClosetTourItem from './closet-tour-item/ClosetTourItem';
import './closet-tour.css'

const ClosetTour = () => {

    const [tours, setTours] = useState([])

    const {
        tour: { getClosetTours }
    } = useContext(GlobalState)

    useEffect(() => {
        getClosetTours((res, err) => {
            if (res) {
                setTours(res.data)
            }
        })
    }, [getClosetTours])

    if (!tours)
        return null

    return (
        <div className='tours-list'>
            <HomeHeading heading={'Tour giờ chót'} link={'/tours'} />
            <div className="closet-tour-list__list">
                <div className='row'>
                    {
                        tours.map((item, index) => (
                            <ClosetTourItem key={index} tour={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ClosetTour