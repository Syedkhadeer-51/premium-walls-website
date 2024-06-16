import React from 'react'
import skilledImage from '../src/assets/skilled-image.png'



const OurServices = () => {
  return (
    <div className='main-container p-0 m-0' id='About'>
      <div className='row p-3'>
        <div className='col-md-6 col-12 image-section animate__animated animate__fadeInLeft d-flex align-items-center justify-content-center'>
          <div className='text-center p-3 m-2'>
        <img className='img-fluid' src={skilledImage} alt="skilled-img" />
          </div>
        </div>
        <div className='col-md-6 col-12 d-flex flex-column justify-content-center align-items-center  animate__animated animate__fadeInRight'>
          <div className='fw-bold fs-2 text-dark px-sm-5 px-3'>Skilled Home Services for Every Requirement</div>
          <div className='description-text text-secondary m-2 px-sm-5 px-2'>
          We take pride in being your trusted answer for all home maintenance needs. Our capabilities go beyond typical tasks, with a wide range of skills and tools. From complex projects to everyday fixes, we're equipped to handle it all with precision and care.
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices