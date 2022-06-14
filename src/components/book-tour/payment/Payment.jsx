import React, { useState, useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './payment.css'

const Payment = ({ bookingData, closePopup }) => {

    const [linkQR, setLinkQR] = useState("")

    console.log(bookingData)

    useEffect(() => {
        setLinkQR(`http://img.vietqr.io/image/MBBank-1230103032001-compact2.jpg?amount=${bookingData.totalPrice}&addInfo=ma_code`)
    }, [bookingData])

    return (
        <div className="payment">
            <div className="payment__container">
                <div className="row no-gutters">
                    <div className="col l-2">
                        <div className="payment__info-tour">

                            <CountdownCircleTimer
                                isPlaying
                                duration={30}
                                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                                size={120}
                                colorsTime={[7, 5, 2, 0]}
                            >
                                {
                                    ({ remainingTime }) => (
                                        <div className="payment__remaining-time">
                                            Làm mới sau
                                            <span>{remainingTime}</span>
                                            giây
                                        </div>
                                    )
                                }
                            </CountdownCircleTimer>

                            <div className="payment__info-supplier">
                                Nhà Cung cấp: <p>Tugo</p>
                            </div>
                            <div className="payment__info-price">
                                Số tiền: <p>{bookingData.totalPrice}</p>
                            </div>

                            <div className="payment__info-title">
                                Thông tin: <p>{bookingData.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col l-10">
                        <div className="payment__action">
                            <h3 className="payment__title">
                                Quét mã để thanh toán
                            </h3>

                            <img className="payment__qrcode" src={linkQR} alt="qrcode" />

                            <p className="payment_description">
                                Sử dụng VietQR hoặc ứng dụng camera có hỗ trợ QR code để quét mã
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment