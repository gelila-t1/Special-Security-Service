 import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import testSymbol from '../../assets/testSymbol.png'
import dummyAvatar from '../../assets/dummyAvatar.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonial.css";

// import required modules
import { Pagination } from "swiper";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            300: {
              slidesPerView: 1
            },
            900:{
       slidesPerView: 4
            }
            
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        <SwiperSlide>
            <div className="testimonies">
                <img src={testSymbol}/>
                <div className="testimony-text">I have been using the services of this security provider for the past year and I am extremely impressed with their level of professionalism and attention to detail. 
                They have provided me with peace of mind knowing that my property is secure and protected.</div>
                    {/* <div className="flex">
                    <div><img src={dummyAvatar} className="dummyAvatar"/>
                    </div><div className="testimony-name">Arthur Broklyn<br/><span className="testimony-pos">Categories: Language</span></div> 
                </div> */}
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonies">
                <img src={testSymbol}/>
                <div className="testimony-text">I cannot recommend this security provider enough. They have been incredibly reliable and responsive to our needs. 
                Their team is well-trained and experienced, and they have always gone above and beyond to ensure our safety.</div>
                    {/* <div className="flex">
                    <div><img src={dummyAvatar} className="dummyAvatar"/>
                    </div><div className="testimony-name">Arthur Broklyn<br/><span className="testimony-pos">Categories: Language</span></div> 
                </div> */}
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonies">
                <img src={testSymbol}/>
                <div className="testimony-text">The team at this security provider is top-notch. They are always on time, reliable, and professional.
                I highly recommend this security provider to anyone looking for top-quality security services.
                 They have provided me with peace of mind knowing that my property and loved ones are safe and secure.</div>
                    {/* <div className="flex">
                    <div><img src={dummyAvatar} className="dummyAvatar"/>
                    </div><div className="testimony-name">Arthur Broklyn<br/><span className="testimony-pos">Categories: Language</span></div> 
                </div> */}
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonies">
                <img src={testSymbol}/>
                <div className="testimony-text">I have used many security providers in the past, but this one is truly exceptional. They provide a wide range of services that are tailored to meet the specific needs of their clients. 
                Their staff is knowledgeable, professional, and always willing to go the extra mile.</div>
                    {/* <div className="flex">
                    <div><img src={dummyAvatar} className="dummyAvatar"/>
                    </div><div className="testimony-name">Arthur Broklyn<br/><span className="testimony-pos">Categories: Language</span></div> 
                </div> */}
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonies">
                <img src={testSymbol}/>
                <div className="testimony-text">This security provider is a game-changer. I have had the pleasure of working with this security provider for several years now and they have consistently exceeded my expectations. 
                Their staff is courteous, professional, and always willing to assist me in any way possible.</div>
                    {/* <div className="flex">
                    <div><img src={dummyAvatar} className="dummyAvatar"/>
                    </div><div className="testimony-name">Arthur Broklyn<br/><span className="testimony-pos">Categories: Language</span></div> 
                </div> */}
                </div>
        </SwiperSlide>
   
   
    
      </Swiper>
    </div>
  );
}
