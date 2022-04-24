import { useState, useEffect } from 'react'
import { apiUrl } from '../utils/constants'
import axios from 'axios'


const TourContext = () => {

    const [tours, setTours] = useState([])
    const [closetTours, setClosetTours] = useState([])

    const getClosetTours = async () => {
        try {
            const res = await axios.get(`${apiUrl}/listItemSummary`)
            setClosetTours(res.data.data)
        }
        catch (error) {
            console.log({ error })
        }
    }

    const getDetailTour = async (idTour, idSchedule) => {
        try {
            const res = await axios.get(`${apiUrl}/detailInfoItem?id_tour=${idTour}&id_schedule=${idSchedule}`)
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

    useEffect(() => {
        getClosetTours()
    }, [])

    return {
        tours,
        closetTours,
        getClosetTours,
        getDetailTour
    }

}
export default TourContext