import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore"
import { db,logout } from "./firebase"
import { useNavigate } from "react-router-dom";

export default function Map() {
    const [userAddress, setUserAddress] = useState(0);
    const q = query(collection(db, "Dustbin"));
    const [file, setfile] = useState([])
    const history = useNavigate();
   
    const [dist, setdist] = useState([])
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            // use the latitude and longitude to get the user's address
            console.log(latitude, longitude)
            localStorage.setItem("lon", longitude)
            localStorage.setItem('lal', latitude)

            const getuser = async () => {
                const data = await getDocs(q);
                setfile(data.docs.map((doc) =>
                    ({ ...doc.data(), id: doc.id })
                ))
                  for (let index = 0; index < file.length; index++) {
                    let d = getDistanceFromLatLonInKm(latitude, longitude, Number(file[index].lan), Number(file[index].lon))
                     setdist( d)

                    console.log(dist)


                }
            }
            getuser()

        });
    }, []);

    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        lon1 =  lon1 * Math.PI / 180;
        lon2 = lon2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;
   
        // Haversine formula
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a = Math.pow(Math.sin(dlat / 2), 2)
                 + Math.cos(lat1) * Math.cos(lat2)
                 * Math.pow(Math.sin(dlon / 2),2);
               
        let c = 2 * Math.asin(Math.sqrt(a));
   
        // Radius of earth in kilometers. Use 3956
        // for miles
        let r = 6371;
   
        // calculate the result
        return Math.ceil((c * r));
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }


    console.log(file)
    console.log(dist)

    function url(la1,lo1,la2,lo2) {
        return `https://www.google.com/maps/dir/${la1},${lo1}/${la2},${lo2}/@${la2},${lo2},12z/data=!3m1!4b1`
    }




    return (
        <>{
            sessionStorage.getItem("flag") == "false" ? history("/Login") :
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

                    <div className="container-xxl py-5" id='main' >
                        <div className="container px-lg-5 py-5">
                            <iframe
                                className="py-5"
                                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2342.226660798629!2d72.9483218242741!3d21.269377095767624!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680732201313!5m2!1sen!2si"
                                width={1200}
                                height={550}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            {
                            
                           
                          
                                file.map((ele) => {

                                    return (
                                        <div class="card" style={{"width": "18rem"}}>
                                        <div class="card-body">
                                          <h5 class="card-title">Dustbin </h5>
                                          <h6 class="card-subtitle mb-2 text-muted">Id:{ele.id}</h6>
                                          <p class="card-text">Latitude: {ele.lan}</p>
                                          <p class="card-text">Longitude: {ele.lon}</p>
                                          <p class="card-text">Distance: {getDistanceFromLatLonInKm(ele.lon,ele.lan,localStorage.getItem("lon"),localStorage.getItem("lal"))} Km</p>


                                       
                                          <a href={url(ele.lan,ele.lon,localStorage.getItem("lal"),localStorage.getItem("lon"))} target='_blank' class="card-link">Direction</a>
                                        </div>
                                      </div>
                                    )
                                })
                            }

                        </div>
                        
                    </div>
                </>
        }
        </>
    )
}
