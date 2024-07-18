import React from 'react'
import contactImage from '../src/assets/contact-img.png'


const Contact = () => {
    return (
        <div className='main-container p-0 m-0' id='contactUs'>
            <div className='row py-5 d-flex align-items-center'>
                <div className='col-md-6 col-12 image-section animate__animated animate__fadeInLeft d-flex align-items-center justify-content-center'>
                    <div className='text-center p-3 m-2'>
                        <img className='img-fluid' src={contactImage} alt="contact-img" />
                    </div>
                </div>
                <div className='col-md-5 col-10 animate__animated animate__fadeInRight'>
                    <form id="contactForm">
                        <div className="mb-3 row d-flex justify-content-between">
                            <div className="col-md-5 col-10 p-2">
                            <label className="form-label" htmlFor="firstName">Firstname</label>
                            <input className="form-control" id="firstName" type="text" placeholder="firstName" />
                            </div>
                            <div className="col-md-6 col-12 p-2">
                            <label className="form-label" htmlFor="lastName">Lastname</label>
                            <input className="form-control" id="lastName" type="text" placeholder="lastName" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                            <input className="form-control" id="phoneNumber" type="number" placeholder="+91 0987654321" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" placeholder="Type your message...."></textarea>
                        </div>
                        <button className="contact-btn my-4 btn" type="button">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact