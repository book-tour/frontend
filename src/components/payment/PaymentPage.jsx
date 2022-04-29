
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { GlobalState } from '../../contexts/GlobalState'

import TextField from '@mui/material/TextField';
import moment from "moment";

const PaymentPage = () => {
    const { idSchedule } = useParams();
    const navigate = useNavigate();
    const [infoTour, setInfoTour] = useState({});
    const [paymentInfo, setPaymentInfo] = useState({});

    const {
        tourContext: { getInfoTourPayment }
    } = useContext(GlobalState)

    useEffect(async () => {
        try {
            let data = await getInfoTourPayment(idSchedule)
            console.log(data);
            setInfoTour(data.data.infoTour)
            setPaymentInfo(data.data.paymentInfo)
        } catch (error) {
            console.log(error);
            navigate('../', { replace: true })
        }
    }, [])

    return (
        <>
            <div>
                <div className="flex items-center  w-full">
                    <img src={infoTour.thumbnail} alt="" className="w-[400px] h-[250px]" />
                    <div>
                        <p>{infoTour.title}</p>
                        <div className="flex ">
                            <div>
                                <p>Mã Tour:</p>
                                <p>Thời gian:</p>
                                <p>Giá:</p>
                                <p>Ngày khởi hành:</p>
                                <p>Nơi khởi hành</p>
                                <p>Chỗ còn nhận:</p>
                            </div>
                            <div>
                                <p>{infoTour.id}</p>
                                {/* <p>{infoTour.length.day +' ngày '+ infoTour.length.night +' đêm'}</p> */}
                                <p>{new Intl.NumberFormat('de-DE').format(paymentInfo.adult)}</p>
                                <p>{moment(paymentInfo.depart_date).utc().format('MM/DD/YYYY')}</p>
                                <p>{infoTour.position}</p>
                                <p>Nullllllll</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p>Các khoản phí phát sinh (nếu có) như: phụ thu dành cho khách nước ngoài, việt kiều; phụ thu phòng đơn; phụ thu chênh lệch giá tour… Nhân viên Du Lịch Việt sẽ gọi điện thoại tư vấn cho quý khách ngay sau khi có phiếu xác nhận booking. (Trong giờ hành chính)</p>
                <p> Trường hợp quý khách không đồng ý các khoản phát sinh, phiếu xác nhận booking của quý khách sẽ không có hiệu lực.</p>
                <div>
                    <p>Bảng giá tour chi tiết</p>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Loại giá/độ tuổi</th>
                                    <th>Người lớn(Trên 11 tuổi)	</th>
                                    <th>Trẻ em(5 - 11 tuổi)	</th>
                                    <th>Trẻ nhỏ(2 - 5 tuổi)</th>
                                    <th>Sơ sinh( 2 tuổi trở xuống )</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Giá</td>
                                    <td>{paymentInfo.adult}</td>
                                    <td>{paymentInfo.child}</td>
                                    <td>{paymentInfo.small_child}</td>
                                    <td>{paymentInfo.new_born}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <p>Thông tin liên hệ</p>
                    <div className="grid grid-cols-3">
                        <TextField required label="Họ tên" className="col-span-1" />
                        <TextField required label="Email" className="col-span-1" />
                        <TextField required label="Số điện thoại" type="number" className="col-span-1" />
                    </div>
                    <div className="grid grid-cols-6">
                        <TextField required label="Địa chỉ" className="col-span-2" />
                        <TextField required label="Ghi chú" className="col-span-4" />
                    </div>
                    <div className="grid grid-cols-4">
                        <TextField required label="Người lớn"  type="number" className="col-span-1" />
                        <TextField required label="Trẻ em (5 - 11) tuổi" type="number" className="col-span-1" />
                        <TextField required label="Trẻ nhỏ( 2 - < 5 tuổi)" type="number" className="col-span-1" />
                        <TextField required label="Sơ sinh(nhỏ hơn 2 tuổi)" type="number" className="col-span-1" />
                    </div>
                </div>
            </div>
            <div>
                <span>900000</span>
                <span> đ</span>
            </div>
            <button>Thanh toán</button>
        </>
    )
}

export default PaymentPage