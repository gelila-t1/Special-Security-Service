import React from 'react'
import line from '../../assets/line.png'
import imageOne from '../../assets/home-imageOne.png'
import imageTwo from '../../assets/home-imageTwo.png'
import imageThree from '../../assets/home-imageThree.png'
import offerOne from '../../assets/offerOne.png'
import request from '../../assets/request.png'
import readmore from '../../assets/readmore.png'
import arrow from '../../assets/arrow.png'
import './home.css'
import { Route, Link, Routes } from 'react-router-dom'
import Service from '../Service/Service'
import Footer from '../Footer/Footer' 
import { Form } from 'react-bootstrap'
import ControlledCarousel from '../Carousel/Carousel'
import Button from 'react-bootstrap/Button'
import aboutus from '../../assets/aboutus.png'
import icontwo from '../../assets/icontwo.png'
import iconthree from '../../assets/iconthree.png'
import iconfour from '../../assets/iconfour.png'
import Testimonial from './Testimonial'
function Home() {
  return (
    <div className='home-page'>
     
        <div className='home'    style={{
        backgroundImage: `url(${imageOne})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
           <div className='home-section'>
           <h2 className='home-title'>Special Security <br/>
            Services</h2>
            <h4 className='secured'>You are Secured Anywhere</h4>
    <p className='home-text'>
Our goal for our clients is to provide consistence first
class quality<br/> services that you can rely on
consistency.</p>
            </div> 
        <div>
            <Form className='form'>
                <h3 className='request-guard'>Request Guard</h3>
                <div><input type={Text} placeholder="Full Name" className='inputs' required/></div>
                <div><input type={Number} placeholder="Phone Number" className='inputs' required/></div>
                <div><input type={Text} placeholder="From" className='inputs'required/></div>
                <div><input type={Number} placeholder="Number of Guards"className='inputs' required/></div>
                {/* <img src={request} className="request"/> */}
                <button type={Button} className="btn-request"><img src={request} className="form-request"/></button>
            </Form>
        </div>
        </div>
        <div className='special'>
          <img src={line} className="line"/>
            <div className='title'>ABOUT US</div>
            <h4 className='aboutus-title'>Special Security<br/> 
              Services
              </h4>
              <p className='aboutus-text'>special Security Service is founded in Ethiopia in
early 2022. We have quality trained employees
whom have years of extensive knowledge in
military expertise in the VIP security industry.
Through the provision of unrivalled quality VIP
security services to businesses operating in the
public and private sectors, we has achieved
much success through building on its policy of
integrity, credibility</p>
     <a href="./about"> <img src={aboutus} className="abt-button"/></a>
        </div>

        <div className='wrapServices'    style={{
         backgroundImage: `url(${imageTwo})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
      }}>
        <div className='FlexOne'>
            <div className='our-offers'>
             OUR OFFERS  <img src={line} className="line-offers"/>
            </div>
            <div className='professional'>
            Professional 
            <br/>Services 
            </div><br/><br/>
            <div className='services-text'>
            We promote training and development and
emphasizes the value of active customer service as
a vital tool to both gain competitive advantage and
exceed client expectations.
To achieve this mission we must embrace the
following values and work ethics within our
organization.
Strive for quality and excellence in everything that
we do
Foster a “we can do” culture by working with
commitment and enthusiasm Have a clear view of
the high standards expected of us and strive to
maintain them Take personal and team ownership
for our work 
            </div>
            
           <div><a href="./service"><img src={readmore} className="request"/></a></div>
            <div>

            </div>
        </div>
        <div className='FlexTwo'>
        <div className='offers'>
            <img src={offerOne} className="offerOne"/>
            <div className="offer-title">Protection of<br/>housing
            </div> 
            <div className='offer-text'>
            Housing is the basis of stability and security for an individual or family.
            <div className='read-more'><a href="/service" className='read-more'>Read More <img src={arrow} className="arrow"/></a> </div>
            </div>
            </div>
            <div className='offers'>
            <img src={icontwo} className="offerOne"/>
            <div className="offer-title">Monitoring and<br/>Patrol
            </div> 
            <div className='offer-text '>
            Our service is fast and reliable and our team can
         attend your property when you can’t...
             <div className='read-more'><a href="/service" className='read-more'>Read More <img src={arrow} className="arrow"/></a> </div>
             
            </div>
            </div>
            <div className='offers offers-up'>
            <img src={iconthree} className="offerOne"/>
            <div className="offer-title">Protection of<br/>Car
            </div> 
            <div className='offer-text'>
            Our security guards can be one of the most important factots in protecting your assets. 
            <div className='read-more'><a href to="/service" className='read-more'>Read More <img src={arrow} className="arrow"/></a> </div>
            </div>
            </div>
            <div className='offers offers-up'>
            <img src={iconfour} className="offerOne"/>
            <div className="offer-title">Fast Warning<br/>system
            </div> 
            <div className='offer-text'>
            We disseminate timely and meaningful warning information
        that enables at-risk individuals 
            <div className='read-more'><a href="/service" className='read-more'>Read More <img src={arrow} className="arrow"/></a> </div>
            </div>
            </div>
        </div>
      </div>
      <div className="location">
       <div>
      <img src={imageThree} className="imageThree"/>
       </div>
       <div className="location-desc">
       <p className='location-title'>SERVICE <img src={line} className="line-offers"/></p>
       <p className='vip-services'> VIP <br/> Services</p>
       <div className='location-text'>
       Without security you live in a constant fear or treat. That’s why its 
       important to get a quality security team to secure your property,
        business, and or family. Our VIP security personnel's are all highly 
        qualified special commandos who have trained under Ethiopian Military
         in the past. <br/><br/>Our security team are trained to recognize for potential 
         hazard situations before it arises. Furthermore, we will ensure that our client aren't exposed to any security threats and 
       ensure the safety of your commercial or residential properties.
            </div>
            <div>
            <a href="./about"><img src={readmore} className="request"/></a>
            </div>
       </div>
      </div>
      <div className='special'>
          <img src={line} className="line"/>
            <div className='title'>Testimonial</div>
            <h4 className='aboutus-title'>What Clients Say</h4>
              <p className='aboutus-text'>We have made significant contributions
towards recruitment, training and development
in terms of our Managers, Supervisors and
Front-Line VIP Security Officers. By making a
continuous effort towards the personal and
professional development of the special
security service team, we have achieved a
greater level of staff motivation and customer
satisfaction.</p>
        </div>
        <div className="carousel">
        {/* <ControlledCarousel/> */}
        </div>
       <Testimonial/>
        <div className="professional-amount">
            <div className="">
             <h3 className='pro-number'>2,500</h3>
             <p className='pro-desc'>Protection of Housing</p>
            </div>
            <div>
            <h3 className='pro-number'>5,000+</h3>
            <p className='pro-desc'>Monitoring & Patrol</p>
            </div>
            <div>
            <h3 className='pro-number'>170+</h3>
            <p className='pro-desc'>Protection of Car</p>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Home