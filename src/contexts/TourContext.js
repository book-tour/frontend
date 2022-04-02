import { useState, useEffect } from 'react'
import axios from 'axios'


const TourContext = () => {

    const [tours, setTours] = useState([])

    const getTours = async () => {
        try {
            const res = await axios.get('https://doan1-tourapi.herokuapp.com/get/tour')
            const tourList = res.data.data;
            console.log(tourList)
            setTours(tourList);
        }
        catch (error) {
            console.log({ error })
        }
    }
    useEffect(() => {
        getTours()
    }, [])

    return {
        tours,
        getTours
    }

}
export default TourContext