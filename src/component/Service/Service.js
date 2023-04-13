import React from 'react'
import serviceimgOne from '../../assets/service-imgone.png'
import serviceimgTwo from '../../assets/service-imgtwo.png'
import serviceimgThree from '../../assets/service-imgthree.png'
import serviceimgFour from '../../assets/service-imgfour.png'
import Footer from '../Footer/Footer'
import './service.css'
function Service() {
  return (
    <div>
    <div className="service-section">
      <div className="security-services">
      <div>
      <img src={serviceimgOne}/>
      </div>
      <div className=''>
        <p className='pro-desc'>Protection of Housing</p>
        <p className="service-text">Housing is the basis of stability and security for an individual or family.
         The centre of our social, emotional and sometimes economic lives, 
        a home should be a sanctuary—a place to live in peace, security and dignity. 
        At Special Security service we recognize the
importance of our security team in providing a
customer service that businesses and private
individuals can rely on. Our goal for our clients is to provide consistence first
class quality services that you can rely on
consistency.
 </p>
        </div>
       
      </div>
      <div className="security-serve">
     
      <div className=''>
        <p className='pro-desc'>Monitoring & Patrol</p>
        <p className="service-text">Our service is fast and reliable and our team can
         attend your property when you can’t, 
        ensuring peace of mind that you will have 24-hour protection, 7 days a week. 
        The main purpose of a patrol is to maintain the security of the premises under the security guard’s duty.
         We will keep intruders away, Check on your other equipment to make sure they are still functioning safely,
         Ensure the safety of enterprise property, prevent theft, and other events.
   Discover fire and other emergency safety accidents and give warnings to reduce the 
   loss of enterprise property and personnel,
Timely find out and stop the occurrence of public security 
incidents such as fights, and maintain the order of business operations.

</p>
        </div>
        <div>
      <img src={serviceimgTwo} className="right"/>
      </div>
      </div>

      <div className="security-services">
      <div>
      <img src={serviceimgThree}/>
      </div>
      <div className=''>
        <p className='pro-desc'>Protection of Car</p>
        <p className="service-text">Our security guards can be one of the most important factots in protecting your assets. 
        we provide safe you a safe and secure enviroment by making sure that your vehicles are safe.The main reason to protect your car is to prevent anything 
        from happening to it including being broken into or stolen.  if you live in an area that has a high crime rate or if you haven’t 
        installed any safety devices, it is time to contact us.   </p>
        </div>
       
      </div>
      <div className="security-serve">
     
     <div className=''>
       <p className='pro-desc'>Fast Warning system</p>
       <p className="service-text">we disseminate timely and meaningful warning information
        that enables at-risk individuals, communities and organizations to prepare and act 
       appropriately and in sufficient time to reduce harm or loss. To achieve this mission n we must embrace the
following values and work ethics within our
organization.
Strive for quality and excellence in everything that
we do
Foster a “we can do” culture by working with
commitment and enthusiasm Have a clear view of
the high standards expected of us and strive to
maintain them Take personal and team ownership
for our work</p>
       </div>
       <div>
     <img src={serviceimgFour} className="right"/>
     </div>
     </div>
     </div>
      <Footer/>
    </div>
  )
}

export default Service