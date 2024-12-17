import React from 'react'
import { FaChevronRight, FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


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
                      Dec 02, 2024</li>
                    <li>
                      <FaRegUserCircle className='blog-post-icon' />
                      <Link to="/">Shelley Percy</Link>
                    </li>
                  </ul>
                  <h3><a to="/">Top 5 Tips To Create An Eye-Catching Website</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  <Link className="link-btn" to="/">Read More
                    <FaChevronRight className='latest-blog-right-angle' />
                  </Link>
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
                      Dec 03, 2024</li>
                    <li>
                      <FaRegUserCircle className='blog-post-icon' />
                      <Link to="/">Stevn Smith</Link></li>
                  </ul>
                  <h3>
                    <Link to="/">Improve Marketing Techniques For Lead Generation</Link>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  <Link className="link-btn" to="/">Read More
                    <FaChevronRight className='latest-blog-right-angle' />
                  </Link>
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
                      Dec 04, 2024</li>
                    <li>
                      <FaRegUserCircle className='blog-post-icon' />
                      <Link to="/">David Warner</Link></li>
                  </ul>
                  <h3>
                    <Link to="/">Esit And A Case For Successful Fast Delivery</Link>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  <Link className="link-btn" to="/">Read More
                    <FaChevronRight className='latest-blog-right-angle' />
                  </Link>
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