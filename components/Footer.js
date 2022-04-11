import React from 'react'
import Link from "next/link";

function Footer() {
    return (
        <>
            <section className="w3l-grid-quote text-center py-5">
                <div className="container py-3">
                    <h6 className="title-small">Get in touch</h6>
                    <h3 className="title-big mb-md-5 mb-4">Lets start a Project! Hire Me.</h3>
                    <a href="tel: 7003516997" className="btn btn-style btn-primary mr-2">Call Me </a>
                    <Link href="/contact"><a  className="btn btn-style btn-outline-primary">Get in touch</a></Link>
                </div>
            </section>

            <section className="w3l-footer py-sm-5 py-4">
                <div className="container">
                    <div className="footer-content">
                        <div className="row">
                            <div className="col-lg-8 footer-left">
                                <p className="m-0">Abhinandan © Copyright 2022. Design by <a href="https://www.linkedin.com/in/abhinandan-maity-9b65ba120/">Abhinandan Maity</a></p>
                            </div>
                            <div className="col-lg-4 footer-right text-lg-right text-center mt-lg-0 mt-3">
                                <ul className="social m-0 p-0">
                                    <li><a href="https://www.facebook.com/abhinandan.maity.526" target="blank"><span className="fa fa-facebook-official"></span></a></li>
                                    <li><a href="https://www.linkedin.com/in/abhinandan-maity-9b65ba120/" target="blank"><span className="fa fa-linkedin-square"></span></a></li>
                                    <li><a href="https://github.com/maxxiAbhi" target="blank"><span className="fa fa-github"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer