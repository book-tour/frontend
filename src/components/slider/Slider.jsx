import React, { useState } from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slider.css'


const Slider = () => {

    const [slides, setSlides] = useState([
        {
            _id: 1,
            caption: 'First Slide',
            url: 'https://statics.vinpearl.com/diem-du-lich-05_1632671806.jpg'
        },
        {
            _id: 2,
            caption: 'First Slide',
            url: 'https://statics.vinpearl.com/diem-du-lich-02_1648302369.png'
        },
        {
            _id: 3,
            caption: 'First Slide',
            url: 'https://statics.vinpearl.com/diem-du-lich-9_1632662759.jpg'
        },
        {
            _id: 4,
            caption: 'First Slide',
            url: 'https://statics.vinpearl.com/diem-du-lich_1648301729.jpg'
        },
        {
            _id: 5,
            caption: 'First Slide',
            url: 'https://statics.vinpearl.com/hinh-anh-kinh-nghiem-du-lich-ha-long-7.jpg'
        },
    ]
    )


    return (
        <div className="slider" >
            <Fade
                duration="10000"
                indicators={true}
                cssClass="slider-custome">
                {
                    slides.map(slide => (
                        <div className="slide" key={slide._id}>
                            <img src={slide.url} alt="slide" className='slide__image' />
                        </div>
                    ))
                }
            </Fade>
        </div>
    )
}

export default Slider