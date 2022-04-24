import React, { useContext } from 'react'
import { GlobalState } from '../../contexts/GlobalState';
import TourItem from './tour_item/TourItem'
import HomeHeading from '../home-heading/HomeHeading';
import './tour-list.css'

const TourList = ({ heading, link }) => {

    const { tourContext: { tours } } = useContext(GlobalState)

    return (
        <div className='tours-list'>
            <HomeHeading heading={heading} link={link} />
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