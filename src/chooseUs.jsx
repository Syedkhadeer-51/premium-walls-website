import React from 'react';
import icon1 from '../src/assets/icon-1.png'
import icon2 from '../src/assets/icon-2.png'
import icon3 from '../src/assets/icon-3.png'



const ChooseUs = () => {
  return (
    <div className='main-container p-0 m-0' id='insta'>
      <div className="row p-3 text-center">
        <h4 className='heading-text text-dark py-2 px-5 m-3 fw-bold animate__animated animate__fadeInLeft'>Why Choose Us</h4>
        <div className="row d-flex justify-content-center p-0 m-0">
          <div className="col-lg-3 col-md-4 col-12 m-2 p-1">
            <div className='text-center p-3 m-2'>
              <img className='img-fluid choose-us-icons'  src={icon1} alt="about-img" />
              <div className='text-dark fw-bold fs-4'>Unmatched proficiency</div>
              <div className='text-secondary fw-normal fs-6'>Our expert home service technicians are committed to providing excellent service.</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 m-2 p-1">
            <div className='text-center p-3 m-2'>
              <img className='img-fluid choose-us-icons'  src={icon2} alt="about-img" />
              <div className='text-dark fw-bold fs-4'>Dependable & Prompt Assistance</div>
              <div className='text-secondary fw-normal fs-6'>We respect your time and recognise the importance of addressing home maintenance issues promptly.</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 m-2 p-1">
            <div className='text-center p-3 m-2'>
              <img className='img-fluid choose-us-icons'  src={icon3} alt="about-img" />
              <div className='text-dark fw-bold fs-4'>Your Satisfaction is Our Promise</div>
              <div className='text-secondary fw-normal fs-6'>Customer happiness is our top priority in all that we undertake.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs