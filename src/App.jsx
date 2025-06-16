import React from 'react'
import Navbar from './assets/Components/Navbar'
import './App.css'
import HereoSection from './assets/Components/HereoSection'
import MainCards from './assets/Components/MainCards'
import Projects from './assets/Components/Projects'
// import Forms from './assets/Components/Forms'
import Footer from './assets/Components/Footer'
import Contacts from './assets/Components/Contacts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'




const App = () => {
  return (
    <>
    
      {/*     
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Navbar/>}/> 
         <Route path='/HereoSection'element={  <HereoSection/> }/> 
            <Route path='/Projects'element={     <Projects/>}/> 
               <Route path='/Contacts'element={ <Contacts/>}/> 
    </Routes>
    </BrowserRouter> */}

   <div className="complete">
    
<Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HereoSection />
              <MainCards />
              <Projects />
              <Contacts />
            </>
          }
        />
        <Route path="/MainCards" element={<MainCards />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    <Footer />
   </div>
    </>
  )
}

export default App
