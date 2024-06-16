import React from 'react';

const Acheivments = () => {
    return (
        <div className='achievments-container container-fluid p-0 m-0' id='Acheivments'>
        <div className="row d-flex flex-row justify-content-center align-items-center p-0 m-0">
          <div className="col-5 m-2 p-1">
              <div className='text-white fw-bold fs-3'>Our Achievements in Numbers</div>
          </div>
          <div className="col-5 m-2 p-1">
            <div className='text-center p-3 m-2'>
              <div className='text-white fw-light fs-6'>Turning satisfied clients into smiling faces is our ultimate metric for success.</div>
            </div>
          </div>
        </div>
        <div className='row d-flex flex-row align-items justify-content-around  py-3 acheivments-block'>
            <div className='col-2 m-2 py-4 text-center border-top border-white d-flex flex-column align-items-center'>
                <div className='fs-3 fw-bolder text-white'>5K+</div>
                <div className='fs-6 fw-light text-white'>Happy Customers</div>
            </div>
            <div className='col-2 m-2 py-4 text-center border-top border-whiter'>
                <div className='fs-3 fw-bolder text-white'>1+</div>
                <div className='fs-6 fw-light text-white'>Years of Expertise</div>
            </div>
            <div className='col-2 m-2 py-4 text-center border-top border-white'>
                <div className='fs-3 fw-bolder text-white'>80+</div>
                <div className='fs-6 fw-light text-white'>Expert Team Members</div>
            </div>
            <div className='col-2 m-2 py-4 text-center border-top border-white'>
                <div className='fs-3 fw-bolder text-white'>100%</div>
                <div className='fs-6 fw-light text-white'>Customer Satisfaction Rate</div>
            </div>
        </div>
    </div>
    )
}

export default Acheivments
