import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatNumber } from '../../utils/functions'
import Payment from './payment/Payment'
import './book-tour.css'


const BookTour = () => {

    const { idTour, idSchedule } = useParams()

    const [showPopup, setShowPopup] = useState(true)

    const [tour, setTour] = useState({
        id: 1,
        title: 'Du lịch Đà Nẵng - Huế - Thánh Địa La Vang - Động Phong Phong Nha từ Sài Gòn 2022 ',
        length: {
            day: 3,
            night: 2,
        },
        thumbnail: "https://res.cloudinary.com/dhz4hr8dq/image/upload/v1648257873/doan1/tour/Da_Lat_City_n8srlv.jpg",
        position: 'Hồ chí minh',
        destination: 'Phong Nha Kẻ Bàng',
        depart_date: '20/03/2023',
        max: 20,
        seat_exist: 15,
        prices: {
            adult: 1200000,
            child: 100000,
            small_child: 90000,
            new_born: 1000,
            hotel: 4000000,
            hotel_feature: "Khách sạn 4*"
        }
    })

    const [bookingData, setBookingData] = useState({
        idTour,
        idSchedule,
        title: tour.title,
        name: '',
        email: '',
        phone: '',
        adult: 1,
        child: 0,
        small_child: 0,
        new_born: 0,
        hotel: 0,
        totalPrice: tour.prices.adult
    })

    const checkOnlyNumber = (e) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    }

    const handleBookingDataChange = (e) => {
        let { name, value, type } = e.target

        if (type === 'number') {
            const { adult, child, small_child } = bookingData
            const quantity = { adult, child, small_child, [name]: value }
            const totalTicket = quantity.adult * 1 + quantity.child * 1 + quantity.small_child * 1

            if (totalTicket > tour.seat_exist) {
                return alert('Đã hết vé!!!')
            }
        }

        setBookingData({
            ...bookingData,
            [name]: value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        setShowPopup(true)
    }

    useEffect(() => {
        const totalPrice = bookingData.adult * tour.prices.adult
            + bookingData.child * tour.prices.child
            + bookingData.small_child * tour.prices.small_child
            + bookingData.new_born * tour.prices.new_born
            + bookingData.hotel * tour.prices.hotel;

        setBookingData({
            ...bookingData,
            totalPrice
        })

    }, [tour.prices, bookingData.adult, bookingData.child, bookingData.small_child, bookingData.new_born, bookingData.hotel])


    useEffect(() => {
        setBookingData(prev => ({
            ...prev,
            title: tour.title
        }))
    }, [tour.title])

    return (
        <div className="book-tour__container margin-header">
            <div className="book-tour__tour">
                <div className="row">
                    <div className="col l-4">
                        <img src={tour.thumbnail} alt="" className="book-tour__tour-thumbnail" />
                    </div>
                    <div className="col l-8">
                        <div className="book-tour__tour-info">
                            <h3 className="book-tour__tour-title">
                                <span>{tour.title}</span>
                            </h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Mã tour</td>
                                        <td>{tour.id}</td>
                                    </tr>
                                    <tr>
                                        <td>Thời gian</td>
                                        <td>{tour.length.day} ngày {tour.length.night} đêm</td>
                                    </tr>
                                    <tr>
                                        <td>Giá</td>
                                        <td>{tour.prices.adult} đ</td>
                                    </tr>
                                    <tr>
                                        <td>Ngày khỏi hành</td>
                                        <td>{tour.depart_date}</td>
                                    </tr>
                                    <tr>
                                        <td>Nơi khởi hành</td>
                                        <td>{tour.position}</td>
                                    </tr>
                                    <tr>
                                        <td>Số chỗ còn nhận</td>
                                        <td>{tour.seat_exist}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="book-tour__note">
                Các khoản phí phát sinh (nếu có) như: phụ thu dành cho khách nước ngoài,
                việt kiều; phụ thu phòng đơn; phụ thu chênh lệch giá tour…
                Nhân viên Tugo sẽ gọi điện thoại tư vấn cho quý khách ngay sau khi có phiếu xác nhận booking.
                (Trong giờ hành chính) <br />
                Trường hợp quý khách không đồng ý các khoản phát sinh,
                phiếu xác nhận booking của quý khách sẽ không có hiệu lực.
            </div>

            <div className="book-tour__price">
                <h3 className="book-tour__price-title">
                    Bảng giá Tour chi tiết
                </h3>

                <table className="book-tour__price-table">
                    <thead>
                        <tr>
                            <th>Loại giá/Độ tuổi</th>
                            <th>Người lớn(Trên 11 tuổi)</th>
                            <th>Trẻ em(5 - 11 tuổi)</th>
                            <th>Trẻ nhỏ(2 - 5 tuổi)</th>
                            <th>{`Sơ sinh ( < 2 tuổi)`}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Giá</td>
                            <td>{formatNumber(tour.prices.adult)}</td>
                            <td>{formatNumber(tour.prices.child)}</td>
                            <td>{formatNumber(tour.prices.small_child)}</td>
                            <td>{formatNumber(tour.prices.new_born)}</td>
                        </tr>
                        <tr>
                            <td>Phụ thu phòng đơn</td>
                            <td colSpan={4}>{formatNumber(tour.prices.hotel)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="book-tour__contact">
                <h3 className="book-tour__contact-title">
                    Thông tin liên hệ
                </h3>
                <form className="book-tour__contact-form" onSubmit={handleSubmitForm}>
                    <div className="row">
                        <div className="col l-4">
                            <div className="book-tour__form-group">
                                <label htmlFor="name">
                                    Họ Tên <span className="red-text">*</span>:
                                </label>
                                <input type="text" required name="name" id="name"
                                    maxLength='50'
                                    value={bookingData.name} onChange={handleBookingDataChange}
                                />
                            </div>
                        </div>
                        <div className="col l-4">
                            <div className="book-tour__form-group">
                                <label htmlFor="email">
                                    Email <span className="red-text">*</span>:
                                </label>
                                <input type="email" required name="email" id="email"
                                    maxLength='100'
                                    value={bookingData.email} onChange={handleBookingDataChange}
                                />
                            </div>
                        </div>
                        <div className="col l-4">
                            <div className="book-tour__form-group">
                                <label htmlFor="phone">
                                    Số điện thoại <span className="red-text">*</span>:
                                </label>
                                <input type="tel" required name="phone" id="phone"
                                    maxLength='12'
                                    value={bookingData.phone} onChange={handleBookingDataChange}
                                    onKeyPress={checkOnlyNumber}
                                />
                            </div>
                        </div>
                        <div className="col l-3">
                            <div className="book-tour__form-group">
                                <label htmlFor="address">
                                    Địa chỉ <span className="red-text">*</span>:
                                </label>
                                <input type="text" required name="address" id="address"
                                    maxLength='100'
                                    value={bookingData.address} onChange={handleBookingDataChange}
                                />
                            </div>
                        </div>
                        <div className="col l-9">
                            <div className="book-tour__form-group">
                                <label htmlFor="note">Ghi chú: </label>
                                <input type="text" name="note" id="note"
                                    value={bookingData.note} onChange={handleBookingDataChange}
                                />
                            </div>
                        </div>
                        <div className="col l-3">
                            <div className="book-tour__form-group">
                                <label htmlFor="adult">Người lớn: </label>
                                <input type="number" required name="adult" id="adult" min="1"
                                    maxLength='150'
                                    value={bookingData.adult} onChange={handleBookingDataChange}
                                    onKeyPress={checkOnlyNumber}
                                />
                            </div>
                        </div>
                        <div className="col l-3">
                            <div className="book-tour__form-group">
                                <label htmlFor="child">Trẻ em: </label>
                                <input type="number" required name="child" id="child" min="0"
                                    value={bookingData.child} onChange={handleBookingDataChange}
                                    onKeyPress={checkOnlyNumber}
                                />
                            </div>
                        </div>
                        <div className="col l-3">
                            <div className="book-tour__form-group">
                                <label htmlFor="small_child">Trẻ nhỏ: </label>
                                <input type="number" required name="small_child" id="small_child" min="0"
                                    value={bookingData.small_child} onChange={handleBookingDataChange}
                                    onKeyPress={checkOnlyNumber}
                                />
                            </div>
                        </div>
                        <div className="col l-3">
                            <div className="book-tour__form-group">
                                <label htmlFor="new_born">Trẻ sơ sinh: </label>
                                <input type="number" required name="new_born" id="new_born" min="0"
                                    value={bookingData.new_born} onChange={handleBookingDataChange}
                                    onKeyPress={checkOnlyNumber}
                                />
                            </div>
                        </div>

                        <div className="col l-3">
                            <div className="book-tour__form-group">
                                <label htmlFor="new_born">Phòng đơn: </label>
                                <input type="number" required name="hotel" id="hotel" min="0"
                                    value={bookingData.hotel} onChange={handleBookingDataChange}
                                    onKeyPress={checkOnlyNumber}
                                />
                            </div>
                        </div>

                        <div className="col l-12 m-12 c-12">
                            <div className="book-tour__form-total-price">
                                <p>Tổng giá trị: <span>{formatNumber(bookingData.totalPrice)} đ</span></p>
                            </div>
                        </div>

                    </div>
                    <center>
                        <input type="submit" value="Hoàn thành" />
                    </center>
                </form>

            </div>

            {
                showPopup && (
                    <Payment bookingData={bookingData} closePopup={() => setShowPopup(false)} />
                )
            }

        </div>
    )
}

export default BookTour