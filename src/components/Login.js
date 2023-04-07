import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export default function Login() {

const [user, setuser] = useState("")
let navigate = useNavigate();
const [password, setpassword] = useState("")

function handleSubmit_login() {
    logInWithEmailAndPassword(user, password)
}
      
    
    return (
        <div>
            <main id="main">
                <div className="top_logo">
                    <a href="../index.html">
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
                                            <div className="label">Username</div>
                                            <span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <path d="M7.99942 9.59725C10.205 9.59725 11.993 7.45168 11.993 4.80497C11.993 2.15827 10.205 0.0126953 7.99942 0.0126953C5.79384 0.0126953 4.00586 2.15827 4.00586 4.80497C4.00586 7.45168 5.79384 9.59725 7.99942 9.59725Z" fill="#A1A1A5" />
                                                <path d="M15.8272 13.6708C15.1083 12.2331 13.7505 11.035 11.9933 10.3162C11.5141 10.1565 10.955 10.1565 10.5557 10.3961C9.75695 10.8753 8.95824 11.1149 7.99978 11.1149C7.04133 11.1149 6.24262 10.8753 5.4439 10.3961C5.04455 10.2363 4.48545 10.1565 4.00622 10.3961C2.24905 11.1149 0.891237 12.313 0.172396 13.7507C-0.386703 14.789 0.491881 15.9871 1.68995 15.9871H14.3096C15.5077 15.9871 16.3863 14.789 15.8272 13.6708Z" fill="#A1A1A5" />
                                            </svg></span>
                                            <input type="text" aria-label="Username" value={user} className="form-control" onChange={(e)=>{setuser(e.target.value)}}  />
                                        </div>
                                        <div className="input-group">
                                            <div className="label">Password</div>
                                            <span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width={10} height={15} viewBox="0 0 10 15" fill="none">
                                                <path d="M1.40625 14.2896H8.37891C9.32373 14.2896 9.78516 13.8208 9.78516 12.7954V7.41943C9.78516 6.49658 9.4043 6.02051 8.62061 5.93994V4.09424C8.62061 1.33301 6.81152 0 4.89258 0C2.97363 0 1.16455 1.33301 1.16455 4.09424V5.97656C0.446777 6.08643 0 6.55518 0 7.41943V12.7954C0 13.8208 0.461426 14.2896 1.40625 14.2896ZM2.34375 3.94043C2.34375 2.10205 3.52295 1.12793 4.89258 1.12793C6.26221 1.12793 7.44141 2.10205 7.44141 3.94043V5.93262L2.34375 5.93994V3.94043Z" fill="#A1A1A5" />
                                            </svg></span>
                                            <input type="password" aria-label="password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Remember me
                                            </label>
                                            <Link to="/Register">
                                                <div   className="lost_pass">New User?</div>
                                    </Link>
                                </div>
                                <button  className="btn btn-primary my-2 " id='btn55' onClick={(e)=>{
                                    e.preventDefault()
                                    handleSubmit_login()}}>Login</button>
                                     <button  className="btn btn-primary my-2 " id='btn55' onClick={(e)=>{
                                    e.preventDefault()
                                    signInWithGoogle()
                                    }}>Login With Google</button>
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
