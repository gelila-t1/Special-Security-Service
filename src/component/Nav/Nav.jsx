import React from "react";
import "./nav.css";
// import logs from "../../asset/log.png";
// import "./popup.css";
// import Popup from "./Popup";
// import pop from "../../asset/pop.png";
import { Route, Link, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Service from '../Service/Service'
import Contact from '../Contact/Contact'
import logo from '../../assets/logo.png'
import Training from '../Trainings/Training'
import { useState } from "react";
const Nav = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      
        <div className="navv-bar">

        <div class="logos">
        
        <img src={logo} className="ss-logo"/>
     </div>

     <div class="navigations">
          <input type="checkbox" class="toggle-menus" />
          <div class="hamburgers"></div>
          <ul class="menus">
            <li>
              {" "}
              <a href="/">Home</a>
            </li>
            <li>
              {" "}
              <a href="./about">About</a>
            </li>{" "}
            <li>
              {" "}
              <a href="./service">Service</a>
            </li>{" "}
            <li>
              {" "}
              <a href="./Training">Training</a>
            </li>
            <li>
              {" "}
              <a href="./contact">Contact Us</a>
            </li>{" "}
          </ul>
        </div>
        </div>
      
      <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/service' element={<Service/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Training' element={<Training/>}></Route>
</Routes>
    </div>
  );
};

export default Nav;
