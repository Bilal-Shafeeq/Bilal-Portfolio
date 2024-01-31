import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import GoToTop from './GoToTop';



const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget"
               data-aos="fade-in" data-aos-duration={1200} data-aos-delay={100}
              >
                <div className="logo">
                  <a href="/">
                    <img src="/images/logo.png" alt="Logo" />
                  </a>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/" target="_blank">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <GrInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget"
               data-aos="fade-in" data-aos-duration={1200} data-aos-delay={200} 
              >
                <h3>Explore</h3>
                <ul className="list">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Team</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget"
              data-aos="fade-in" data-aos-duration={1200} data-aos-delay={300}
              >
                <h3>Quick Links</h3>
                <ul className="list">
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Faq</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget"
              data-aos="fade-in" data-aos-duration={1200} data-aos-delay={400}
              >
                <h3>Get in Touch</h3>
                <ul className="get-in-touch">
                  <li>
                    <IoLocationOutline className="hhh" style={{ marginTop: "4px" }} /> 2750 Quadra Street Punjab, Pakistan.
                  </li>
                  <li><FaHeadset className="hhh" style={{ marginTop: "8px" }} /><a href="tel:#">+098-7654-321</a><br /><a href="tel:#">+123-4567-890</a></li>
                  <li><BiEnvelope className="hhh" style={{ marginTop: "3px" }} /><a href="#"><span>bilal@pungent.com</span></a>
                    <a href="#"><span>support@pungent.com</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <p>Copyright © 2023 Pungent. All Rights Reserved By
              <a href="#" target="_blank" style={{ marginLeft: "4px" }}>Bilal</a>
            </p>
            <GoToTop />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer