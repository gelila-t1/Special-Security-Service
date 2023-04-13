import React from 'react'
import './contact.css'
import Footer from '../Footer/Footer'
import { Form } from 'react-bootstrap'
import contactImg from '../../assets/contactus-image.png'
import sendMessage from '../../assets/sendmessage.png'
import request from '../../assets/request.png'
import phone from '../../assets/ci_phone.png'
import ball from '../../assets/ball.png'
import Button from 'react-bootstrap/Button'
function Contact() {
  return (
    <div>
        <div className="contact-us">
           <div className="form-section">
           <div className="contact">Contact us</div>
            <div className="contact-text">Prefer to speak to someone in person?</div>
            <div className="contact-desc">We are open from 9am to 5pm, Monday to Friday</div>
            <div className='contact-call'>
               <div>
               <a href='tel:+251 978 78 7899'><img src={request} className="request"/></a>
               </div>
              <div className="call-us">
               <div>
               <a href='tel:+251 978 78 7899'><img src={phone} className="phone"/></a>
               </div>
               <div>
                  <p className="contact-days">call 24HR/7Days</p>
                  {/* <p className="contact-num">+251 978 78 7899</p> */}
                  <a href='tel:+251 978 78 7899'className='contact-num'>+251 929 11 1185</a>
               </div>
               </div>
            </div>
            <Form>
            <div className="Name">
               <div >
                  <p className="contact-name">First Name</p>
                  <p className="enter">Please Enter *</p>
                  <input type={Text} placeholder="First Name" className="nameInput" required/>
               </div>
               <div >
               <p className="contact-name">Last Name</p>
                  <p className="enter">Please Enter *</p>
                  <input type={Text} placeholder="Last Name" className="nameInput" required/>
               </div>
            </div>
            <div >
            <p className="contact-name">Email</p>
                  <p className="enter">Please Enter *</p>
                  <input type={Text} placeholder="Email Address" className="emailInput" required/>
            </div>
            <div >
            <p className="contact-name">Message</p>
                  <p className="enter">Please Enter *</p>
                  <input type={Text} placeholder="Message" className="messageInput" required/>
            </div>
           
            <button type={Button} className="btn-send"> <img src={sendMessage} className="request"/></button>
           </Form>
           </div>
{/* 
           <div className="image-section" >
            <img src={contactImg} className="contactImage"/>
           </div> */}
           <div className="image-section" style={{
              backgroundImage: `url(${contactImg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '100%',
           }}>
            <div className='wrap-address'>
            <p className='address'> <a href="https://www.google.com/maps/place/8%C2%B059'10.9%22N+38%C2%B045'38.1%22E/@8.986365,38.760572,16z/data=!4m13!1m7!3m6!1s0x0:0x2b66b98e3c52395c!2zOMKwNTknMTAuOSJOIDM4wrA0NSczOC4xIkU!3b1!8m2!3d8.986365!4d38.760572!3m4!1s0x0:0x2b66b98e3c52395c!8m2!3d8.986365!4d38.760572" className="ad">
            <img src={ball} className="ball"/>Address</a></p>
             <p className='ad-text'>45F6+CMX, Old Parham Rd, St John's, Antigua & Barbuda</p>
             <p className='ad-text'>VIC Addis Ababa</p>
            </div>
          <div className="contact-info">
           <div>
           <a href='tel:+251 978 78 7899' className='phone-no'>+251 978 78 7899</a>
           </div>
           <div>
           <a href='tel:+251 978 78 7899'className='phone-no'>+251 929 11 1185</a>
           
           </div>
           <div>
           www.sss-securityservice.com
           </div>
          </div>
           </div>
           
        </div>
        <Footer/>
    </div>
  )
}

export default Contact