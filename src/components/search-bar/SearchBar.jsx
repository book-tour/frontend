import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalState } from '../../contexts/GlobalState'
import './search-bar.css'


const SearchBar = ({ data, handleSearch }) => {
    const navigate = useNavigate()


    // options init
    const { destination: { destinations } } = useContext(GlobalState)
    const priceOptions = [
        { name: 'Giá', value: { min_price: 0 } },
        { name: 'Từ 2 đến 4 triệu', value: { min_price: 2000000, max_price: 4000000 } },
        { name: 'Từ 4 đến 6 triệu', value: { min_price: 4000000, max_price: 6000000 } },
        { name: 'Hơn 10 triệu', value: { min_price: 10000000 } },
    ]

    // search conditions init
    const [searchData, setSearchData] = useState({
        position: '',
        destination: '',
        depart_date: '',
        discount: '',
        price: '0',
        ...data
    })

    // on search data change
    const handlSearchDataChange = (e) => {
        setSearchData({
            ...searchData,
            [e.target.name]: e.target.value
        })
    }

    const changeInputType = (e) => {
        e.target.type = e.type === 'focus' ? 'date' : 'text';
    }

    // search click
    const handleSearchButtonClick = () => {
        const data = searchData
        const finalData = { ...data, ...priceOptions[data.price * 1].value }

        if (handleSearch) {
            return handleSearch(finalData)
        }
        return navigate('/tours', { state: finalData })
    }

    return (
        <div className="search-bar-container">
            <div className="row no-gutters">
                <div className="col l-10">
                    <div className="search-input-wrapper">
                        <div className="row">
                            <div className="col l-2-4">
                                <div className="input-item-wrapper">
                                    <select name="position" value={searchData.position} onChange={handlSearchDataChange}>
                                        <option value="">Nơi khởi hành</option>
                                        <option value="Ho Chi Minh">TP HCM</option>
                                        <option value="Ha Noi">Hà Nội</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col l-2-4">
                                <div className="input-item-wrapper">
                                    <select name="destination" value={searchData.destination} onChange={handlSearchDataChange}>
                                        <option value="">Điểm đến</option>
                                        {
                                            destinations.map((item, index) => (
                                                <option value={item.name} key={index}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col l-2-4">
                                <div className="input-item-wrapper">
                                    <input
                                        type="text"
                                        name="depart_date"
                                        placeholder="Ngày khởi hành"
                                        onFocus={changeInputType}
                                        onBlur={changeInputType}
                                        value={searchData.depart_date}
                                        onChange={handlSearchDataChange} />
                                </div>
                            </div>
                            <div className="col l-2-4">
                                <div className="input-item-wrapper">
                                    <select name="discount" value={searchData.discount} onChange={handlSearchDataChange}>
                                        <option value="">Giảm giá</option>
                                        <option value={true}>Có</option>
                                        <option value={false}>Không</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col l-2-4">
                                <div className="input-item-wrapper">
                                    <select name="price" value={searchData.price} onChange={handlSearchDataChange}>
                                        {
                                            priceOptions.map((item, index) => (
                                                <option value={index} key={index}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col l-2">
                    <div className="search-button-wrapper">
                        <button onClick={handleSearchButtonClick}>Tìm kiếm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar