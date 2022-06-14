import React, { useState, useEffect, useContext } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import DetailTour from '../components/detail-tour/DetailTour'
import LoadingPage from '../components/loading/LoadingPage'
import TourNotFound from '../components/tour-not-found/TourNotFound'
import { GlobalState } from '../contexts/GlobalState'

const DetailTourPage = () => {
    const [tour, setTour] = useState(false)
    const [loading, setLoading] = useState(true)
    const {
        tour: { getDetailTour }
    } = useContext(GlobalState)

    const { idTour } = useParams()
    const [query] = useSearchParams()
    const idSchedule = query.get('idSchedule')


    useEffect(() => {
        const getDetail = async () => {
            const res = await getDetailTour(idTour, idSchedule)
            if (res.success) {
                setTour({
                    ...res.data,
                    idSchedule
                })
            }
            setLoading(false)
        }
        getDetail()
    }, [getDetailTour, idTour, idSchedule])

    if (loading) {
        return (<LoadingPage />)
    }

    return (
        <div className="detail-tour-page-container">
            <div className="grid wide">
                <div className={'detail-tour-page-wrapper'}>
                    <Header />
                    {
                        tour ? (
                            <DetailTour tour={tour} />
                        ) :
                            (
                                <TourNotFound />
                            )
                    }
                    <Footer />
                </div>
            </div>
        </div>
    )
}


export default DetailTourPage