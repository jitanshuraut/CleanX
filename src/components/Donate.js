import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"
import { db } from "./firebase"


export default function Request() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [location, setlocation] = useState("")
    const ref = collection(db, "Donate");
    const save = async () => {
        await addDoc(ref, { name: name, email: email, location: location, phonenumber: phone })
alert("Your Request is successfully registered 😀")

    }
    const history = useNavigate();
    useEffect(()=>{
        if(sessionStorage.getItem("flag") == "false"){
          history("/Login")
        }
      },[])
    return (
        <>
       
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="/ " className="navbar-brand p-0">
                    {/* <h1 className="m-0"><i className="fa fa-search me-2"></i>SEO<span className="fs-5">Master</span></h1> */}
                    <img src='logo.svg' alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/">
                            <div className="nav-item nav-link">Home</div>
                        </Link>
                        <Link to="/AboutUs">
                            <div className="nav-item nav-link">About Us</div>
                        </Link>
                        <Link to="/Service">
                            <div className="nav-item nav-link">Service</div>
                        </Link>
                        <Link to="/Contact">
                            <div className="nav-item nav-link">Contact</div>
                        </Link>
                        <Link to="/Profile" >
                            <div className="nav-item nav-link" style={{ color: "white" }}>Profile</div>
                        </Link>
                    </div>

                    <Link to="/Login" >
                        <div className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">Login</div>
                    </Link>
                    {/* <button type="button" className="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button> */}
                </div>
            </nav>

            {/* Contact Start */}
            <div className="container-xxl py-5" id='main' >
                <div className="container px-lg-5 py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-7">
                            <div
                                className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <h6 className="position-relative d-inline text-primary ps-4">
                                    Request to Clean Area
                                </h6>
                                <h2 className="mt-2">Fill the form and we will help you </h2>
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
                                                    onChange={(e) => { setname(e.target.value) }}
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
                                                    onChange={(e) => { setemail(e.target.value) }}
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
                                                    value={location}
                                                    onChange={(e) => { setlocation(e.target.value) }}
                                                />
                                                <label htmlFor="subject">Location</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="Subject"
                                                    value={phone}
                                                    onChange={(e) => { setphone(e.target.value) }}
                                                />
                                                <label htmlFor="subject">PhoneNumber</label>
                                            </div>
                                        </div>
                                        
                                      
                                        <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3"  type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => {
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
