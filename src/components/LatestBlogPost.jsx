import React from 'react'
import { FaChevronRight, FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";


const LatestBlogPost = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two">
            <h2>Latest Blog Post</h2>
          </div>
          <div className="row ">
            <div className="col-lg-4 col-md-6">
              <div className="pp-post-item"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={100}
              >
                <div className="post-content">
                  <ul className="meta">
                    <li>
                      <FaCalendarAlt className='blog-post-icon' />
                      Dec 02, 2022</li>
                    <li>
                      <FaRegUserCircle className='blog-post-icon' />
                      <a href="#">Shelley Percy</a>
                    </li>
                  </ul>
                  <h3><a href="#">Top 5 Tips To Create An Eye-Catching Website</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  <a className="link-btn" href="#">Read More
                    <FaChevronRight className='latest-blog-right-angle' />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pp-post-item"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={200}
              >
                <div className="post-content">
                  <ul className="meta">
                    <li>
                      <FaCalendarAlt className='blog-post-icon' />
                      Dec 03, 2022</li>
                    <li>
                      <FaRegUserCircle className='blog-post-icon' />
                      <a href="#">Stevn Smith</a></li>
                  </ul>
                  <h3>
                    <a href="/blog-details/">Improve Marketing Techniques For Lead Generation</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  <a className="link-btn" href="/blog-details/">Read More
                    <FaChevronRight className='latest-blog-right-angle' />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pp-post-item" 
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={300}
              >
                <div className="post-content">
                  <ul className="meta">
                    <li>
                      <FaCalendarAlt className='blog-post-icon' />
                      Dec 04, 2022</li>
                    <li>
                      <FaRegUserCircle className='blog-post-icon' />
                      <a href="#">David Warner</a></li>
                  </ul>
                  <h3>
                    <a href="#">Esit And A Case For Successful Fast Delivery</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  <a className="link-btn" href="#">Read More
                    <FaChevronRight className='latest-blog-right-angle' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separate-border" />
    </>
  )
}

export default LatestBlogPost