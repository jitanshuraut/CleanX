import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
    return (
        <>
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href='/' className="navbar-brand p-0">
                        <img src="logo3.svg" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link to="/">
                                <div className="nav-item nav-link" style={{ color: "white" }}>Home</div>
                            </Link>
                            <Link to="/AboutUs">
                                <div className="nav-item nav-link" style={{ color: "white" }}>About Us</div>
                            </Link>
                            <Link to="/Service">
                                <div className="nav-item nav-link active" style={{ color: "white" }}>Service</div>
                            </Link>
                            <Link to="/Contact">
                                <div className="nav-item nav-link" style={{ color: "white" }}>Contact</div>
                            </Link>
                            <Link to="/Profile" >
                            <div className="nav-item nav-link" style={{ color: "white" }}>Profile</div>
                        </Link>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid py-5 bg-primary hero-header mb-5">
                    <div className="container my-5 py-5 px-lg-5">
                        <div className="row g-5 py-5">
                            <div className="col-12 text-center">
                                <h1 className="text-white animated zoomIn">Our Services</h1>
                                <hr className="bg-white mx-auto mt-0" style={{ width: '200px' }} />
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                        <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Start */}
            <div className="container-fluid py-5" id='main3' >
                <div className="container px-lg-5">
                    <div
                        className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <h6 className="position-relative d-inline text-primary ps-4">
                            Our Services
                        </h6>
                        <h2 className="mt-2">What Solutions We Provide</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded" >
                                <div className="service-icon flex-shrink-0" style={{ "margin": "0 auto 20px auto", "width": "90px", "height": "90px", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "var(--light)", "background": "url(icon-shape-primary.png) center center no-repeat", "transition": ".5s" }}>
                                    <i className="bi bi-search fa-2x" />
                                </div>
                                <h5 className="mb-3">Find Dustbin</h5>
                                <p>
                                    Whenever you find litter in the surroundings near you, Don't hesitate and in your mobile phones search for dustbins on our site.
                                </p>
                                <Link className="btn px-3 mt-auto mx-auto" to="/Map">
                                    Read More
                               </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                <div className="service-icon flex-shrink-0" style={{ "margin": "0 auto 20px auto", "width": "90px", "height": "90px", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "var(--light)", "background": "url(icon-shape-primary.png) center center no-repeat", "transition": ".5s" }}>
                                    <i className="fa fa-trash fa-2x" />
                                </div>

                                <h5 className="mb-3">Request to clean Area</h5>
                                <p>
                                    As soon as you discover the place on the map, contact us to the earliest.
                                </p>
                                <Link className="btn px-3 mt-auto mx-auto" to="/Request">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                <div className="service-icon flex-shrink-0" style={{ "margin": "0 auto 20px auto", "width": "90px", "height": "90px", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "var(--light)", "background": "url(icon-shape-primary.png) center center no-repeat", "transition": ".5s" }}>
                                    <i className="fas fa-hand-holding-usd fa-2x" />
                                </div>
                                <h5 className="mb-3">Donate Dustbin</h5>
                                <p>
                                    Donate for a better cause because kindness never goes in vain, and it comes back to you in tenfold.
                                </p>
                                <Link className="btn px-3 mt-auto mx-auto" to="/Donate">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}

        </>
    )
}
