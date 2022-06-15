import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { formatNumber, getCurrentDate } from '../../utils/functions'
import { useNavigate } from 'react-router-dom'
import LoadingCheckPayment from './loading-checkpayment/LoadingCheckPayment'
import { GlobalState } from '../../contexts/GlobalState'
import loading from '../../assets/img/loading.gif'
import 'react-toastify/dist/ReactToastify.css'
import './payment.css'




const Payment = ({ bookingData, tour }) => {
    const navigate = useNavigate()
    const [payment, setPayment] = useState({})
    const { tour: { createPayment, syncPayment, checkPayment } } = useContext(GlobalState)
    const [showLoading, setShowLoading] = useState(false)
    const [paymentState, setPaymentState] = useState(false)

    const handleCheckPayment = (e) => {
        e.preventDefault()
        if (showLoading || paymentState)
            return
        setShowLoading(true)

        setTimeout(async () => {

            // * call user-paid
            await syncPayment()

            setTimeout(async () => {
                // * call check-payment
                const res = await checkPayment(payment.encodeId)

                // * show loading popup
                setShowLoading(false)

                // * check error
                if (res.error) {
                    console.log(res.error)
                    return alert('Something went wrong')
                }


                if (!res.data.check_payment) {
                    return showToast(false, 'Không tìm thấy thông tin thanh toán')
                }

                setPaymentState(true)

                showToast(true, 'Thanh toán thành công!')

                setTimeout(async () => {
                    showToast(true, 'Cảm ơn quý khách đã tin tưởng và lựa chọn TUGO')
                }, 1000)

                setTimeout(async () => {
                    showToast(true, 'Điều hướng sau 3s!', { autoClose: 1000 })

                    setTimeout(async () => {
                        showToast(true, 'Điều hướng sau 2s!', { autoClose: 1000 })
                    }, 1000)

                    setTimeout(async () => {
                        showToast(true, 'Điều hướng sau 1s!', { autoClose: 1000 })
                    }, 2000)

                    setTimeout(async () => {
                        navigate('/')
                    }, 3000)

                }, 5000)

            }, 5000)

        }, 5000)
    }

    const showToast = (success, message, config) => {
        const options = {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            ...config
        }
        if (success) {
            return toast.success(message, options)
        }

        return toast.error(message, options)
    }

    useEffect(() => {
        const createPaymentInfo = async () => {
            const res = await createPayment(bookingData)
            if (res.success) {
                setPayment(res.data)
            }
        }
        createPaymentInfo()
    }, [])


    return (
        <div className="payment">
            <h3 className="payment__title">THANH TOÁN</h3>
            <p className="payment__subtitle">Cảm ơn bạn đã lựa chọn TUGO</p>

            <div className="payment__info">
                <div className="payment__info-item">
                    <span className="payment__info-item__title">
                        MÃ ĐƠN HÀNG
                    </span>
                    <div className="payment__info-item__content">
                        {payment.encodeId}
                    </div>
                </div>
                <div className="payment__info-item">
                    <span className="payment__info-item__title">
                        Ngày
                    </span>
                    <div className="payment__info-item__content">
                        {getCurrentDate()}
                    </div>
                </div>
                <div className="payment__info-item">
                    <span className="payment__info-item__title">
                        Tổng cộng
                    </span>
                    <div className="payment__info-item__content">
                        {formatNumber(bookingData.total_price)}
                    </div>
                </div>
                <div className="payment__info-item">
                    <span className="payment__info-item__title">
                        Phương thức thanh toán
                    </span>
                    <div className="payment__info-item__content">
                        Quét Mã VietQR
                    </div>
                </div>
            </div>

            <div className="payment__contact">
                <h3>QUÉT MÃ ĐỂ THANH TOÁN</h3>

                <div className="payment__contact-container">
                    <p>Người nhận: <span>{bookingData.full_name} </span> </p>
                    <p>Số điện thoại: <span>{bookingData.phone} </span> </p>
                    <p>Số tiền: <span>{formatNumber(bookingData.total_price)} </span> </p>
                    <p>Đơn hàng: <span>{tour.title} </span> </p>
                </div>
            </div>

            <div className="payment__action">
                <p>Bạn đã thanh toán xong</p>
                <button onClick={handleCheckPayment}>Tôi đã thanh toán xong</button>
                <img src={payment.qr} alt="QRCODE" className='payment__qrcode' />
                <span>Sử dụng ứng dụng ngân hàng có hỗ trợ quét mã để quét</span>
                <img src={loading} alt="loading" className='payment__loading' />
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            {
                showLoading && (<LoadingCheckPayment />)
            }
        </div>
    )
}

export default Payment