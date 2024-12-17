import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const MyAllProjects = () => {

  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="section-title style-two">
            <h2>My All Projects</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="pp-works-box"
                data-aos="fade-up" data-aos-duration={1200} data-aos-delay={100}
              >
                <img src="/images/project-img1.webp" alt="image" />
                <h3>Startup Business</h3>
                <Link className="link-btn" to="/" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="pp-works-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={200}
              >
                <img src="/images/project-img2.webp" alt="image" />
                <h3>App Landing</h3>
                <Link className="link-btn" to="/" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="pp-works-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={300}
              >
                <img src="/images/project-img3.webp" alt="image" />
                <h3>Digital Marketing</h3>
                <Link className="link-btn" to="/" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="pp-works-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={400}
              >
                <img src="/images/project-img4.webp" alt="image" />
                <h3>Business Startup</h3>
                <Link className="link-btn" to="/" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="pp-works-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={500}
              >
                <img src="/images/project-img5.webp" alt="image" />
                <h3>Digital Agency</h3>
                <Link className="link-btn" to="/" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="pp-works-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={600}
              ><img src="/images/project-img6.webp" alt="image" />
                <h3>Blog Business</h3>
                <Link className="link-btn" to="/" />
              </div>
            </div>
            <div className="col-lg-12 col-sm-12 col-md-12">
              <div className="pp-works-box-btn">
                <Link className="default-btn-two btnClickEffect" to="/">View More
                  <FaChevronRight style={{ marginLeft: "3px" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separate-border" />
    </>
  )
}

export default MyAllProjects