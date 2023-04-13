import React from 'react'
import footerimage from '../../assets/footer-background.png'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import linkdein from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
// import Home from '../Home/Home'
// import About from '../About/About'
// import Service from '../Service/Service'
import Contact from '../Contact/Contact'
import { Route, Link, Routes } from 'react-router-dom'
import './footer.css'
function Footer() {
  return (
    <div>
    <div style={{
        backgroundImage: `url(${footerimage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }} className=''>
        <div className="footer">
        <div className='Fsection-one'>
            <img src={logo} className="footer-logo"/>
            <p className='footer-desc'>Special Security Services Ltd aims to provide all of<br/>
our clients with the option to receive all support
services they require<br/> from one innovative and
effective supplier.</p>
        </div>
        <div className=''>
        <p className='footer-titleOne'>Legal</p>
          <div className="footer-links">
          <div><Link to="/" className='f-links'>Home</Link></div>
        <div><Link to="/about" className='f-links'>About</Link></div>
        <div><Link to="/service" className='f-links'>Service</Link></div>
        <div>  <Link to="/Contact" className='f-links'>Contact</Link></div> 
        </div>
          </div>
        <div className=''>
          <p className='footer-title'>Legal</p>
          <div className="footer-links">
          <div><Link to="/" className='f-links'>Terms of Use</Link></div>
        <div><Link to="/about" className='f-links'>Privacy Policy</Link></div>
        <div><Link to="/service" className='f-links'>Legal Notice</Link></div>
  
        </div>
        <Routes>
    {/* <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/service' element={<Service/>}></Route> */}
    <Route path='/Contact' element={<Contact/>}></Route>
</Routes>
          
        </div>
        <div className=''>
        <p className='footer-titleTwo'>Get in touch</p>
           <p className='footer-txt'>Right protection, Right time.</p>
           <div className='social-medias'>
           <div>
            <img src={facebook}/>
            </div>
            <div>
            <img src={linkdein}/>
              </div>
              <div>
              <img src={twitter}/>
              </div>
           </div>
        
        </div>
       
    </div>
    <div className="bitapps-footer">
      © 2023 | Designed and developed by
       <span className='span'>
        <a href="https://bitappstech.com/" className="bit-link">
           bitappstech
        </a>
      </span>
    </div>
      </div>
     
    </div>
  )
}

export default Footer