import React from 'react'
import './search-bar.css'



const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="row no-gutters">
                <div className="col l-10">
                    <div className="search-input-wrapper">
                        <div className="row">
                            <div className="col l-2-4">
                                <div className="input-item-wrapper">
                                    <select name="from" id="">
                                        <option value="" selected disabled>Nơi khởi hành</option>
                                        <option value="HCM">TP HCM</option>
                                        <option value="HN">Hà Nội</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col l-2-4">
                                <div className="input-item-wrapper">
                                    <select name="destination" id="">
                                        <option value="" selected disabled>Nơi đến</option>
                                        <option value="HCM">Vịnh Hạ Long</option>
                                        <option value="HN">Nha Trang</option>
                                        <option value="HCM1">Vũng tàu</option>
                                        <option value="HN2">Đà Lạt</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col l-2-4">
                                <div className="input-item-wrapper">
                                    <input type="datetime" name="start" id="" placeholder="Ngày khởi hành" />
                                </div>
                            </div>
                            <div className="col l-2-4">
                                <div className="input-item-wrapper">
                                    <select name="discount" id="">
                                        <option value="" selected disabled>Giảm giá</option>
                                        <option value="yes">Có</option>
                                        <option value="no">Không</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col l-2-4">
                                <div className="input-item-wrapper">
                                    <select name="price" id="">
                                        <option value="" selected disabled>Giá</option>
                                        <option value="yes">2 - 4 triệu</option>
                                        <option value="yes">4 - 6 triệu</option>
                                        <option value="yes"> hơn 10 triệu</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col l-2">
                    <div className="search-button-wrapper">
                        <button>Xem giá</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar