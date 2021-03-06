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
                                    ??i???m nh???n h??nh tr??nh
                                </h3>
                            </div>
                            <div className="tour-content__main">
                                <div className="tour-content__hightlight">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>H??nh tr??nh</td>
                                                <td>{tour.infoTour.title}</td>
                                            </tr>
                                            <tr>
                                                <td>L???ch tr??nh</td>
                                                <td>{`${tour.infoTour.length.day} ng??y ${tour.infoTour.length.night} ????m`}</td>
                                            </tr>
                                            <tr>
                                                <td>Kh???i h??nh</td>
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
                                    L???ch tr??nh
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
                                    Ng??y kh???i h??nh kh??c
                                </h3>
                            </div>
                            <div className="tour-content__main">
                                <div className="tour-content__other-dates">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Ng??y kh???i h??nh</th>
                                                <th>?????c ??i???m</th>
                                                <th>Gi?? t???</th>
                                                <th>S??? ch???</th>
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
                                                        <td>C??n {schedule.max_member} ch???</td>
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
                                        <td>M?? tour:</td>
                                        <td>{tour.infoTour.id}</td>
                                    </tr>
                                    <tr>
                                        <td>Th???i gian:</td>
                                        <td>{`${tour.infoTour.length.day} ng??y ${tour.infoTour.length.night} ????m`}</td>
                                    </tr>
                                    <tr>
                                        <td>Kh???i h??nh:</td>
                                        <td>{moment(tour.infoTour.depart_date).utc().format('MM/DD/YYYY')}</td>
                                    </tr>
                                    <tr>
                                        <td>Xu???t ph??t:</td>
                                        <td>{tour.infoTour.position}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div ref={priceRef} className="tour__price">
                                <p className="tour__price-price">
                                    <span>Gi?? t???</span>
                                    <span>
                                        {new Intl.NumberFormat('de-DE').format(tour.infoTour.adult)} ??
                                    </span>
                                </p>
                                <p className="tour__price-start">
                                    {moment(tour.infoTour.depart_date).utc().format('MM/DD/YYYY')}
                                </p>
                                <Link to={`/${tour.infoTour.id}`} className="tour__action-book"> ?????t tour</Link>
                            </div>

                            <div className="tour-detail__outline">
                                <a href="#tour-hightlight">
                                    <FaInfoCircle />
                                    <span>??i???m nh???n h??nh tr??nh</span>
                                </a>
                                <a href="#tour-schedule">
                                    <FiMap />
                                    <span>L???ch tr??nh</span>
                                </a>
                                <a href="#tour-other-depart-dates">
                                    <BsFillCalendarCheckFill />
                                    <span>Ng??y kh???i h??nh kh??c</span>
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