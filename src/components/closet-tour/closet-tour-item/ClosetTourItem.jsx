import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai'
import { IoPersonOutline } from 'react-icons/io5'
import { ImClock } from 'react-icons/im'
import { timeBetween } from '../../../utils/functions'
import './closet-tour-item.css'


const ClosetTourItem = ({ tour }) => {

    const depart_date = useMemo(() => new Date(tour.closestSchedule.depart_date), [tour])
    const [time, setTime] = useState(timeBetween(new Date(), depart_date))

    useEffect(() => {
        const countDown = setInterval(() => {
            setTime(timeBetween(new Date(), depart_date))
        }, 1000)

        return () => {
            clearInterval(countDown)
        }
    }, [depart_date])

    return (
        <div className="col l-4 m-6 c-12">
            <Link to={`/tours/detail/${tour.closestSchedule.id_tour}?id_schedule=${tour.closestSchedule.id}`} className="closet-tour-item__container">
                <div className="closet-tour-item__thumbnail-wrapper">
                    <img className="closet-tour-item__thumbnail" src={tour.infoTour.thumbnail} alt={tour.infoTour.title} />
                    <div className="closet-tour-item__info">
                        <div className="closet-tour-item__timing">
                            <ImClock />
                            <p>Còn {time.resultString}</p>
                        </div>
                        <span className="closet-tour-item__position">
                            Từ {tour.infoTour.position}
                        </span>
                    </div>
                </div>

                <h2 className="closet-tour-item__title hover-effect-color">
                    {tour.infoTour.title}
                </h2>
                <div className="closet-tour-item__content">
                    <div className="row no-gutters">
                        <div className="col l-6 m-12 c-12">
                            <div className="closet-tour-item__content-item">
                                <AiOutlineClockCircle />
                                <span>Lịch trình: {`${tour.infoTour.length.day} ngày ${tour.infoTour.length.night} đêm`}</span>
                            </div>
                            <div className="closet-tour-item__content-item">
                                <AiOutlineCalendar />
                                <span>Khởi hành: 18/04/2022</span>
                            </div>
                            <div className="closet-tour-item__content-item">
                                <IoPersonOutline />
                                <span> Số chỗ còn nhận: {tour.closestSchedule.max_member - tour.closestSchedule.min_member} chỗ</span>
                            </div>
                        </div>
                        <div className="col l-6 m-12 c-12">
                            <div className="closet-tour-item__price-container">
                                {
                                    tour.infoTour.discount && (
                                        <div className="closet-tour-item__price-old">
                                            <span>{tour.closestSchedule.adult} đ</span>
                                        </div>
                                    )
                                }
                                <div className="closet-tour-item__price">
                                    <span>{tour.closestSchedule.adult * (1 - tour.infoTour.discount / 100)} đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ClosetTourItem;
