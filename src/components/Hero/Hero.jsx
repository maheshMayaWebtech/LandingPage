import React from 'react'
import '../LandingForm/index.css'
import { FaHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Card } from '../LandingForm';

const Hero = ({handleOpen}) => {
    const star = [
        <FaStar color="#9b0d2e" size={"22px"} />,
        <FaStar color="#9b0d2e" size={"22px"} />,
        <FaStar color="#9b0d2e" size={"22px"} />,
        <FaStar color="#9b0d2e" size={"22px"} />,
        <FaStarHalfAlt color="#9b0d2e" size={"22px"} />,
      ];
      const heart = [
        <FaHeart color="#9b0d2e" size={"22px"} />,
        <FaHeart color="#9b0d2e" size={"22px"} />,
        <FaHeart color="#9b0d2e" size={"22px"} />,
        <FaHeart color="#9b0d2e" size={"22px"} />,
        <FaHeart color="#9b0d2e" size={"22px"} />,
      ];
    
  return (
    <div className="home">
        <div className="left">
          <img
            src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299105/MayaWebTech/hkwq01ornzq9onhulqij.png"
            width={80}
            className="coinStack"
          />
          <div className="leftTitle">
            <span>AEPS</span> - A Succesful Way for a Better Future
          </div>
          <button className="joinBtn" onClick={handleOpen}>
            Book Demo
          </button>
          <div className="mobileTopImage">
            <img
              src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721715446/duplicate_fintech_form_5_dc66nh.png"
              width={300}
            />
          </div>
          <div className="ratings">
            <Card
              TopText={"4.5"}
              Rating={star}
              SubHeading={"Positive Rating"}
              cl={"star"}
            />
            <Card
              TopText={"3K+"}
              Rating={heart}
              SubHeading={"Positive Rating"}
              cl={"heart"}
            />
          </div>
        </div>
        <div className="right">
          <img
            src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721301797/halfCutImage_pkqafd.png"
            className="staticRight"
          />
          <img
            src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721715446/duplicate_fintech_form_5_dc66nh.png"
            width={200}
            className="movingRight"
          />
        </div>
      </div>
  )
}

export default Hero