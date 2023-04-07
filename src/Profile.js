import React,{useEffect} from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {db,sendPasswordReset} from "./components/firebase"

function Profile() {
  const history = useNavigate();
  useEffect(()=>{
    if(sessionStorage.getItem("flag") == "false"){
      history("/Login")
    }
  },[])
  function sendlink() {
    let eml = prompt("Please enter your email");

    if (eml != null) {
      sendPasswordReset(eml)
    }
    else{
      alert("Please enter vaild things 🥲")
    }
  }
  let pro=localStorage.getItem("profilePic")
  console.log(pro)
  return (
    <>
   
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
                        {/* <button type="button" className="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button> */}
                    </div>
                </nav>


                <section class="vh-100" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" >
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white"
            >
              <img src={String(pro)}
                alt="Avatar" class="img-fluid my-5" style={{"width": "80px"}} />
              <h5>{localStorage.getItem("Name")}</h5>
              
              <i class="far fa-edit mb-5"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Information</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{localStorage.getItem("Email")}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Name</h6>
                    <p class="text-muted">{localStorage.getItem("Name")}</p>
                  </div>
                </div>
                <h6>Credentials</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Forgot PassWord</h6>
                    <div className="btn btn-secondary text-light rounded-pill py-1" style={{background:"#2124B1"}} on onClick={()=>{sendlink()}}>Send Recovery Link</div>
                  </div>
                 
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Profile