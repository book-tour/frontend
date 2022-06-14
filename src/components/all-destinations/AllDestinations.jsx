import React, { useContext } from 'react'
import { GlobalState } from '../../contexts/GlobalState.js'
import DestinationItem from '../destinations/destination-item/DestinationItem'
import './all-destination.css'

const AllDestinations = () => {
    const { destination: { destinations } } = useContext(GlobalState)
    return (
        <div className="all-destination__container margin-header">
            <h3 className="all-destination__title">
                Danh sách các điểm đến hot
            </h3>
            <div className="destinations__list">
                <div className='row vertical-gutters'>
                    {
                        destinations.map((destination, index) => (
                            <DestinationItem key={index} destination={destination} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AllDestinations