import React from 'react'
import '../Style/MainCards.css'
import Cards from './Cards'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const MainCards = () => {


  return (

    <>

      <div className="content" id="content">

        <h1><span id="spanthree">Skills</span></h1>
        <div className="allCards">
          <Cards id="htm" icon={<FaHtml5 style={{ color: "#E44D26" }} />} title="HTML" description="Semantic, Accessible, " />

          <Cards icon={<FaCss3Alt style={{ color: '#264DE4' }} />} title="CSS" description="Flexbox,UI,
Animations,
  Animations" />
          <Cards icon={<RiJavascriptFill style={{ color: '#F7DF1E' }} />} title="JAVASCRIPT" description="functions, DOM,events
,variables  " />

          <Cards icon={<RiTailwindCssFill style={{ color: '#38BDF8' }} />} title="Tailwind CSS" description="Utility-first and Responsive." />

          <Cards icon={<RiReactjsLine style={{ color: '#61DAFB' }} />} title="REACT JS" description="ReactRouterDom,
props,Components
 SPA" />

          <Cards icon={<SiNetlify style={{ color: '#00C7B7' }} />} title=" Netlify" description="Deployed responsive sites via Netlify using React and Tailwind.
  "/>
          <Cards icon={<FaGithub style={{ color: '#6CC24A' }} />} title="GitHub" description="Used GitHub to upload code and manage projects." />
        </div>


      </div>






    </>
  )
}

export default MainCards
