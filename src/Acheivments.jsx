import React from 'react';

const Acheivments = () => {
    return (
        <div className='achievments-container container-fluid p-0 m-0' id='Acheivments'>
        <div className="row d-flex flex-row justify-content-center align-items-center px-0 pt-5 mx-0">
          <div className="col-5 m-2 p-1">
              <div className='text-white our-achievments-title'>Our Achievements in Numbers</div>
          </div>
          <div className="col-5 m-2 p-1">
            <div className='p-3 mt-2 mx-5'>
              <div className='text-white our-achievments-description'>Turning satisfied clients into smiling faces is our ultimate metric for success.</div>
            </div>
          </div>
        </div>
        <div className='row d-flex flex-row align-items justify-content-around  pt-3 pb-5 acheivments-block'>
            <div className='col-2 m-2 py-4 text-center border-top border-white d-flex flex-column align-items-center'>
                <div className='our-achievments-number text-white'>5K+</div>
                <div className='our-achievments-sm-text'>Happy Customers</div>
            </div>
            <div className='col-2 m-2 py-4 text-center border-top border-whiter'>
                <div className='our-achievments-number text-white'>1+</div>
                <div className='our-achievments-sm-text'>Years of Expertise</div>
            </div>
            <div className='col-2 m-2 py-4 text-center border-top border-white'>
                <div className='our-achievments-number text-white'>80+</div>
                <div className='our-achievments-sm-text'>Expert Team Members</div>
            </div>
            <div className='col-2 m-2 py-4 text-center border-top border-white'>
                <div className='our-achievments-number text-white'>100%</div>
                <div className='our-achievments-sm-text'>Customer Satisfaction Rate</div>
            </div>
        </div>
    </div>
    )
}

export default Acheivments
