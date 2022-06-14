import React, { useEffect, useState, useContext, useCallback, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { GlobalState } from '../../contexts/GlobalState';
import SearchBar from '../search-bar/SearchBar'
import TourItem from '../tours/tour_item/TourItem'
import { BiFilterAlt } from 'react-icons/bi';
import './all-tour.css'
import LoadingPage from '../loading/LoadingPage';
const AllTour = () => {


    const { state } = useLocation()
    const [loading, setLoading] = useState(false)
    const [tours, setTours] = useState([])
    const { tour: { searchTours } } = useContext(GlobalState)
    const checkboxRef = useRef()

    const handleSearch = useCallback(async (data) => {
        setLoading(prev => !prev)
        const res = await searchTours(data)

        if (res.success) {
            setTours(res.data)
        } else {
            setTours([])
        }
        setLoading(prev => !prev)

    }, [searchTours, setLoading])

    useEffect(() => {
        const getTours = async () => {
            await handleSearch(state)
        }
        getTours()
    }, [handleSearch, state])

    useEffect(() => {
        if (!tours || tours.length === 0) {
            checkboxRef.current.checked = true
        }
    }, [tours])

    return (
        <div className="all-tour__cotainer margin-header">
            <h3 className="all-tour__title">
                Danh sách các tour
            </h3>

            <div className="all-tour__filter-container">
                <div className="all-tour__filter-label-container">
                    <label htmlFor="filter-tour" className="all-tour__filter-label">
                        <BiFilterAlt />
                        <span>Lọc</span>
                    </label>
                </div>
                <input type="checkbox" ref={checkboxRef} id="filter-tour" />
                <div className="all-tour__filter-main">
                    <SearchBar search={handleSearch} data={state} />
                </div>
            </div>

            {
                loading ? (<>
                    <LoadingPage />
                </>) : (
                    <div className="all-tour__result">
                        <div className='row'>
                            {
                                (!tours || tours.length === 0) ? (
                                    <div className="all-tour__result-empty">
                                        <h3>Không có kết quả phù hợp</h3>
                                    </div>
                                ) : (
                                    <>
                                        {
                                            tours.map((item, index) => (
                                                <TourItem
                                                    key={index}
                                                    tour={item} />
                                            ))
                                        }
                                    </>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AllTour