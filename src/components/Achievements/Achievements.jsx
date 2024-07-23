import React from 'react'
import '../LandingForm/index.css'
import ImageSlider from '../ImageSlider'

const Achievements = () => {
  return (
    <div className="forthSection">
        <div className="forthTop">
          <img
            src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299108/MayaWebTech/sgiybnnxoneg2345kggp.png"
            width={100}
            className="trophy"
          />
          <h1>Join us for a satisfied Aeps portal</h1>
          <h3>Our achievements</h3>
        </div>
        <ImageSlider />
      </div>
  )
}

export default Achievements