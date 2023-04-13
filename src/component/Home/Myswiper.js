
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import iconOne from "./../../assets/icon-one.png";
import iconTwo from "./../../assets/icon-two.png";
import iconThree from "./../../assets/icon-three.png";
import learnicon from "./../../assets/learnicon.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {ChevronRight} from 'react-bootstrap-icons'; 
import "./swiper.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  
  return (
    <div className="swipe" id="services">
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
     slidesPerView: 3
          }
          
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        
         <div className="">
         <div className="inside">
         <p className="mobile-title">
         <img src={iconOne} className="iconOne"/>Mobile App
         </p>
         <p className="services-text">Our highly experienced instructors are experts in the field
          and will help equip you with the best tools to develop successful projects. 
          So if you're interested in taking your app development skills to the next level, 
          this is definitely the right course for you.</p>
         <p className="learn-more">Learn More <ChevronRight className="nexticon"/> </p>
         </div>
         
         </div>
        
        </SwiperSlide>
        <SwiperSlide>
        
        <div className="">
        <div className="inside">
          
        <p className="mobile-title">
        <img src={iconTwo} className="iconOne"/>Web development
        </p>
        <p className="services-text">Our web development course is designed to make the process enjoyable, 
        accessible and rewarding - from getting a basic understanding of coding fundamentals,
         to building websites with professional designs. our course is tailored to your desired goals, 
        </p>
         <p className="learn-more">Learn More <ChevronRight className="nexticon"/> </p>
        </div>
        
        </div>
       
       </SwiperSlide>
       <SwiperSlide>
        
        <div className="">
        <div className="inside">
        <p className="mobile-title">
        <img src={iconThree} className="iconOne"/>Data Structure
        </p>
        <p className="services-text">Data structure is a fundamental concept in programming and 
        can be used in practically any software you are developing. With our course, you will gain a 
        comprehensive understanding of how data structures are used,
        implemented, as well as effective ways to utilize them.</p>
         <p className="learn-more">Learn More <ChevronRight className="nexticon"/></p>
        </div>
        
        </div>
       
       </SwiperSlide>
       <SwiperSlide>
        
        <div className="">
        <div className="inside">
        <p className="mobile-title">
        <img src={iconOne} className="iconOne"/>Data Science
        </p>
        <p className="services-text">The data science course provided by our company is one of the best in the industry. 
        We guarantee you'll come out of this with hands-on knowledge on how to extract actionable insights from real data. 
        So join us now and learn from the best!</p>
         <p className="learn-more">Learn More <ChevronRight className="nexticon"/></p>
        </div>
        
        </div>
       
       </SwiperSlide>
       <SwiperSlide>
        
        <div className="">
        <div className="inside">
        <p className="mobile-title">
        <img src={iconTwo} className="iconOne"/>Mobile App
        </p>
        <p className="services-text">The data science course provided by our company is one of the best in the industry. 
        We guarantee you'll come out of this with hands-on knowledge on how to extract actionable insights from real data. 
        So join us now and learn from the best!</p>
         <p className="learn-more">Learn More </p>
        </div>
        
        </div>
       
       </SwiperSlide>
        
      </Swiper>
      
    </div>
    
  );
}
