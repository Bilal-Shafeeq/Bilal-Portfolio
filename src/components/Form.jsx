import React from 'react'

const Form = () => {
  return (
    <>
      <div className="pp-contact-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-img"><img src="/images/contact.webp" alt="Contact" /></div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <div className="contact-title">
                  <h2>Hire Me!</h2>
                  <p>I am available for freelancing work. Please connect with me via phone:
                    <a href="tel:#">+123-4567-890</a>
                    <span style={{ marginRight: "3px", marginLeft: "3px" }}>or email:</span>
                    <a href="#"><span >bilal@chuluMulu.com</span></a></p>
                </div>
                <form>
                  <div className="contact-form-box">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" name="name" placeholder="Name" className="form-control" required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" name="email" placeholder="Email" className="form-control" required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" name="number" placeholder="Phone number" className="form-control" required /></div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" name="subject" placeholder="Subject" className="form-control" required /></div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea name="text" cols={30} rows={6} placeholder="Write your message..." className="form-control" required defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-12">
                        <button type="submit" className="btn btn-primary">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form