import React from 'react'
import image from '../images/img-2.jpg'

const BodyImage = () => {
    return(
        <div className="job-list">
            {/* <i className='fas fa-laptop-house'></i> */}
            <img src={image} alt=""/>
            <hr></hr>
            <h1>Find the best Remote Job</h1>
        </div>
    )
}

export default BodyImage