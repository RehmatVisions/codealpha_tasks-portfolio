// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//    <BrowserRouter>
//       <App />
//     </BrowserRouter>
    
//   </StrictMode>,
// )



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'   // 👈 change here

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>   {/* 👈 change here */}
      <App />
    </HashRouter>
  </StrictMode>,
)
