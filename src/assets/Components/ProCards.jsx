import React from 'react'
import '../Style/ProCards.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProCards = (props) => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // animation speed
  //     once: false,     
  //   });
  // }, []);
  
  return (
    <>
      
         {/* <div   data-aos="fade-up" className="PC">
           
         
            <h1>{props.title}</h1>
         <p>{props.desc}</p>
     
<button  className="view">
  <span >     <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.btn}
      </a>
      </span>
</button>
      
      </div> */}
      <a href={props.link} className='PC' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
         <img className='proimg' src={props.image} alt="" />
            <h1>{props.title}</h1>
         <p>{props.desc}</p>
     
<button  className=" view">
  <span >     <a  href={props.link} target="_blank" rel="noopener noreferrer">
        {props.btn}
      </a>
      </span>
</button>
      </a>
   
    </>
  )
}

export default ProCards
