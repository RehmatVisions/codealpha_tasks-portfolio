import React from 'react';
import '../Style/Cards.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Cards = (props) => {
    useEffect(() => {
      AOS.init({
        duration: 1000,  
        once: false,      
      });
    }, []);
  return (
   
      <div className="card"   data-aos="fade-up-right">
      <div className="card-icon"    >
        
        {props.icon} 
      </div>
      <h2   className="card-title">{props.title}</h2> 
      <p  className="card-description">{props.description}</p> 
    </div>
 
  );
};

export default Cards;

 