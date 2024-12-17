import React, { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';


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
            <Link to="/" className="navbar-brand">
              <img src="/images/logo.webp" alt="logo" />
            </Link>
            <button onClick={() => setHamburgerList(!hamburgerList)} 
            className="navbar-toggler collapsed" type="button">
              <span className="icon-bar top-bar" />
              <span className="icon-bar middle-bar" />
              <span className="icon-bar bottom-bar" />
            </button>     
            <div className={hamburgerList ? null : "collapse navbar-collapse" } id='okkk'>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home <FaAngleDown /></Link>
                    <ul className="dropdown-menu mega-dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Default Home</Link>
                        <Link className="nav-link" to="/">Creative Agency</Link>
                        <Link className="nav-link" to="/">IT Agency</Link>
                        <Link className="nav-link" to="/">Marketing Agency</Link>
                        <Link className="nav-link" to="/">Portfolio Agency</Link>
                        <Link className="nav-link" to="/">Studio Agency</Link>
                        <Link className="nav-link" to="/">Business Agency</Link>
                        <Link className="nav-link" to="/">Startup Agency</Link>
                        <Link className="nav-link" to="/">Software Startup 
                        <span className="new">New</span>
                        </Link>
                        <Link to="/" className="nav-link" >Digital Marketing 
                        <span className="new">New</span>
                        </Link>
                        <Link to="/" className="nav-link" >Business Consulting 
                        <span className="new">New</span>
                        </Link>
                        <Link to="/" className="nav-link" >Freelancer Portfolio 
                        <span className="new">New</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Default Home Two</Link>
                        <Link className="nav-link" to="/">Creative Agency Two</Link>
                        <Link className="nav-link" to="/">IT Agency Two</Link>
                        <Link className="nav-link" to="/">Marketing Agency Two</Link>
                        <Link className="nav-link" to="/">Portfolio Agency Two</Link>
                        <Link className="nav-link" to="/">Studio Agency Two</Link>
                        <Link className="nav-link" to="/">Business Agency Two</Link>
                        <Link className="nav-link" to="/">Startup Agency Two</Link>
                        <Link className="nav-link" to="/">App Showcase 
                        <span className="new">New</span>
                        </Link>
                        <Link className="nav-link" to="/">Personal Portfolio 
                        <span className="new">New</span>
                        </Link>
                        <Link className="nav-link" to="/">SaaS Startup 
                        <span className="new">New</span>
                        </Link>
                        <Link className="nav-link" to="/">Cyber Security Agency 
                        <span className="new">New</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Services <FaAngleDown />
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Services Style 1</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Services Style 2</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Services Style 3</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Services Style 4</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Service Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">About us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Portfolio <FaAngleDown /></Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Portfolio</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Portfolio Details</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Portfolio Details 2</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Pages <FaAngleDown /></Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Services</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Services Details</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Portfolio</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Portfolio Details</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Team</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Pricing</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">FAQ</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">404 error</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Coming Soon</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Contact</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/">Blog <FaAngleDown /></Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Blog Grid</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Blog Right Sidebar</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Blog Left Sidebar</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Contact Us</Link>
                  </li>
                </ul>
                <div className="others-options">
                  <Link className="btn btn-primary" to="/">Get Started</Link>
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