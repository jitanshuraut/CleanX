import React from 'react'
import { auth, db, logout } from "./firebase";

function Logout() {

  return (
    <>
  <div>
    <img src="computer_guy.png" alt="" />
    <div className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3" style={{background:"#2124B1"}} onClick={logout}>LogOut</div>
  </div>
    
    </>
  )
}

export default Logout