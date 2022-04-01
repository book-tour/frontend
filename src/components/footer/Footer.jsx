import React from 'react'
import { ImLocation2 } from 'react-icons/im';
import { BsTelephone } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom'

import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col l-4">
                    <div className="footer__item">
                        <h1 className="footer__item-heading">
                            CÔNG TY CỔ PHẦN TUGO VIỆT NAM
                        </h1>
                        <div className="footer__item-contact">
                            <ImLocation2 />
                            <span>
                                Đường Hàn Thuyên Khu phố 6, Thành phố
                                Thủ Đức, Thành phố Hồ Chí Minh
                            </span>
                        </div>
                        <div className="footer__item-contact">
                            <BsTelephone />
                            <span>
                                0123456789
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col l-4">
                    <div className="footer__item footer__item-center">
                        <h1 className="footer__item-heading">
                            Góc khách hàng
                        </h1>
                        <Link to='#' className="footer__item-user hover-effect-color hover-effect-transition">Chính sách đặt tour</Link>
                        <Link to='#' className="footer__item-user hover-effect-color hover-effect-transition">Chính sách hoàn tiền</Link>
                        <Link to='#' className="footer__item-user hover-effect-color hover-effect-transition">Ý kiến khách hàng</Link>
                        <Link to='#' className="footer__item-user hover-effect-color hover-effect-transition">Phiếu góp ý</Link>
                    </div>
                </div>
                <div className="col l-4">
                    <div className="footer__item">
                        <div className="footer__item-email">
                            <h1 className="footer__item-heading">
                                Đăng ký nhận tin khuyến mãi
                            </h1>
                            <div className="footer__item-form">
                                <input type="email" name="email" id="email" placeholder="Nhập email của bạn" />
                                <IoSend className="hover-effect-color" />
                            </div>
                        </div>

                        <div className="footer__item-social">
                            <h1 className="footer__item-heading">
                                Kết nối với chúng tôi
                            </h1>
                            <div className="footer__item-social-icons">
                                <a className="hover-effect-color" rel="noreferrer" target="_blank" href="https://twitter.com/"> <BsTwitter /></a>
                                <a className="hover-effect-color" rel="noreferrer" target="_blank" href="https://www.facebook.com/"><BsFacebook /></a>
                                <a className="hover-effect-color" rel="noreferrer" target="_blank" href="https://www.instagram.com/"><BsInstagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <span className="footer__copy-right">
                    Copy right 2021 - 2022 Tugo.com
                </span>
            </div>
        </footer>
    )
}

export default Footer