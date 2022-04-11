import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
function contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zlmpw86', 'template_zsk7kip', e.target, 'knAekY03js0BW4c_J')
      .then((result) => {
        toast.success('Mail Send')
      }, (error) => {
        toast.error(error.text) 
      });
  };


  return (
    <>
      <Navbar />

      <section className="w3l-about-breadcrumb text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
          <div className="container py-2">
            <h2 className="title">Contact Me</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li><a href="#url">Home</a></li>
              <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true"></span> Contact </li>
            </ul>
          </div>
        </div>
      </section>


      <section className="w3l-contact-1 py-5">
        <div className="contacts-9 py-lg-5 py-md-4">
          <div className="container">
            <div className="d-grid contact-view">
              <div className="cont-details">
                <div className="cont-top">
                  <div className="cont-left text-center">
                    <span className="fa fa-phone text-primary"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Call Me</h6>
                    <p><a href="tel:7003516997">7003516997</a></p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-envelope-o text-primary"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Email Me</h6>
                    <p><a href="mailto:max10maityabhinandan@gmail.com" className="mail">max10maityabhinandan@gmail.com</a></p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-map-marker text-primary"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Location</h6>
                    <p>Santragachi, Jagacha GIP Colony howrah, pin:711112 </p>
                  </div>
                </div>
              </div>
              <div className="map-content-9">
                <form action="https://sendmail.w3layouts.com/submitForm" method="post" onSubmit={sendEmail} >
                  <div className="twice-two">
                    <input type="text" className="form-control" name="name" id="w3lName" placeholder="Name" 
                      required="" />
                    <input type="email" className="form-control" name="email" id="w3lSender" placeholder="Email"
                      required="" />
                  </div>
                  <div className="twice">
                    <input type="text" className="form-control" name="subject" id="w3lSubject"
                      placeholder="Subject" required="" />
                  </div>
                  <textarea name="message" className="form-control" id="w3lMessage" placeholder="Message"
                    required=""></textarea>
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary btn-style mt-4">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>

  )
}

export default contact