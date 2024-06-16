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

function App() {


  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Trust/>
    <OurServices/>
    <Acheivments/>
    <ChooseUs/>
    </>
  )
}

export default App
