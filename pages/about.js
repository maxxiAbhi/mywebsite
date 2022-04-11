import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function about() {
    return (
        <>
            <Navbar />

            <section className="w3l-about-breadcrumb text-center">
                <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
                    <div className="container py-2">
                        <h2 className="title">About Me</h2>
                        <ul className="breadcrumbs-custom-path mt-2">
                            <li><a href="#url">Home</a></li>
                            <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true"></span> About Me </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="w3l-aboutblock1" id="about">
                <div className="midd-w3 py-5">
                    <div className="container py-lg-5 py-md-3">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="position-relative">
                                    <img src="myphoto.png" alt="" className="radius-image img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-8 mt-lg-0 mt-5">
                                <h5 className="title-small mb-2">Hello, I am Web Developer</h5>
                                <h3 className="title-big">Having O3 Years of Experience</h3>
                                <p className="mt-4">I am  Web Developer specializing in frontend and backend development.
                             Experienced with all stages of the development cycle for dynamic web projects. 
                             Well-versed in numerous programming languages including
                              HTML5, JavaScript, CSS, MySQL, React, Nodejs, MongoDb, Java, PHP.
                              I have also experience in Mobile Application Development like Dirt, Java, React Native.
                              </p>
                                <div className="my-info mt-4">
                                    <div className="single-info"><span>Name:</span>
                                        <p>Abhinandan Maity</p>
                                    </div>
                                    <div className="single-info"><span>Age:</span>
                                        <p>25 Years</p>
                                    </div>
                                    <div className="single-info"><span>From:</span>
                                        <p>West Bengal, India</p>
                                    </div>
                                    <div className="single-info"><span>Email:</span>
                                        <p><a href="mailto:max10maityabhinandan@gmail.com">max10maityabhinandan@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="my-social mt-lg-5 mt-4">
                                    <a href="abhinandan.png" download className="btn btn-style btn-primary">Download CV</a>
                                    <ul className="social m-0 p-0">
                                        <li><a href="https://www.facebook.com/abhinandan.maity.526" target="blank"><span className="fa fa-facebook-official"></span></a></li>
                                        <li><a href="https://www.linkedin.com/in/abhinandan-maity-9b65ba120/" target="blank"><span className="fa fa-linkedin-square"></span></a></li>
                                        <li><a href="https://github.com/maxxiAbhi" target="blank"><span className="fa fa-github"></span></a></li>

                                    </ul>
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

export default about