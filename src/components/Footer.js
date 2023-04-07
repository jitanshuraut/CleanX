import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <>
            {/* Footer Start */}
            <div
                className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5 px-lg-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-5">
                            <h5 className="text-white mb-4">Get In Touch</h5>
                            <p>
                                <i className="fa fa-map-marker-alt me-3" />
                                Indian Institute of Information Technology, Surat
                            </p>
                            <p>
                                <i className="fa fa-phone-alt me-3" />
                                +012 345 67890
                            </p>
                            <p>
                                <i className="fa fa-envelope me-3" />
                                info@example.com
                            </p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-youtube" />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h5 className="text-white mb-4">Quick Link</h5>
                            <Link to='/'>
                                <a href="index.html" className=" btn btn-link">Home</a>
                            </Link>
                            <Link to="/AboutUs">
                                <div className=" btn btn-link">About Us</div>
                            </Link>
                            <Link to="/Service">
                                <div className=" btn btn-link">Service</div>
                            </Link>
                            <Link to="/Contact">
                                <div className=" btn btn-link">Contact</div>
                            </Link>
                        </div>

                        {/* <div className="col-md-6 col-lg-3">
                            <h5 className="text-white mb-4">Project Gallery</h5>
                            <div className="row g-2">
                                <div className="col-4">
                                    <img
                                        className="img-fluid"
                                        src="portfolio-1.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid"
                                        src="portfolio-2.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid"
                                        src="portfolio-3.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid"
                                        src="portfolio-4.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid"
                                        src="portfolio-5.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid"
                                        src="portfolio-6.jpg"
                                        alt="Image"
                                    />
                                </div>
                            </div>
                        </div> */}

                        <div className="col-md-6 col-lg-3">
                            <h5 className="text-white mb-4">Our Mission</h5>
                            <p>
                                Making SURAT, a better to reside and attracting visitors towards SURAT for not only its eternal glory of diamonds but also for its cleanliness and freshness.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="container px-lg-5">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                ©{" "}
                                <a className="border-bottom" href="#">
                                    Cleanex
                                </a>
                                , All Right Reserved.
                                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                                Designed By{" "}
                                <a className="border-bottom">
                                    Cleanex
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </>
    )
}
