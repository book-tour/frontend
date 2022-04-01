import React from 'react'
import { Link } from 'react-router-dom'
import './destination-item.css'


const DestinationItem = ({ destination }) => {
    return (
        <div className="col l-4 m-4 c-12">
            <Link to={`destinations/${destination._id}`} className='destination-wrapper'>
                <img src={destination.thumbnail} alt="thumbnail" className="destination-thumbnail" />
                <span className="destination-name">{destination.name}</span>
            </Link>
        </div>
    )
}

export default DestinationItem