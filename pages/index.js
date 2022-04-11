import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Navbar />

            <section id="home" className="w3l-banner py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-12 mt-lg-0 mt-4">
                            <span className="title-small">Hello</span>
                            <h1 className="mb-2 title"><span>I am </span>Abhinandan </h1>
                            <h1 className="mb-4 title"> a <span className="typed-text">Web Developer</span><span className="cursor"> </span></h1>
                            <p>I am  Web Developer specializing in frontend and backend development.
                             Experienced with all stages of the development cycle for dynamic web projects. </p>
                            <div className="mt-sm-5 mt-4">
                                <a className="btn btn-primary btn-style mr-2" href="tel: 7003516997"> Hire Me </a>
                                <a className="btn btn-outline-primary btn-style mr-2" href="abhinandan.png" download> Portfolio </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-10 mt-lg-0 mt-4">
                            <div className="img-effect text-lg-center">
                                <img src="photo.png" alt="myphoto" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="w3l-index3" id="about">
                <div className="midd-w3 py-5">
                    <div className="container py-lg-5 py-md-3">
                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right" data-aos-easing="ease-in-sine">
                                <div className="position-relative">
                                    <img src="myphoto.png" alt="aboutphoto" className="radius-image img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-8 mt-lg-0 mt-5" data-aos="fade-left" data-aos-duration="10000" data-aos-easing="ease-in-sine">
                                <h5 className="title-small mb-2">Who am i?</h5>
                                <h3 className="title-big">I am Abhinandan Maity, a visual UI/UX Designer and Web Developer</h3>
                                <p className="mt-4">I am  Web Developer specializing in frontend and backend development.
                             Experienced with all stages of the development cycle for dynamic web projects. 
                             Well-versed in numerous programming languages including
                              HTML5, JavaScript, CSS, MySQL, React, Nodejs, MongoDb, Java, PHP. 
                              </p>
                                <a className="btn btn-style btn-primary mt-lg-5 mt-4 mya-btn" href="abhinandan.png" download>Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="w3l-services">
                <div className="blog py-5" id="services">
                    <div className="container py-lg-5">
                        <h5 className="title-small text-center">Services</h5>
                        <h3 className="title-big text-center mb-sm-5 mb-4">What I do for you</h3>
                        <div className="row">
                            <div className="col-md-12 mx-auto pr-2">


                                <div className="item" data-aos="fade-up" data-aos-duration="2000" >
                                    <div className="card">
                                        <div className="box-wrap">
                                            <div className="icon">
                                                <span className="fa fa-pencil-square-o"></span>
                                            </div>
                                            <h4 className="number">01</h4>
                                            <h4><a>UI/UX Design</a></h4>
                                            <p>UI design and UX design are two of the most often confused and conflated terms in web and app design. And understandably so.</p>
                                            <a href="https://uxplanet.org/what-is-ui-vs-ux-design-and-the-difference-d9113f6612de"  target="blank" className="read">Read more</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="item" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="card">
                                        <div className="box-wrap">
                                            <div className="icon">
                                                <span className="fa fa-laptop"></span>
                                            </div>
                                            <h4 className="number">02</h4>
                                            <h4><a href="#url">Web Development</a></h4>
                                            <p>Web development refers in general to the tasks associated with developing websites for hosting via intranet or internet. The web development process includes web design.</p>
                                            <a href="https://www.techopedia.com/definition/23889/web-development" target="blank" className="read">Read more</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="item" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="card">
                                        <div className="box-wrap">
                                            <div className="icon">
                                                <span className="fa fa-mobile"></span>
                                            </div>
                                            <h4 className="number">03</h4>
                                            <h4><a href="#url">Mobile Application Development</a></h4>
                                            <p>Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.</p>
                                            <a href="https://aws.amazon.com/mobile/mobile-application-development/" target="blank" className="read">Read more</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />


        </>
    )
}
