import React, { useState, useEffect } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "./firebase";

export default function Register() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Conpass, setConpass] = useState("")
    const [name, setname] = useState("")
    const history = useNavigate();


    function reg() {
        if (!Email && Password!==Conpass) { 
            alert("Please enter Vaild Things 🥲"); 
        }
        else{
            registerWithEmailAndPassword(name,Email, Password);
           

        }
        

    }

    function reggoogle() {
signInWithGoogle()
history("/Map")
    }

    return (
        <div>
            <main id="main">
                <div className="top_logo">
                    <a href="/">
                        <img src='Logo.svg' alt="Logo" />
                    </a>
                </div>
                <section id="login_form" >
                    <div className="container">
                        <div className="row vh-100 d-flex align-items-center">
                            <div className="col-md-6">
                                <div className="form_wrapper">
                                    <div className="form_heading text-center">
                                        <h2>Hey, Welcome Back!</h2>
                                        <p>Log in if you alredy have an account</p>
                                    </div>
                                    <form className='d-flex align-item-center flex-column'>

                                    <div className="input-group">
                                            <div className="label">Name</div>
                                            <span className="input-group-text"><svg fill="#A1A1A5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg></span>
                                            <input type="text" aria-label="Username" value={name} className="form-control" onChange={(e)=>{setname(e.target.value)}}/>
                                        </div>
                                        <div className="input-group">
                                            <div className="label">Email</div>
                                            <span className="input-group-text"><svg fill="#A1A1A5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg></span>
                                            <input type="email" aria-label="Username" value={Email} className="form-control"  onChange={(e)=>{setEmail(e.target.value)}}  />
                                        </div>

                                        <div className="input-group">
                                            <div className="label">Password</div>
                                            <span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width={10} height={15} viewBox="0 0 10 15" fill="none">
                                                <path d="M1.40625 14.2896H8.37891C9.32373 14.2896 9.78516 13.8208 9.78516 12.7954V7.41943C9.78516 6.49658 9.4043 6.02051 8.62061 5.93994V4.09424C8.62061 1.33301 6.81152 0 4.89258 0C2.97363 0 1.16455 1.33301 1.16455 4.09424V5.97656C0.446777 6.08643 0 6.55518 0 7.41943V12.7954C0 13.8208 0.461426 14.2896 1.40625 14.2896ZM2.34375 3.94043C2.34375 2.10205 3.52295 1.12793 4.89258 1.12793C6.26221 1.12793 7.44141 2.10205 7.44141 3.94043V5.93262L2.34375 5.93994V3.94043Z" fill="#A1A1A5" />
                                            </svg></span>
                                            <input type="password" aria-label="password" value={Password}  className="form-control"  onChange={(e)=>{setPassword(e.target.value)}}  />
                                        </div>


                                        <div className="input-group">
                                            <div className="label"> Confirm Password</div>
                                            <span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width={10} height={15} viewBox="0 0 10 15" fill="none">
                                                <path d="M1.40625 14.2896H8.37891C9.32373 14.2896 9.78516 13.8208 9.78516 12.7954V7.41943C9.78516 6.49658 9.4043 6.02051 8.62061 5.93994V4.09424C8.62061 1.33301 6.81152 0 4.89258 0C2.97363 0 1.16455 1.33301 1.16455 4.09424V5.97656C0.446777 6.08643 0 6.55518 0 7.41943V12.7954C0 13.8208 0.461426 14.2896 1.40625 14.2896ZM2.34375 3.94043C2.34375 2.10205 3.52295 1.12793 4.89258 1.12793C6.26221 1.12793 7.44141 2.10205 7.44141 3.94043V5.93262L2.34375 5.93994V3.94043Z" fill="#A1A1A5" />
                                            </svg></span>
                                            <input type="password" aria-label="password"  value={Conpass} className="form-control"   onChange={(e)=>{setConpass(e.target.value)}}/>
                                        </div>
                                        {/* <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Remember me
                                            </label>
                                            {/* <Link to="/Register">
                                                <div   className="lost_pass">New User?</div>
                                    </Link> */}
                                        {/* </div> */}
                                        <button className="btn btn-primary my-2 " onClick={(e) => { e.preventDefault()
                                             reg() }} id='btn55'>Register</button>
                                        <button className="btn btn-primary " onClick={() => { reggoogle() }} id='btn55'>Continue With Google</button>
                                        
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="bg_img">
                                    <img src="Computer_guy.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </main >
        </div >
    )
}
