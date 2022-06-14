import React, { useState, useEffect, useMemo } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai'
import { IoPersonOutline } from 'react-icons/io5'
import { ImClock } from 'react-icons/im'
import { formatNumber, timeBetween } from '../../../utils/functions'
import './closet-tour-item.css'


const ClosetTourItem = ({ tour }) => {

    const departDate = useMemo(() => new Date(tour.depart_date), [tour])
    const departDateString = useMemo(() => moment(departDate).format('DD/MM/YYYY'), [departDate])
    const [time, setTime] = useState(timeBetween(new Date(), departDate))

    useEffect(() => {
        const countDown = setInterval(() => {
            setTime(timeBetween(new Date(), departDate))
        }, 1000)

        return () => {
            clearInterval(countDown)
        }
    }, [departDate])

    return (
        <div className="col l-4 m-6 c-12">
            <Link to={`/tours/detail/${tour.idTour}?id_schedule=${tour.idSchedule}`} className="closet-tour-item__container">
                <div className="closet-tour-item__thumbnail-wrapper">
                    <img className="closet-tour-item__thumbnail" src={tour.thumbnail} alt={tour.title} />
                    <div className="closet-tour-item__info">
                        <div className="closet-tour-item__timing">
                            <ImClock />
                            <p>Còn {time.resultString}</p>
                        </div>
                        <span className="closet-tour-item__position">
                            Từ {tour.position}
                        </span>
                    </div>
                </div>

                <h2 className="closet-tour-item__title hover-effect-color">
                    {tour.title}
                </h2>
                <div className="closet-tour-item__content">
                    <div className="row no-gutters">
                        <div className="col l-6 m-12 c-12">
                            <div className="closet-tour-item__content-item">
                                <AiOutlineClockCircle />
                                <span>Lịch trình: {`${tour.length.day} ngày ${tour.length.night} đêm`}</span>
                            </div>
                            <div className="closet-tour-item__content-item">
                                <AiOutlineCalendar />
                                <span>Khởi hành: {departDateString}</span>
                            </div>
                            <div className="closet-tour-item__content-item">
                                <IoPersonOutline />
                                <span> Số chỗ còn nhận: {tour.seat_exist} chỗ</span>
                            </div>
                        </div>
                        <div className="col l-6 m-12 c-12">
                            <div className="closet-tour-item__price-container">
                                {
                                    tour.discount !== 0 && (
                                        <div className="closet-tour-item__price-old">
                                            <span>{tour.money} đ</span>
                                        </div>
                                    )
                                }
                                <div className="closet-tour-item__price">
                                    <span>{formatNumber(tour.money * (1 - tour.discount / 100))} đ</span>
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
