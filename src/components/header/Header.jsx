
import { useState, useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDownSLine } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { MdTour } from 'react-icons/md'
import './header.css'
import { GoogleLogin } from 'react-google-login';
import { GlobalState } from '../../contexts/GlobalState'

const Header = () => {
    const {
        tourContext: { login }
    } = useContext(GlobalState)

    const [user, setUser] = useState(false)


    const googleResponse = (response) => {
        login({ providerToken: response.tokenId }).then((res) => {
            let data = res.data.data
            localStorage.setItem('tugo_data', JSON.stringify(data));
            setUser({
                avatar_url:data.avatar_url,
                name: `${data.first_name} ${data.last_name}`,
            })
        }).catch((err) => {
            console.log(err);
            localStorage.removeItem('tugo_data')
            setUser(false)
        });
    }
    const handleSingOut = ()=>{
        localStorage.removeItem('tugo_data')
        setUser(false)
    }
    useEffect(() => {
        if (localStorage.getItem('tugo_data')) {
            let data = JSON.parse(localStorage.getItem('tugo_data'))
            const last_name = data.last_name ?? ' '
            const first_name = data.first_name ?? ' '
            setUser({
                avatar_url: data.avatar_url,
                name: `${first_name} ${last_name}`,
            })
        }
    }, [])

    return (
        <header className="header__container">
            <div className="header__logo">
                <Link to="/" className="header__logo-link">
                    <h1 className="header__logo-text">Tugo</h1>
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
                        <Link to="/destination" className="nav__item-link">
                            Điểm đến
                        </Link>
                    </li>
                    <li className="nav__item hover-effect">
                        <Link to="/sales" className="nav__item-link">
                            Khuyến mãi
                        </Link>
                    </li>
                    {
                        user ? (
                            <li className="nav__item nav__item-with-sub">
                                <div className="nav__item-user">
                                    <img src={user.avatar_url} alt="avatar" />
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
                                            <div className="nav__item-sub-item-link" onClick={handleSingOut}>
                                                <FiLogOut />
                                                <span>Đăng xuất</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        ) : (
                            <li className="nav__item hover-effect">
                                <GoogleLogin
                                    clientId={global.config.KEY}
                                    onSuccess={googleResponse}
                                    cookiePolicy={'single_host_origin'}
                                    render={renderProps => (
                                        <span onClick={renderProps.onClick} disabled={renderProps.disabled} className="nav__item-link">
                                            Đăng nhập
                                        </span>
                                    )}
                                ></GoogleLogin>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}
export default Header;