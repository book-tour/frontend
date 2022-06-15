import { apiUrl } from '../utils/constants'
import axios from 'axios'


const TourContext = () => {

    const getClosetTours = async (callback = () => { }) => {
        try {
            const res = await axios.get(`${apiUrl}/tours`)
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
            const res = await axios.get(`${apiUrl}/tours/${idTour}`, {
                params: {
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

    const getTourPrice = async (idTour, idSchedule) => {
        try {
            const res = await axios.get(`${apiUrl}/tours/book/${idTour}/${idSchedule}`)
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

    const createPayment = async (data) => {
        try {
            const res = await axios.post(`${apiUrl}/payments`, data)
            return {
                success: true,
                data: res.data.data
            }
        } catch (error) {
            return {
                success: true,
                error
            }
        }
    }

    const syncPayment = async () => {
        try {
            const accountNumber = 8007041180684
            const res = await axios.post(`${apiUrl}/users-paid`, { accountNumber })
            return {
                success: true,
                data: res.data
            }
        }
        catch (error) {
            return {
                success: false,
                error
            }
        }
    }

    const checkPayment = async (encodeId) => {
        try {
            const res = await axios.get(`${apiUrl}/payments/${encodeId}`)
            return {
                success: true,
                data: res.data.data
            }
        } catch (error) {
            return {
                success: true,
                error
            }
        }
    }

    return {
        getClosetTours,
        getDetailTour,
        searchTours,
        getTourPrice,
        createPayment,
        syncPayment,
        checkPayment
    }
}
export default TourContext