import React from 'react'
import '../Style/Project.css'
import ProCards from './ProCards'
import spotify_img from '../Image/proImage.jpg'
import eduisty_img from '../Image/proImagestwo.jpg'
import gotto_img from '../Image/proImage3.jpg'
import labs_img from '../Image/proImagesfive.jpg'
import weather_img from '../Image/weather.png'
import koadimg from '../Image/Koad.png'
const Projects = () => {
 
  return (
    <>
 <div className='full' id="full" >
 <h1   id="pro">My<span id="spanone">.</span>Projects</h1>
  <div className="maincard" id="maincards">
      <ProCards image={spotify_img} title="Spotify Clone-Music Streaming Platform" desc= "A Spotify-style music streaming clone built with HTML, CSS,  featuring a layout, player controls, and interactive UI." btn="View" link="t-projects/spotify%20clone/index.html"/>
        {/* <ProCards title="To-Do List - JavaScript App"  desc="A basic to-do list app built using HTML, CSS, and JavaScript. Features adding, deleting, and managing tasks in a simple UI."  btn="view"  link="t-projects/to do  list/index.html" /> */}

  {/* <ProCards title="Amazon Clone - HTML&CSS Only" desc="A simple Amazon website clone built using only HTML and CSS.header,banner, product sections, and footer" btn="view"  link="/t-projects/amazon%20clone/index.html" /> */}
   <ProCards image={eduisty_img} title="Eduisty React" desc="  Built a responsive frontend clone of the Eduisty website using React, focusing on clean UI and modern design.

" btn="view"  link="https://comfy-cendol-b1f477.netlify.app/" />
    <ProCards image={gotto_img} title="Gotto Website" desc="A fully responsive bussiness Platform Built in React. Styled with passion. Delivered as Gotto." btn="View" link="https://profound-bavarois-7ff36a.netlify.app/" />

 
 <ProCards  image={labs_img} title="Streamlabs Website Clone" desc="A fully responsive Streamlabs-inspired ReactJS project with modern UI, smooth animations, and dynamic component structure." btn="View" link="https://sprightly-kashata-a0ade8.netlify.app/" />
  {/* <ProCards title="Starbucks Clone - Coffee,Tea&More" desc="A simple,Starbucks clone built with HTML, CSS, and JavaScript, featuring animations, menu, offers, and contact info." btn="View" link="t-projects/starbucks/index.html" /> */}
  <ProCards  image={weather_img} title="Weather App – React & Tailwind CSS " desc="A sleek and responsive weather app built with React and Tailwind CSS that fetches real-time weather data using WeatherAPI." btn="View" link="https://rehmatvisions.github.io/weather_app" />
  <ProCards  image={koadimg} title=" Koad Web – Fast Food Ordering Made Easy" desc=" A responsive React.js fast food website with modern UI, fast performance, and smooth UX — designed for real-world food ordering apps..." btn="View" link="https://superlative-quokka-75b99c.netlify.app/" />

 
  <marquee behavior="" direction="">Made by Rehmat ali</marquee>
  </div>
 </div>
      
    </>
  )
}

export default Projects
