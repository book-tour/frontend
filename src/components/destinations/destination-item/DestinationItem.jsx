import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './destination-item.css'


const DestinationItem = ({ destination }) => {
    const navigate = useNavigate();

    const onDestinationClick = (e) => {
        e.preventDefault()
        return navigate('/tours', { state: { destination: destination.name } })
    }

    return (
        <div className="col l-4 m-4 c-12">
            <Link
                to={`destinations/${destination.alias}`}
                onClick={onDestinationClick}
                className='destination-wrapper'>
                <img src={destination.listThumbnail[0]} alt="thumbnail" className="destination-thumbnail" />
                <span className="destination-name">{destination.name}</span>
            </Link>
        </div>
    )
}

export default DestinationItem