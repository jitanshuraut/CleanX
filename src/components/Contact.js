import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore"
import { db } from "./firebase"

export default function Contact() {

const [name, setname] = useState("")
const [email, setemail] = useState("")
const [subject, setsubject] = useState("")
const [message, setmessage] = useState("")

const ref = collection(db, "Query");
const save = async () => {
    await addDoc(ref, { Name: name, Email: email, Message: message, Suject:subject })
  
  }


    return (
        <>
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href='/' className="navbar-brand p-0">
                        <img src="logo3.svg" alt="Logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                        <Link to="/">
                                <div className="nav-item nav-link" style={{color: "white"}}>Home</div>
                            </Link>
                            <Link to="/AboutUs">
                                <div className="nav-item nav-link" style={{color: "white"}}>About Us</div>
                            </Link>
                            <Link to="/Service">
                                <div className="nav-item nav-link" style={{color: "white"}}>Service</div>
                            </Link>
                            <Link to="/Contact">
                                <div className="nav-item nav-link active" style={{color: "white"}}>Contact</div>
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
                                <h1 className="text-white animated zoomIn">Contact Us</h1>
                                <hr className="bg-white mx-auto mt-0" style={{ width: '200px' }} />
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                        <li className="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

        </>
    )
}
