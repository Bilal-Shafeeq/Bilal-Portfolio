import React from 'react'

const MySkills = () => {
  return (
    <>
      <div className=" pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two" 
          data-aos="fade-in" data-aos-duration={1200} data-aos-delay={100}
          >
            <h2>My Skills</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="pp-skills-box" 
              data-aos="fade-in" data-aos-duration={1200} data-aos-delay={200}
              ><img src="/images/skills-img1.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="pp-skills-box" 
              data-aos="fade-in" data-aos-duration={1200} data-aos-delay={300}
              >
              <img src="/images/skills-img2.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="pp-skills-box" 
              data-aos="fade-in" data-aos-duration={1200} data-aos-delay={400}
              >
              <img src="/images/skills-img3.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="pp-skills-box" 
              data-aos="fade-in" data-aos-duration={1200} data-aos-delay={500}
              ><img src="/images/skills-img4.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separate-border" />
    </>
  )
}

export default MySkills