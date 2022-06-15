
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RiArrowDownSLine } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { MdTour } from 'react-icons/md'
import logo from '../../assets/img/logo.png'
import './header.css'

const Header = () => {

    const initUser = {
        name: 'Tiến Dũng',
        thumbnail: 'https://i.vietgiaitri.com/2016/3/18/man-nhan-voi-than-hinh-cuc-chuan-cua-2-co-gai-dep-sexy-8175f6.jpg'
    }

    const [user, setUser] = useState(false)

    const navigate = useNavigate()

    const navigateSales = (e) => {
        e.preventDefault()

        navigate('/tours', { state: { discount: true } })
    }

    return (
        <header className="header__container">
            <div className="header__logo">
                <Link to="/" className="header__logo-link">
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <nav className="header__nav">
                <ul className="nav__list">
                    <li className="nav__item hover-effect">
                        <Link to="/" className="nav__item-link">
                            Trang chủ
                        </Link>
                    </li>

                    <li className="nav__item hover-effect">
                        <Link to="/destinations" className="nav__item-link">
                            Điểm đến
                        </Link>
                    </li>
                    <li className="nav__item hover-effect">
                        <Link to="/sales" onClick={navigateSales} className="nav__item-link">
                            Khuyến mãi
                        </Link>
                    </li>

                    {
                        user ? (
                            <li className="nav__item nav__item-with-sub">
                                <div className="nav__item-user">
                                    <img src={user.thumbnail} alt="avatar" />
                                    <span>{user.name}</span>
                                    <RiArrowDownSLine />
                                </div>

                                <div className="nav__item-sub">
                                    <ul className="nav__item-sub-list">
                                        <li className="nav__item-sub-item hover-effect">
                                            <Link to="/" className="nav__item-sub-item-link">
                                                <CgProfile />
                                                <span>Tài khoản</span>
                                            </Link>
                                        </li>
                                        <li className="nav__item-sub-item hover-effect">
                                            <Link to="/" className="nav__item-sub-item-link">
                                                <MdTour />
                                                <span>Chuyến đi của tôi</span>
                                            </Link>
                                        </li>

                                        <li className="nav__item-sub-item hover-effect">
                                            <Link to="/" className="nav__item-sub-item-link">
                                                <FiLogOut />
                                                <span>Đăng xuất</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        ) : (
                            <li className="nav__item hover-effect">
                                <Link to="/login" className="nav__item-link">
                                    Đăng nhập
                                </Link>
                            </li>
                        )

                    }
                </ul>
            </nav>
        </header>
    )
}
export default Header;