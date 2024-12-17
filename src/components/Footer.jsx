import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import GoToTop from './GoToTop';
import { Link } from 'react-router-dom';



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
                  <Link to="/">
                    <img src="/images/logo.webp" alt="Logo" />
                  </Link>
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
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/">About</Link></li>
                  <li><Link to="/">Services</Link></li>
                  <li><Link to="/">Portfolio</Link></li>
                  <li><Link to="/">Team</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget"
                data-aos="fade-in" data-aos-duration={1200} data-aos-delay={300}
              >
                <h3>Quick Links</h3>
                <ul className="list">
                  <li><Link to="/">Contact Us</Link></li>
                  <li><Link to="/">Pricing</Link></li>
                  <li><Link to="/">Faq</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">Terms &amp; Conditions</Link></li>
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
                  <li>
                    <FaHeadset className="hhh" style={{ marginTop: "8px" }} />
                    <Link to="/">+098-7654-321</Link>
                    <br />
                    <Link to="/">+123-4567-890</Link>
                  </li>
                  <li><BiEnvelope className="hhh" style={{ marginTop: "3px" }} />
                    <Link to="/"><span>bilal@pungent.com</span>
                    </Link>
                    <Link to="/"><span>support@pungent.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <p>Copyright © 2023 Pungent. All Rights Reserved By
              <Link to="/" style={{ marginLeft: "4px" }}>Bilal</Link>
            </p>
            <GoToTop />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer