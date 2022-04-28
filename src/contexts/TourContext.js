import { useState, useEffect } from 'react'
import axios from 'axios'


const TourContext = () => {

    const [tours, setTours] = useState([])
    const [closetTours, setClosetTours] = useState([])

    const getClosetTours = async () => {
        try {
            const res = await axios.get(`${global.config.API}/listItemSummary`)
            setClosetTours(res.data.data)
        }
        catch (error) {
            console.log({ error })
        }
    }

    const getDetailTour = async (idTour, idSchedule) => {
        try {
            const res = await axios.get(`${global.config.API}/detailInfoItem?id_tour=${idTour}&id_schedule=${idSchedule}`)
            console.log(res)
            return {
                success: true,
                data: res.data.data
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
        const response = await axios.get(`${global.config.API}/infoTourPayment/${idSchedule}`);
        return response;
    }
    const login = async (data) => {
        const response = await axios.post(`${global.config.API}/login`, data);
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