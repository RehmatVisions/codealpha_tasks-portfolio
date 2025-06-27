 import React from 'react';
import Experience from './Experience';
 import zaffLogo from "../Image/zaff.jpeg";
import codeAlphaLogo from "../Image/codealpha.jpeg";
import leadsLogo from "../Image/leads.png";

const ExperienceParent = () => {
  return (
    <>
   
      <h1 className='Experience-parent-heading'>Experience</h1>
     <div className="Experience-parent">
              <Experience
        name="MERN Stack Development | Certification in Progress"
        role=" — ZAFF Institute, Arfa Kareem Technology"
        image={zaffLogo}
      />
    <Experience
  name="Frontend  Web Development | Certification In Progress"
  role="Leads University — Practical Course  "
  image={leadsLogo}
/>

      
     </div>
 
    
    </>
  );
};

export default ExperienceParent;
