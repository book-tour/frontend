import { useState, useEffect } from 'react'
import { apiUrl } from '../utils/constants'
import axios from 'axios'

const DestinationContext = () => {
    const [destinations, setDestinations] = useState([])


    useEffect(() => {
        const getDestinations = async () => {
            try {
                const res = await axios.get(`${apiUrl}/destinations`)
                setDestinations(res.data.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        getDestinations()
    }, [])

    return {
        destinations
    }
}

export default DestinationContext