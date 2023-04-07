import React,{useEffect,useState} from 'react';
import { Link } from "react-router-dom";
// import logo from '././logo.svg';
import logo from './logo.svg';
import { collection, addDoc } from "firebase/firestore"
import { db,logout } from "./firebase"
import Service from './Service';

export default function HomePage() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")
    
    const ref = collection(db, "Query");
    const save = async () => {
        await addDoc(ref, { Name: name, Email: email, Message: message, Suject:subject })
      
      }
    
 
if(!sessionStorage.getItem("flag")){
sessionStorage.setItem("flag","false")
}

    return (
        <>
            <div className="main" >
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="/" className="navbar-brand p-0">
                        {/* <h1 className="m-0"><i className="fa fa-search me-2"></i>SEO<span className="fs-5">Master</span></h1> */}
                        <img src='logo.svg' alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="#" className="nav-item nav-link active">Home</a>
                            <Link to="/AboutUs">
                                <div className="nav-item nav-link">About Us</div>
                            </Link>
                            <Link to="/Service">
                                <div className="nav-item nav-link">Service</div>
                            </Link>
                            {/* <a href="#main2" className="nav-item nav-link">Project</a> */}
                            <Link to="/Contact">
                                <div className="nav-item nav-link">Contact</div>
                            </Link>
                            <Link to="/Profile">
                            <div className="nav-item nav-link">Profile</div>
                        </Link>
                        </div>



                        <Link to="/Login" >
                            <div className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3" style={{background:"#2124B1"}}>Login</div>
                        </Link>
                        <Link to="/" style={{"display":`${sessionStorage.getItem("flag")=="false"?"none":"block"}`}} onClick={()=>{logout()}} >
                            <div className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3" style={{background:"#2124B1"}}>LogOut</div>
                        </Link>
                        {/* <button type="button" className="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button> */}
                    </div>
                </nav>


                <div className="container-fluid py-5 b1g-primary hero-header mb-5" style={{ background: "url(b5g-dot.png),\n        url(b5g-dot.png),\n        url(bg-round.png),\n        url(bg-tree.png),\n        url(bg-bottom-hero.png)", "backgroundPosition": "10px 10px,\n        bottom 190px right 10px,\n        left 55% top -1px,\n        left 45% bottom -1px,\n        center bottom -1px", "backgroundRepeat": "no-repeat" }}>
                    <div className="container my-5 py-5 px-lg-5" >
                        <div className="row g-5" >
                            <div className="col-lg-6 text-center text-lg-start" style={{marginTop:'200px'}}>
                                <h1 className="t1ext-white mb-4 animated zoomIn">Cleanliness is next to Godliness!!</h1>
                                <p className="t1ext-white pb-3 animated zoomIn">Making SURAT, a better to reside and attracting visitors towards SURAT for not only its eternal glory of diamonds but also for its cleanliness and freshness.</p>
                                <Link to='/Map'>
                                <a href="E:/React/Cleanex/cleanex/public/ext.html" target="_blank" className="btn btn-dark py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft" style={{ backgroundColor: "#2124B1" }}>Find Dustbin</a>
                                </Link>
                                <Link to='/Contact'>
                                    <div className="btn btn-outline-dark py-sm-3 px-sm-5 rounded-pill animated slideInRight" >Contact Us</div>
                                </Link>
                            </div>
                            <div className="col-lg-6 text-center text-lg-start" >
                                <img className="img-fluid" src="img/hero.svg" alt=""/>
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
                                        Whenever you find litter in the surroundings near you, Don’t hesitate and in your mobile phones search for dustbins on our site.
                                    </p>
                                    <Link to='/Map' className="btn px-3 mt-auto mx-auto">
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

                {/* Testimonial Start */}
                <div
                    className="container-fluid bg-primary testimonial py-5 my-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ "background": "url(../img/bg-top.png),\n        url(../img/bg-bottom.png)", "backgroundPosition": "left top,\n        right bottom", "backgroundRepeat": "no-repeat" }}
                >
                    <h1 className="text-white text-center" style={{paddingTop:'1rem'}}>Testimonials</h1>
                    <div className="container py-5 px-lg-5">
                        <div className="owl-carousel testimonial-carousel" style={{ "background": "url(../img/bg-top.png),\n        url(../img/bg-bottom.png)", "backgroundPosition": "left top,\n        right bottom", "backgroundRepeat": "no-repeat" }}>
                            <div className="testimonial-item bg-transparent border rounded text-white p-4">
                                <i className="fa fa-quote-left fa-2x mb-3" />
                                <p>
                                    Amazing service, fabulous work done by the company, trustworthy support team, and would highly recommend to each one of you.
                                </p>
                                <div className="d-flex align-items-center">
                                    <img
                                        className="img-fluid flex-shrink-0 rounded-circle"
                                        src="testimonial-1.jpg"
                                        style={{ width: 50, height: 50 }}
                                    />
                                    <div className="ps-3">
                                        <h6 className="text-white mb-1">Disha Joshi</h6>
                                        <small>Manager at Kaspertech</small>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-transparent border rounded text-white p-4" style={{ "background": "url(../img/bg-top.png),\n        url(../img/bg-bottom.png)", "backgroundPosition": "left top,\n        right bottom", "backgroundRepeat": "no-repeat" }}>
                                <i className="fa fa-quote-left fa-2x mb-3" />
                                <p>
                                    Couldn’t think of someone better in the business than CLEANEX, I mean the hardwork they put in is bizarrely impeccable.
                                </p>
                                <div className="d-flex align-items-center">
                                    <img
                                        className="img-fluid flex-shrink-0 rounded-circle"
                                        src="testimonial-2.jpg"
                                        style={{ width: 50, height: 50 }}
                                    />
                                    <div className="ps-3">
                                        <h6 className="text-white mb-1">Nilesh Raythatha</h6>
                                        <small>Nursing Assistant</small>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-transparent border rounded text-white p-4">
                                <i className="fa fa-quote-left fa-2x mb-3" />
                                <p>
                                    They take care even of the little things so well that there’s no scope left for anyone else to improve upon.
                                </p>
                                <div className="d-flex align-items-center">
                                    <img
                                        className="img-fluid flex-shrink-0 rounded-circle"
                                        src="testimonial-3.jpg"
                                        style={{ width: 50, height: 50 }}
                                    />
                                    <div className="ps-3">
                                        <h6 className="text-white mb-1">Jyotsana Patel</h6>
                                        <small>Marketing Coordinator</small>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-transparent border rounded text-white p-4">
                                <i className="fa fa-quote-left fa-2x mb-3" />
                                <p>
                                    Speechless after seeing the persevering staff. Amazing service, fabulous work done by the company, trustworthy support team, and would highly recommend to each one of you.
                                </p>
                                <div className="d-flex align-items-center">
                                    <img
                                        className="img-fluid flex-shrink-0 rounded-circle"
                                        src="testimonial-4.jpg"
                                        style={{ width: 50, height: 50 }}
                                    />
                                    <div className="ps-3">
                                        <h6 className="text-white mb-1">Darshna Gupta</h6>
                                        <small>Teacher</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}

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


                {/* Contact Start */}
                <div className="container-xxl py-5" id='main' >
                    <div className="container px-lg-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div
                                    className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <h6 className="position-relative d-inline text-primary ps-4">
                                        Contact Us
                                    </h6>
                                    <h2 className="mt-2">Contact For Any Query</h2>
                                </div>
                                <div className="wow fadeInUp" data-wow-delay="0.3s">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    value={name}
                                                    onChange={(e)=>{setname(e.target.value)}}
                                                />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    value={email}
                                                    onChange={(e)=>{setemail(e.target.value)}}
                                                />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="Subject"
                                                    value={subject}
                                                    onChange={(e)=>{setsubject(e.target.value)}}
                                                />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: 150 }}
                                                    defaultValue={""}
                                                    value={message}
                                                    onChange={(e)=>{setmessage(e.target.value)}}
                                                />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" onClick={(e)=>{
                                                e.preventDefault()
                                                save()
                                            }} >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact End */}

            </div>

        </>
    )
}
