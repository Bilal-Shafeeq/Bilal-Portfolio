import React from 'react'
import { FaClone, FaBandcamp } from "react-icons/fa";
import { FaDesktop, FaPrint, FaMobileScreenButton, FaChartArea } from "react-icons/fa6";


const MyExpertise = () => {
  return (
    <>
      <div className="pp-expertise-area pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two">
            <h2>My Expertise</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="pp-expertise-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={100}
              >
                <FaClone className='icon' />
                <h3>Product Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="pp-expertise-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={200}
              >
                <FaDesktop className="icon" />
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="pp-expertise-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={300}
              >
                <FaBandcamp className="icon bg-f3f9e7" />
                <h3>Branding &amp; Logo</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="pp-expertise-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={400}
              >
                <FaPrint className="icon" />
                <h3>Print Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="pp-expertise-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={500}
              >
                <FaMobileScreenButton className="icon bg-eaf6ff" />
                <h3>App Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="pp-expertise-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={600}
              >
                <FaChartArea className="icon bg-faf2ff" />
                <h3>Motion &amp; Animation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyExpertise