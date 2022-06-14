import { apiUrl } from '../utils/constants'
import axios from 'axios'


const TourContext = () => {

    const getClosetTours = async (callback = () => { }) => {
        try {
            const res = await axios.get(`${apiUrl}/listItemSummary`)
            callback(res.data, null)
            return {
                success: true,
                data: res.data.data
            }
        }
        catch (error) {
            callback(null, error)
            return {
                success: false,
                error,
            }
        }
    }

    const getDetailTour = async (idTour, idSchedule) => {
        try {
            const res = await axios.get(`${apiUrl}/detailInfoItem`, {
                params: {
                    idTour,
                    idSchedule
                }
            })
            return {
                success: true,
                data: res.data.data
            }
        }
        catch (error) {
            return {
                success: false,
                error,
            }
        }
    }

    const searchTours = async (data, callback = () => { }) => {
        try {
            const res = await axios.post(`${apiUrl}/search`, data)

            callback(res.data, null)

            return {
                success: true,
                data: res.data.data
            }
        }
        catch (error) {
            callback(null, error)
            return {
                success: false,
                error,
            }
        }
    }

    return {
        getClosetTours,
        getDetailTour,
        searchTours
    }
}
export default TourContext