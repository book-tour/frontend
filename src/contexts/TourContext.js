import { useState, useEffect } from 'react'
import api from '../services/api.service';
import axios from 'axios';

const TourContext = () => {

    const [tours, setTours] = useState([])
    const [closetTours, setClosetTours] = useState([])

    const getClosetTours = async () => {
        try {
            const res = await api.get('/listItemSummary')
            setClosetTours(res.data)
        }
        catch (error) {
            console.log({ error })
        }
    }

    const getDetailTour = async (idTour, idSchedule) => {
        try {
            const res = await api.get(`/detailInfoItem?id_tour=${idTour}&id_schedule=${idSchedule}`)
            console.log(res)
            return {
                success: true,
                data: res.data
            }
        }
        catch (error) {
            console.log(error)

            return {
                success: false,
                error,
            }
        }
    }
    const getInfoTourPayment = async (idSchedule) => {
        const response = await api.get(`/infoTourPayment/${idSchedule}`);
        return response;
    }
    const login = async (data) => {
        const response = await api.post(`/login`, data);
        return response;
    }



    useEffect(() => {
        getClosetTours()
    }, [])

    return {
        tours,
        closetTours,
        getClosetTours,
        getDetailTour,
        login,
        getInfoTourPayment
    }

}
export default TourContext