import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Footer from "./component/footer/Footer"
import Navbar from "./component/navbar/Navbar"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <App />
    <Footer/>
  </StrictMode>,
)
