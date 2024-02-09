import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "/images/partner1.webp";
import image2 from "/images/partner2.webp";
import image3 from "/images/partner3.webp";
import image4 from "/images/partner4.webp";
import image5 from "/images/partner5.webp";
import image6 from "/images/partner6.webp";


import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const data = [image1, image2, image3, image4, image5, image6, image4]


const MyBestClients = () => {

  const slider = useRef()

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    // For Responsive
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  return (
    <>
      <div className=" ptb-100 ">
        <div className="container best-client-container">
          <div className="section-title style-two">
            <h2>My Best Clients</h2>
          </div>
          <div>
            <SlArrowLeft className='slick-client-next-button' onClick={() => slider.current.slickPrev()} />
            <SlArrowRight className='slick-client-previous-button' onClick={() => slider.current.slickNext()} />
          </div>

          <div className="swiper-slide">
            <Slider ref={slider} {...settings}>
              {data.map((x) => (
                <img key={x} src={x} alt="image" />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="separate-border" />
    </>
  )
}

export default MyBestClients



