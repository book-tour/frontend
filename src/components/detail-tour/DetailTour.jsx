import React, { useEffect, useRef } from 'react'
import TourScheduleItem from './tour-schedule-item/TourScheduleItem';
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Fade } from 'react-slideshow-image';
import { FaInfoCircle } from 'react-icons/fa';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { FiMap } from 'react-icons/fi';
import './detail-tour.css'

const DetailTour = ({ tour }) => {

    const priceRef = useRef()

    useEffect(() => {
        console.log({
            element: priceRef.current.offsetTop
        })
    }, [])

    useEffect(() => {
        const onScroll = (event) => {
            const position = window.pageYOffset;
            console.log(position)
        }
        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <div className="detail-tour-container" >
            <h2 className="tour__title">
                {tour.infoTour.title}
            </h2>

            <div className="tour__information">
                <div className="row">
                    <div className="col l-8">
                        <div className="tour-thumbnails-slider">
                            <Fade scale={0.4}
                                duration="5000">
                                {
                                    tour.infoTour.listThumbnail.map((thumbnail, index) => (
                                        <div className="tour-thumbnail-slide" key={index}>
                                            <img src={thumbnail} alt="thumbnail" className='tour-thumbnail-slide__image' />
                                        </div>
                                    ))
                                }
                            </Fade>
                        </div>

                        <div className="tour-information-content" id='tour-hightlight'>
                            <div className="tour-content__heading">
                                <FaInfoCircle />
                                <h3 className="tour-content__heading-title">
                                    Điểm nhấn hành trình
                                </h3>
                            </div>
                            <div className="tour-content__main">
                                <div className="tour-content__hightlight">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Hành trình</td>
                                                <td>{tour.infoTour.title}</td>
                                            </tr>
                                            <tr>
                                                <td>Lịch trình</td>
                                                <td>{`${tour.infoTour.length.day} ngày ${tour.infoTour.length.night} đêm`}</td>
                                            </tr>
                                            <tr>
                                                <td>Khởi hành</td>
                                                <td>{moment(tour.infoTour.depart_date).utc().format('MM/DD/YYYY')}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tour-content__description">
                                    <span>
                                        {tour.infoTour.description}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="tour-information-content" id='tour-schedule'>
                            <div className="tour-content__heading">
                                <FiMap />
                                <h3 className="tour-content__heading-title">
                                    Lịch trình
                                </h3>
                            </div>
                            <div className="tour-content__main">
                                <div className="tour-content__schedule">
                                    {
                                        tour.infoTour.schedule.map((item, index) => (
                                            <TourScheduleItem key={index} item={item} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="tour-information-content" id='tour-other-depart-dates'>
                            <div className="tour-content__heading">
                                <BsFillCalendarCheckFill />
                                <h3 className="tour-content__heading-title">
                                    Ngày khởi hành khác
                                </h3>
                            </div>
                            <div className="tour-content__main">
                                <div className="tour-content__other-dates">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Ngày khởi hành</th>
                                                <th>Đặc điểm</th>
                                                <th>Giá từ</th>
                                                <th>Số chỗ</th>
                                                <th>Book Tour</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                tour.schedule.map((schedule, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{moment(schedule.depart_date).utc().format('MM/DD/YYYY')}</td>
                                                        <td>{schedule.hotel_feature}</td>
                                                        <td>Còn {schedule.max_member} chỗ</td>
                                                        <td>
                                                            {schedule.adult}
                                                        </td>
                                                        <td>
                                                            <Link to={`/`} className="other-dates__book">
                                                                Book
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4">
                        <div className="tour__quick-info">
                            <table className="tour__short-info">
                                <thead>
                                    <tr>
                                        <th colSpan="2" rowSpan="2">
                                            {tour.infoTour.title}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mã tour:</td>
                                        <td>{tour.infoTour.id}</td>
                                    </tr>
                                    <tr>
                                        <td>Thời gian:</td>
                                        <td>{`${tour.infoTour.length.day} ngày ${tour.infoTour.length.night} đêm`}</td>
                                    </tr>
                                    <tr>
                                        <td>Khởi hành:</td>
                                        <td>{moment(tour.infoTour.depart_date).utc().format('MM/DD/YYYY')}</td>
                                    </tr>
                                    <tr>
                                        <td>Xuất phát:</td>
                                        <td>{tour.infoTour.position}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div ref={priceRef} className="tour__price">
                                <p className="tour__price-price">
                                    <span>Giá từ</span>
                                    <span>
                                        {new Intl.NumberFormat('de-DE').format(tour.infoTour.adult)} đ
                                    </span>
                                </p>
                                <p className="tour__price-start">
                                    {moment(tour.infoTour.depart_date).utc().format('MM/DD/YYYY')}
                                </p>
                                <Link to={`/${tour.infoTour.id}`} className="tour__action-book"> Đặt tour</Link>
                            </div>

                            <div className="tour-detail__outline">
                                <a href="#tour-hightlight">
                                    <FaInfoCircle />
                                    <span>Điểm nhấn hành trình</span>
                                </a>
                                <a href="#tour-schedule">
                                    <FiMap />
                                    <span>Lịch trình</span>
                                </a>
                                <a href="#tour-other-depart-dates">
                                    <BsFillCalendarCheckFill />
                                    <span>Ngày khởi hành khác</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailTour