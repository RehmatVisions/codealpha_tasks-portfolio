import React from 'react'
import '../Style/Project.css'
import ProCards from './ProCards'
import spotify_img from '../Image/proImage.jpg'
import eduisty_img from '../Image/proImagestwo.jpg'
import gotto_img from '../Image/proImage3.jpg'
import labs_img from '../Image/proImagesfive.jpg'

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

  {/* <ProCards title="Gotto Website Clone using HTML and CSS" desc="A complete e-commerce website clone made with pure HTML and CSS, including header, banners, categories, and product sections." btn="View" link="/t-projects/gotto/index.html"/> */}
  {/* <ProCards title="Construct website using HTML and CSS" desc= "A clean, Construct website clone built with pure HTML and CSS, featuring homepage layout, services, galleries, and no JavaScript." btn="View"  link="t-projects/construct/index.html"/> */}
  {/* <ProCards title="KOS Website Clone - HTML & CSS" desc="A simple and responsive clone of the KOS website built using HTML and CSS. Replicates key sections like navigation, services, and footer — without JavaScript." btn="View"link="t-projects/KOS/index.html" /> */}
 <ProCards  image={labs_img} title="Streamlabs Website Clone" desc="A fully responsive Streamlabs-inspired ReactJS project with modern UI, smooth animations, and dynamic component structure." btn="View" link="https://sprightly-kashata-a0ade8.netlify.app/" />
  {/* <ProCards title="Starbucks Clone - Coffee,Tea&More" desc="A simple,Starbucks clone built with HTML, CSS, and JavaScript, featuring animations, menu, offers, and contact info." btn="View" link="t-projects/starbucks/index.html" /> */}
 
  {/* <ProCards title= "Javascript Projects" desc="Interactive WebApps–Calculator,To-Do,Tic-Tac-Toe&Color Changer " btn="  elsewhere."/> */}
  {/* <ProCards title="Nike and IceCream projects in ReactJS" desc="Created a simple Nike landing page,and various React projects using React Router DOM and props,including an ice cream project showcasing prop usage." btn="elsewhere"/> */}

  <marquee behavior="" direction="">Made by Rehmat ali</marquee>
  </div>
 </div>
      
    </>
  )
}

export default Projects
