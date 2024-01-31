import React, { useRef } from 'react';
import { FaStar} from "react-icons/fa";
import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {

  const myData = [
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra accumsan lacus vel facilisis.",
      name: "Richard Turner",
      post: "Director",
      bgColor: "#C983FF"
    },
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra accumsan lacus vel facilisis.",
      name: "Mary K. Austin",
      post: "Law Consultant",
      bgColor: "#2EA7FF"
    },
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra accumsan lacus vel facilisis.",
      name: "Christopher Lindsey",
      post: "Finance Consultant",
      bgColor: "#FF9F06"
    },
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra accumsan lacus vel facilisis.",
      name: "Johnson",
      post: "React Developer",
      bgColor: "#FF2B9C"
    }
  ];

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
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    
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
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  return (
    <>
      <div className="pt-100 pb-70 ">
        <div className="container testimonial-container">
          <div className="section-title style-two">
            <h2>Testimonials</h2>
          </div>
          <div >
            <FaArrowLeft className='slick-previous-button' onClick={() => slider.current.slickPrev()} />
            <FaArrowRight className='slick-next-button' onClick={() => slider.current.slickNext()} />
          </div>
          <div>
            <Slider ref={slider} {...settings}>
              {myData.map((x) => (
             
                <div key={x} className="pp-testimonials-box" >   
                    <FaQuoteLeft className="icon xxx" style={{ background: `${x.bgColor}`, color: "white" }} />
                    <p>{x.description}</p>
                    <div >
                      <FaStar className='testimonials-star' />
                      <FaStar className='testimonials-star' />
                      <FaStar className='testimonials-star' />
                      <FaStar className='testimonials-star' />
                      <FaStar className='testimonials-star' />
                    </div>
                    <div className="info">
                      <h3>{x.name}</h3>
                      <span>{x.post}</span>
                    </div>
                  </div>
              ))}
              </Slider>
            </div>
        </div>
      </div>
      <div className="separate-border" />
    </>
  );
};

export default Testimonials;










