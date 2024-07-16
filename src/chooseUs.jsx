import React from 'react';
import icon1 from '../src/assets/icon-1.png'
import icon2 from '../src/assets/icon-2.png'
import icon3 from '../src/assets/icon-3.png'



const ChooseUs = () => {
  return (
    <div className='main-container p-0 m-0' id='choose_Us'>
      <div className="row p-3 text-center">
        <h4 className='choose-us-title py-2 px-5 m-3 animate__animated animate__fadeInLeft'>Why Choose Us</h4>
        <div className="row d-flex justify-content-center pt-0 pb-5 m-0 w-100">
          <div className="col-lg-4 col-md-4 col-12">
            <div className='text-center p-3 m-2'>
              <img className='img-fluid choose-us-icons'  src={icon1} alt="about-img" />
              <div className='choose-us-sub-title'>Unmatched proficiency</div>
              <div className='choose-us-description'>Our expert home service technicians are committed to providing excellent service.</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className='text-center p-3 m-2'>
              <img className='img-fluid choose-us-icons'  src={icon2} alt="about-img" />
              <div className='choose-us-sub-title'>Dependable & Prompt Assistance</div>
              <div className='choose-us-description'>We respect your time and recognise the importance of addressing home maintenance issues promptly.</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className='text-center p-3 m-2'>
              <img className='img-fluid choose-us-icons'  src={icon3} alt="about-img" />
              <div className='choose-us-sub-title'>Your Satisfaction is Our Promise</div>
              <div className='choose-us-description'>Customer happiness is our top priority in all that we undertake.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs