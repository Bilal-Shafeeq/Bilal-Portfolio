import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <div>
            <div className="personal-portfolio-banner-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="personal-portfolio-banner-content">
                                <span className="sub-title"
                                    data-aos="fade-in" data-aos-duration={1200} data-aos-delay={100}
                                >Hello I'm</span>
                                <h1
                                    data-aos="fade-in" data-aos-duration={1200} data-aos-delay={200}
                                >Bilal shafeeQ</h1>
                                <h4
                                    data-aos="fade-in" data-aos-duration={1200} data-aos-delay={300}
                                >MERN Stack Developer</h4>
                                <p
                                    data-aos="fade-in" data-aos-duration={1200} data-aos-delay={400}
                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <Link to="/" className="default-btn-two btnClickEffect" style={{}}>
                                    Connect With Me
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="personal-portfolio-banner-image"
                                data-aos="fade-up" data-aos-duration={1200} data-aos-delay={600}
                            >
                                <img src="/images/banner-profile.webp" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pp-shape1">
                    <img src="/images/shape1.webp" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection