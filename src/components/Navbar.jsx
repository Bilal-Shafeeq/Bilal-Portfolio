import React, { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";


const Navbar = () => {

  const [hamburgerList, setHamburgerList] = useState(false)
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 175);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    < >
      <div className={`navbar-area ${scrolling ? 'scrolled' : ''}`}>
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="/images/logo.webp" alt="logo" />
            </a>
            <button onClick={() => setHamburgerList(!hamburgerList)} 
            className="navbar-toggler collapsed" type="button">
              <span className="icon-bar top-bar" />
              <span className="icon-bar middle-bar" />
              <span className="icon-bar bottom-bar" />
            </button>     
            <div className={hamburgerList ? null : "collapse navbar-collapse" } id='okkk'>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home <FaAngleDown /></a>
                    <ul className="dropdown-menu mega-dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="/">Default Home</a>
                        <a className="nav-link" href="#">Creative Agency</a>
                        <a className="nav-link" href="#">IT Agency</a>
                        <a className="nav-link" href="#">Marketing Agency</a>
                        <a className="nav-link" href="#">Portfolio Agency</a>
                        <a className="nav-link" href="#">Studio Agency</a>
                        <a className="nav-link" href="#">Business Agency</a>
                        <a className="nav-link" href="#">Startup Agency</a>
                        <a className="nav-link" href="#">Software Startup 
                        <span className="new">New</span>
                        </a>
                        <a className="nav-link" href="#">Digital Marketing 
                        <span className="new">New</span>
                        </a>
                        <a className="nav-link" href="#">Business Consulting 
                        <span className="new">New</span>
                        </a>
                        <a className="nav-link" href="#">Freelancer Portfolio 
                        <span className="new">New</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Default Home Two</a>
                        <a className="nav-link" href="#">Creative Agency Two</a>
                        <a className="nav-link" href="#">IT Agency Two</a>
                        <a className="nav-link" href="#">Marketing Agency Two</a>
                        <a className="nav-link" href="#">Portfolio Agency Two</a>
                        <a className="nav-link" href="#">Studio Agency Two</a>
                        <a className="nav-link" href="#">Business Agency Two</a>
                        <a className="nav-link" href="#">Startup Agency Two</a>
                        <a className="nav-link" href="#">App Showcase 
                        <span className="new">New</span>
                        </a>
                        <a className="nav-link" href="#">Personal Portfolio 
                        <span className="new">New</span>
                        </a>
                        <a className="nav-link" href="#">SaaS Startup 
                        <span className="new">New</span>
                        </a>
                        <a className="nav-link" href="#">Cyber Security Agency 
                        <span className="new">New</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services <FaAngleDown />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services Style 1</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services Style 2</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services Style 3</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services Style 4</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Service Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio <FaAngleDown /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio Details 2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Pages <FaAngleDown /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Team</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">FAQ</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">404 error</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Coming Soon</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="#">Blog <FaAngleDown /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Blog Grid</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Blog Right Sidebar</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Blog Left Sidebar</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                  </li>
                </ul>
                <div className="others-options">
                  <a className="btn btn-primary" href="#">Get Started</a>
                </div>
              </div>
          </div>
        </nav>
      </div>
      <div className="separate-border" />
    </>
  )
}

export default Navbar