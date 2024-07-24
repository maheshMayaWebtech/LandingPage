import "./index.css";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    url: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721727473/8_uonwkx.png",
    name: "Rahul Yadav",
    content:
      "We get the benefit of the right Aadhar-enabled payment system near me for our customers from Maya Web Tech. they provided us with the Aeps services to cover our needs. ",
  },
  {
    url: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721727472/5_x8k82m.png",
    name: "Pankaj Kumar",
    content:
      "They provided us with the benefit of AEPS registration and the AEPS portal that helped us to provide Aadhar payment to our customers and provided us with AEPS services for need.",
  },
  {
    url: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721727472/6_vseknm.png",
    name: "Ravi Rastogi",
    content:
      "We get the benefit of aadhar enabled payment system and AEPS cash withdrawal to fulfill the demands of our customers along with the best AEPS services to make us grow.",
  },
  {
    url: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721799359/features_uw5xet_c_crop_ar_3_4_iclm2g.jpg",
    name: "Sunil Kashyap",
    content:
      "We were looking for AEPS registration online free to get Aadhar-based money withdrawal services when we learned about the best Aeps services from Maya Web Tech.",
  },
  {
    url: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721727472/7_pfvpu0.png",
    name: "Deependra Yadav",
    content:
      "We were looking for an Aeps money transfer and got the benefit of that Aadhar-enabled payment system for Aadhar-based money withdrawals.",
  },
  {
    url: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721727471/4_sqxdvb.png",
    name: "Jagdish Pandey",
    content:
      "We got the benefit of the right AEPS portal with Maya Web Tech which helped us to provide AEPS money transfer to our customers.",
  },
  {
    url: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721727471/3_ao2nwz.png",
    name: "Yash Giri",
    content:
      "They provided us with the benefit of Aadhar-based money withdrawal which helped us to provide all the AEPS services to our customers.",
  },
  {
    url: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721727471/1_r4zhfh.png",
    name: "Mitesh Sharma",
    content:
      "We got the benefit of the best AEPS portal that helped us to provide Aadhar-based money withdrawals to our customers.",
  },
];

function ImageSlider({}) {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((item, idx) => (
          <div
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
            onClick={() => setImageIndex(idx)}
            key={idx}
            style={{borderRadius: '20px'}}
          >
            <img src={item.url} alt={item.url} height={250} style={{borderRadius: '10px'}} />
            <div className="cardImageContent">
              <h1>{item.name}</h1>
              <h5>{item.content}</h5>
              <div className="stars">
                <FaStar color="#ffc30f" size={"15px"} />
                <FaStar color="#ffc30f" size={"15px"} />
                <FaStar color="#ffc30f" size={"15px"} />
                <FaStar color="#ffc30f" size={"15px"} />
                <FaStar color="#ffc30f" size={"15px"} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
