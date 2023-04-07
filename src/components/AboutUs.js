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
                                <div className="nav-item nav-link active" style={{ color: "white" }}>About Us</div>
                            </Link>
                            <Link to="/Service">
                                <div className="nav-item nav-link" style={{ color: "white" }}>Service</div>
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
                                <h1 className="text-white animated zoomIn">About Us</h1>
                                <hr className="bg-white mx-auto mt-0" style={{ width: '200px' }} />
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                        <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container px-lg-5">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="section-title position-relative mb-4 pb-2">
                                <h6 className="position-relative text-primary ps-4">About Us</h6>
                                <h2 className="mt-2">
                                    Dustbins aid in our objective to
                                    make Surat litter free and green.
                                </h2>
                            </div>
                            <p className="mb-4">
                                We've been able to achieve numerous accolades for successfully initiating a couple of cleanliness drives and making Surat stand out from the crowd. We are working under Swacch Bharat objective and honourable Chief Minister has acknowledged and felicitated us couple of times.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <h6 className="mb-3">
                                        <i className="fa fa-check text-primary me-2" />
                                        Award Winning
                                    </h6>
                                    <h6 className="mb-0">
                                        <i className="fa fa-check text-primary me-2" />
                                        Professional Staff
                                    </h6>
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="mb-3">
                                        <i className="fa fa-check text-primary me-2" />
                                        24/7 Support
                                    </h6>
                                    <h6 className="mb-0">
                                        <i className="fa fa-check text-primary me-2" />
                                        Good Service
                                    </h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-4">
                                <Link to='/AboutUs'>
                                    <div className="btn btn-primary rounded-pill px-4 me-3" >
                                        Read More
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img
                                className="img-fluid wow zoomIn"
                                data-wow-delay="0.5s"
                                src="img/aboutUs.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Start */}
            <div
                className="container-fluid bg-primary newsletter my-5 wow fadeInUp"
                data-wow-delay="0.1s"
            >
                <div className="container px-lg-5">
                    <div className="row align-items-center" style={{ height: 250 }}>
                        <div className="col-12 col-md-6">
                            <h3 className="text-white">Our Mission</h3>
                            <small className="text-white">
                                Making SURAT, a better to reside and attracting visitors towards SURAT for not only its eternal glory of diamonds but also for its cleanliness and freshness.
                            </small>
                        </div>
                        <div className="col-md-6 text-center mb-n5 d-none d-md-block">
                            <img
                                className="img-fluid mt-5"
                                style={{ height: 250 }}
                                src="newsletter.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Newsletter End */}

            {/* Team Start */}
            <div className="container-fluid py-5">
                <div className="container px-lg-5">
                    <div
                        className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <h6 className="position-relative d-inline text-primary ps-4">
                            Our Team
                        </h6>
                        <h2 className="mt-2">Meet Our Team Members</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="d-flex">
                                    <div
                                        className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                                        style={{ width: 75 }}
                                    >
                                        <a
                                            className="btn btn-square text-primary bg-white my-1"
                                            href=""
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-square text-primary bg-white my-1"
                                            href=""
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-square text-primary bg-white my-1"
                                            href=""
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a
                                            className="btn btn-square text-primary bg-white my-1"
                                            href=""
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                    <img
                                        className="img-fluid rounded w-100"
                                        src="team-1.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="px-4 py-3">
                                    <h5 className="fw-bold m-0">Jignesh Patel</h5>
                                    <small>Dustbin Allocater</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="d-flex">
                                    <div
                                        className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                                        style={{ width: 75 }}
                                    >
                                        <a
                                            className="btn btn-square text-primary bg-white my-1"
                                            href=""
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-square text-primary bg-white my-1"
                                            href=""
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-square text-primary bg-white my-1"
                                            href=""
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a
                                            className="btn btn-square text-primary bg-white my-1"
                                            href=""
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                    <img
                                        className="img-fluid rounded w-100"
                                        src="team-2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="px-4 py-3">
                                    <h5 className="fw-bold m-0">Rakshita Limachiya</h5>
                                    <small>Waste Manager</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="team-item">
                                <div className="d-flex">
                                    <div
                                        className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                                        style={{ width: 75 }}
                                    >
                                        <a
                                            className="btn btn-square text-primary bg-white my-1"
                                            href=""
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-square text-primary bg-white my-1"
                                            href=""
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-square text-primary bg-white my-1"
                                            href=""
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a
                                            className="btn btn-square text-primary bg-white my-1"
                                            href=""
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                    <img
                                        className="img-fluid rounded w-100"
                                        src="team-3.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="px-4 py-3">
                                    <h5 className="fw-bold m-0">Hitesh Kumar</h5>
                                    <small>Environment Engineer</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}

        </>
    )
}
