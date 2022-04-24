import React, { useContext } from 'react'
import HomeHeading from '../home-heading/HomeHeading'
import { GlobalState } from '../../contexts/GlobalState';
import ClosetTourItem from './closet-tour-item/ClosetTourItem';

const ClosetTour = () => {

    const {
        tourContext: { closetTours }
    } = useContext(GlobalState)


    return (
        <div className='tours-list'>
            <HomeHeading heading={'Tour giờ chót'} link={'/destinations'} />
            <div className="tour-list__list">
                <div className='row'>
                    {
                        closetTours.map((item, index) => (
                            <ClosetTourItem key={index} tour={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ClosetTour