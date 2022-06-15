import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { formatNumber } from '../../utils/functions'
import { GlobalState } from './../../contexts/GlobalState'
import LoadingPage from '../loading/LoadingPage'
import './book-tour.css'


const BookTour = () => {
    const navigate = useNavigate()

    const { idTour, idSchedule } = useParams()
    const { tour: { getTourPrice } } = useContext(GlobalState)

    const [loading, setLoading] = useState(true)


    const [tour, setTour] = useState({})

    const [bookingData, setBookingData] = useState({
        id_tour: idTour,
        id_schedule: idSchedule,
        full_name: '',
        email: '',
        phone: '',
        adult: 1,
        child: 0,
        small_child: 0,
        new_born: 0,
        room: 0,
        total_price: 0,
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
        navigate('/tour/payment', {
            state: {
                bookingData,
                tour
            }
        })
    }

    useEffect(() => {
        if (tour.prices) {
            const total_price = bookingData.adult * tour.prices.adult
                + bookingData.child * tour.prices.child
                + bookingData.small_child * tour.prices.small_child
                + bookingData.new_born * tour.prices.new_born
                + bookingData.room * tour.prices.hotel;

            setBookingData({
                ...bookingData,
                total_price
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tour.prices, bookingData.adult, bookingData.child, bookingData.small_child, bookingData.new_born, bookingData.room])

    useEffect(() => {
        const getInfoPrice = async () => {
            const res = await getTourPrice(idTour, idSchedule)
            if (res.success) {
                setTour(res.data)
            } else
                alert('Something wrong!')
            setLoading(false)
        }

        getInfoPrice()
    }, [getTourPrice, idSchedule, idTour])


    if (loading)
        return <LoadingPage />

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
                                        <td>{idTour}</td>
                                    </tr>
                                    <tr>
                                        <td>Thời gian</td>
                                        <td>{tour.length.day} ngày {tour.length.night} đêm</td>
                                    </tr>
                                    <tr>
                                        <td>Giá</td>
                                        <td>{formatNumber(tour.prices.adult)} đ</td>
                                    </tr>
                                    <tr>
                                        <td>Ngày khởi hành</td>
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
                                <label htmlFor="full_name">
                                    Họ Tên <span className="red-text">*</span>:
                                </label>
                                <input type="text" required name="full_name" id="full_name"
                                    maxLength='50'
                                    value={bookingData.full_name} onChange={handleBookingDataChange}
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
                                <label htmlFor="room">Phòng đơn: </label>
                                <input type="number" required name="room" id="room" min="0"
                                    value={bookingData.room} onChange={handleBookingDataChange}
                                    onKeyPress={checkOnlyNumber}
                                />
                            </div>
                        </div>

                        <div className="col l-12 m-12 c-12">
                            <div className="book-tour__form-total-price">
                                <p>Tổng giá trị: <span>{formatNumber(bookingData.total_price)} đ</span></p>
                            </div>
                        </div>

                    </div>
                    <center>
                        <input type="submit" value="Hoàn thành" />
                    </center>
                </form>

            </div>
        </div>
    )
}

export default BookTour