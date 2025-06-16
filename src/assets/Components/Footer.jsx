import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";


import '../Style/Footer.css'
const Footer = () => {
  return (
    <>
       
      <div className='footer'>
          <div className="iconss">
        <div  className="icons ">
              <a href="https://www.linkedin.com/in/rehmat-ali-01a443350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin style={{color:"	#0077B5"}}/></a>
 
             <a href="https://github.com/RehmatVisions/reactportfolio"><FaGithub style={{color:"	#6CC24A"}}/></a>
             <a href="#"><FaTwitterSquare style={{color:"#1DA1F2"}}/></a>
                       <a href="https://www.upwork.com/freelancers/~0177583e5d01fec6f0?mp_source=share"><FaUpwork style={{color:"	#6FDA44"}} /></a>

      </div>
       <div   className="lastline">
       <h4><FaRegCopyright /> 2025 Rehmat Ali. All Rights Reserved</h4>
      </div>
        </div>
      </div>
    </>
  )
}

export default Footer
