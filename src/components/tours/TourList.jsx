import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../contexts/GlobalState';
import TourItem from './tour_item/TourItem'
import HomeHeading from '../home-heading/HomeHeading';
import './tour-list.css'

const TourList = ({ heading, link, data }) => {

    const [tours, setTours] = useState([])
    const { tour: { searchTours } } = useContext(GlobalState)

    useEffect(() => {
        const getToursList = async () => {
            const res = await searchTours(data)
            if (res.success) {
                setTours(res.data)
            }

        }
        getToursList()
    }, [data, searchTours])

    if (!tours || tours.length === 0) {
        return null;
    }

    return (
        <div className='tours-list'>
            <HomeHeading heading={heading} link={link} dataNavigate={data} />
            <div className="tour-list__list">
                <div className='row'>
                    {
                        tours.map((item, index) => (
                            <TourItem
                                key={index}
                                tour={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TourList