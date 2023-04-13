import React from 'react'
import './about.css'
import line from '../../assets/line.png'
import aboutImageOne from '../../assets/about-ImageOne.png'
import aboutImageTwo from '../../assets/about-imageTwo.png'
import aboutImageThree from '../../assets/about-imageThree.png'
import aboutImageFour from '../../assets/about-imageFour.png'
import aboutImageFive from '../../assets/about-imageFive.png'
import aboutImageSix from '../../assets/about-imageSix.png'
import aboutImageSeven from '../../assets/about-imageSeven.png'
import aboutImageNine from '../../assets/about-imageNine.png'
import request from '../../assets/request.png'
import Footer from '../Footer/Footer'
 <div style={{
        backgroundImage: `url(${aboutImageSeven})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'white',
         
      }}>
        <div className='pro-text'> <p className="officer-name">Jhon Doe</p>
          <p>Lorem ipsum dolor sit amet consectetur. <br/>
          Faucibus vitae feugiat dignissim neque<br/>
           pulvinar nunc et. Condimentum adipiscing<br/>
            ipsum lectus </p>   </div>  
            </div> 

function About() {
  return (
    <div>
        <div className ="aboutSection-one">
            <div className="">
            <img src={aboutImageOne} className="aboutimage-one"/>
            </div>
            <div className="">
            <img src={aboutImageTwo} className="aboutimage-two"/>
            </div>
            <div className='about-sec'>
               <img src={line} className="line"/> 
            <div className='title'>ABOUT US</div>
            <h4 className='aboutus-title'>Special Security Service</h4>
              <p className='aboutus-text'>Special Security Service is founded in Ethiopia in
early 2022. We have quality trained employees
whom have years of extensive knowledge in
military expertise in the VIP security industry.
Through the provision of unrivalled quality VIP
security services to businesses operating in the
public and private sectors, we has achieved
much success through building on its policy of
integrity, credibility and partnership with all of
our clients.</p>
<a href='tel:+251 978 78 7899'> <img src={request} className="abt-button"/></a>
        </div>
        </div>
        <div>
       
        <div className='aboutsection-two'>
        <div className='our-story'>
               <img src={line} className="line"/> 
            <div className='title'>OUR STORY </div>
            <h4 className='aboutus-title'>Special Security Service</h4>
              <p className='aboutus-text'>At Special Security service we recognize the
importance of our <br/>security team in providing a
customer service that businesses<br/> and private
individuals can rely on.
We have made significant<br/> contributions
towards recruitment, training and development<br/>
in terms of our Managers, Supervisors and
Front-Line VIP <br/>Security Officers. By making a
continuous effort towards the <br/>personal and
professional development of the special
security <br/>service team, we have achieved a
greater level of staff motivation and customer
satisfaction.</p>

        </div>
        <div>
            <img src={aboutImageThree} className="image"/>
        </div>
        </div>
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
        <div className='professional-team'>
            <div className='pro-title'>
            <div className='title'>OUR TEAM<img src={line} className="line"/></div>
            <h4 className='aboutus-title'>OUR <br/>Professionals</h4>
            </div>
            <div style={{
        backgroundImage: `url(${aboutImageFour})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'white',
      
      }} className="proOne">
       <div className='pro-text'> <p  className="officer-name">President</p>
        </div>   
            </div>
            <div style={{
        backgroundImage: `url(${aboutImageFive})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'white',
        
      }} className="proOne">
        <div className='pro-text'> <p className="officer-name">Marketing director</p>
          {/* <p className='officer-desc'>Lorem ipsum dolor sit amet consectetur. <br/>
          Faucibus vitae feugiat dignissim neque<br/>
           pulvinar nunc et. Condimentum adipiscing<br/>
            ipsum lectus </p>   */}
             </div>  
            </div>

        <div style={{
        backgroundImage: `url(${aboutImageSix})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'white',
        
      }} className="proOne">
        <div className='pro-text'> <p className="officer-name">operation manager</p>
          {/* <p className='officer-desc'>Lorem ipsum dolor sit amet consectetur. <br/>
          Faucibus vitae feugiat dignissim neque<br/>
           pulvinar nunc et. Condimentum adipiscing<br/>
            ipsum lectus </p>   */}
             </div>  
            </div>   

             <div style={{
        backgroundImage: `url(${aboutImageSeven})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'white',
        
      }} className="proOne">
        <div className='pro-text'> <p className="officer-name">Jhon Doe</p>
          {/* <p className='officer-desc'>Lorem ipsum dolor sit amet consectetur. <br/>
          Faucibus vitae feugiat dignissim neque<br/>
           pulvinar nunc et. Condimentum adipiscing<br/>
            ipsum lectus </p>    */}
            </div>  
            </div> 
            <div style={{
        backgroundImage: `url(${aboutImageNine})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'white',
      
         
      }} className="proOne">
        <div className='pro-text'> <p className="officer-name">Jhon Doe</p>
       
             </div>  
            </div> 
        </div>
        
        
        </div>
        <Footer/>
    </div>
  )
}

export default About