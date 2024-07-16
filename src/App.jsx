import { useState } from 'react'
import OurServices from './Ourservices'
import './index.css'
import Trust from './Trust'
import ChooseUs from './chooseUs'
import Contact from './Contact'
import HeroSection from './HeroSection'
import Actions from './Actions'
import Navbar from './Navbar'
import Acheivments from './Acheivments'
import Testimonial from './Testimonial'
import Partner from './Partner'
import Footer from './Footer'

function App() {


  return (
    <>
    {/* <Navbar/> */}
    <HeroSection/>
    <Trust/>
    <OurServices/>
    <Acheivments/>
    <ChooseUs/>
    <Testimonial/>
    <Contact/>
    <Partner/>
    <Footer/>
    </>
  )
}

export default App
