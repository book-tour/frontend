import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DestinationItem from './destination-item/DestinationItem'

import './destination-list.css'

const DestinationList = () => {

    const [destinations, setDestinations] = useState([
        {
            _id: '1',
            name: 'Nha Trang',
            thumbnail: 'https://statics.vinpearl.com/styles/images_364_x_558/public/2020_11/Vinpearl-Nha-Trang-Diem-den-16x9-Hinh-anh-1_0.png.webp?itok=5JUvnnrs'
        },
        {
            _id: '2',
            name: 'Phú Quốc',
            thumbnail: 'https://statics.vinpearl.com/styles/images_364_x_558/public/2021_03/867_PQUC_Thumbnail_%C4%91ie%CC%82%CC%89m%20%C4%91e%CC%82%CC%81n.jpeg.webp?itok=31K2lLYz'
        },
        {
            _id: '3',
            name: 'Hội An',
            thumbnail: 'https://statics.vinpearl.com/styles/images_364_x_558/public/2020_11/Vinpearl-Nam-Hoi-An-Diem-den-16x9-Hinh-anh-1.png.webp?itok=5FGZ2K5s'
        }
    ])

    return (
        <div className='destinations'>
            <div className='destinations__heading'>
                <h2 className='destinations__title'>
                    Điểm đến hot
                </h2>

                <Link to='/' className='destinations__view-all hover-effect-color'>
                    <FaEdit />
                    <span>Xem tất cả</span>
                </Link>

            </div>
            <div className="destinations__list">
                <div className='row'>
                    {
                        destinations.map(destination => (
                            <DestinationItem key={destination._id} destination={destination} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DestinationList