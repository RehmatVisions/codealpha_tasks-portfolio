import React from 'react';
import '../Style/HeroSection.css';
import myimg from '../Image/myimg.jpg';    
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
const HeroSection = () => {
      useEffect(() => {
        AOS.init({
          duration: 1000, // animation speed
          once: false,     // ek hi baar chale scroll pe
        });
      }, []);
  return (
    <>
      <div className="container" id="home">
        <div className="left" data-aos="fade-up"
     data-aos-anchor-placement="top-center"  >
          <h1>Hi, I'm <span id="spantwo">Rehmat<span id="spanone">.</span>Ali  </span>   
      </h1>
          {/* <p  style={{marginBottom:"20px"}}>A passionate Frontend Developer with expertise in HTML, CSS, JavaScript, and React. I build fast, responsive, and interactive web applications.</p> */}
           <p className="" style={{marginBottom:"20px"}}>
      <Typewriter
        words={[
          'A passionate Frontend Developer with expertise in HTML, CSS, JavaScript, and React. I build fast, responsive, and interactive web applications.'
        ]}
        loop={1}
        cursor
        cursorStyle="	♥"
        typeSpeed={20}
        deleteSpeed={30}
        delaySpeed={2000}
      />
    </p>
          <div className="btns">
            <button id='hire'>Hire me</button>
            {/* <button id="download">Download CV</button> */}
            <a href="My_Resume.pdf" download>
              <button id="download">Download CV</button>
            </a>
          </div>
        </div>
        <div className="right"  >
          <img data-aos="zoom-in-down" src={myimg} alt="Rehmat Ali" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
 