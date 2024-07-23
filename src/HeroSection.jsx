import React from 'react'
import heroImage from '../src/assets/hero-image.png'


const HeroSection = () => {
  return (
    <div className='mb-0 hero-section-container' id='heroSection'>
      <div className='row p-3'>
        <div className='col-md-6 col-12 d-flex flex-column justify-content-center align-items-center  animate__animated animate__fadeInRight'>
          <div className='px-sm-5 px-3 m-2 hero-title'>Top-notch Home Services at affordable Prices</div>
          <div className='hero-description m-2 px-sm-5 px-3'>
            Our highly trained and skilled workers offer a full range of services for home maintenance needs as well as commercial property upkeep.
          </div>

        </div>
        <div className='col-md-6 col-12 image-section animate__animated animate__fadeInLeft d-flex align-items-center justify-content-center'>
          <div className='text-center p-3 m-2'>
            <img className='img-fluid' src={heroImage} alt="skilled-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection