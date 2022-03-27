import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai'
import { IoPersonOutline } from 'react-icons/io5'
import './tour-item.css'

const TourItem = ({ tour }) => {




    return (
        <div className="col l-3 m-6 c-12">
            <Link to='#' className="tour-item">
                <div className="tour-item-wrapper">
                    <div className="tour-item-thumbnail-wrapper">
                        <img src={tour.thumbnail} alt="tour-thumbnail" className="tour-item__thumbnail" />
                        <span className="tour-item__from">Từ {tour.position}</span>
                    </div>
                    <h2 className="tour-item__title hover-effect-color">
                        <span>{tour.title}</span>
                    </h2>
                    <div className="tour-item__content">
                        <div className="row no-gutters">
                            <div className="col l-6 m-12 c-12">
                                <div className="tour-item__content-item">
                                    <AiOutlineClockCircle />
                                    <span>{`${tour.length.day} ngày ${tour.length.night} đêm`}</span>
                                </div>
                                <div className="tour-item__content-item">
                                    <AiOutlineCalendar />
                                    <span>{tour.listStartedDate[0].start}</span>
                                </div>
                                <div className="tour-item__content-item">
                                    <IoPersonOutline />
                                    <span> còn {tour.listStartedDate[0].max - tour.listStartedDate[0].registered} chỗ</span>
                                </div>
                            </div>
                            <div className="col l-6 m-12 c-12">
                                <div className="tour-item__price">
                                    <span>{tour.listStartedDate[0].price} đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TourItem