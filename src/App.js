import HomePage from './components/HomePage.js';
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login.js';
import Register from './components/Register.js';
import Service from './components/Service.js';
import AboutUs from './components/AboutUs.js';
import Contact from './components/Contact.js';
import Map from './components/Map.js';
import Footer from './components/Footer.js';
import Request from './components/Request.js';
import Donate from './components/Donate.js';
import Profile from './Profile.js';
import Logout from './components/Logout.js';

// import MapMap from './components/MapMap.js';



function App() {
  return (
    <>
    {/* <div> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Request" element={<Request />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Logout" element={<Logout/>} />

          <Route path="/Profile" element={<Profile />} />

        </Routes>
        <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
