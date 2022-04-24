import React, { Fragment } from 'react'
import './tour-schedule-item.css'
const TourScheduleItem = ({ item, index }) => {
    const {
        title,
        schedule,
    } = item


    return (
        <div className="tour-schedule-item__container">
            <div className="tour-schedule__heading">
                <div className="tour-schedule__circle-outside">
                    <div className="tour-schedule__circle-inner"></div>
                </div>
                <h3 className="tour-schedule__title">
                    {title}
                </h3>
            </div>
            <div className="tour-schedule__content">
                {
                    schedule.map((session, index) => (
                        <Fragment key={index}>
                            <span>
                                {session.time}: {session.title}
                            </span>
                            <ul className="tour-schedule__session">
                                {
                                    session.des.map((info, index) => (
                                        <li key={index}>{info}</li>
                                    ))
                                }
                            </ul>
                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default TourScheduleItem