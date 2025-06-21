import  React, { useState, useEffect } from "react";
import "../Style/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Dark mode ka state

  // Menu toggle function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Dark mode toggle function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Dark mode toggle ho raha hai, body pe class add ya remove karna hai
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  useEffect(() => {
    // Agar page reload ho, to agar dark mode enable hai to set karen
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav>
      <div className="logo">
        <h1>
          Rehmat<span id="spanone">.</span>Ali
        </h1>
      </div>
      <div className={`links ${isMenuOpen ? "show-links" : ""}`}>
        <Link className="anchor" onClick={()=>{setIsMenuOpen(false)}} to= "/">Home </Link>
 
        <Link className="anchor" onClick={()=>{setIsMenuOpen(false)}}  to= "/Projects">Projects</Link>
                <Link className="anchor" onClick={()=>{setIsMenuOpen(false)}}  to= "/MainCards">Skills</Link>
               <Link className="anchor" onClick={()=>{setIsMenuOpen(false)}}  to= "/ExperienceParent">Experience</Link>

        <Link className="anchor" onClick={()=>{setIsMenuOpen(false)}}  to= "/Contacts">Contacts</Link>
      </div>
      <button className="icons" onClick={toggleDarkMode}>
        {darkMode ? <MdOutlineDarkMode  style={{color:"white"}} /> : <MdLightMode  />}{" "}
        {/* Dark mode aur light mode ke icons */}
      </button>
      <button className="ham" onClick={toggleMenu}>
        <GiHamburgerMenu id="ham-icon" />
      </button>
    </nav>
  );
};

export default Navbar;
