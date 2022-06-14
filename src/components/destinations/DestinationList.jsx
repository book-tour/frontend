import React, { useContext } from 'react'
import HomeHeading from '../home-heading/HomeHeading'
import DestinationItem from './destination-item/DestinationItem'
import { GlobalState } from '../../contexts/GlobalState'
import './destination-list.css'

const DestinationList = () => {

    const { destination: { destinations } } = useContext(GlobalState)

    return (
        <div className='destinations'>
            <HomeHeading heading={'Điểm đến hot'} link={'/destination'} />
            <div className="destinations__list">
                <div className='row'>
                    {
                        destinations.slice(0, 3).map((destination, index) => (
                            <DestinationItem key={index} destination={destination} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DestinationList