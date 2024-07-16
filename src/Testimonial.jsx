import React from 'react'
import clientImg1 from '../src/assets/client-img-1.png'
import clientImg2 from '../src/assets/client-img-2.png'
import previousIcon from "../src/assets/arrow-left.png"
import nextIcon from "../src/assets/arrow-right.png"



const Testimonial = () => {
    return (
        <div className='client-testimonial p-0 m-0' id='client_Testimonial'>
            <div className="row p-3">
                <div className="text-dark client-carousel p-md-5 p-3 carousel slide" data-bs-ride="true" id='testimonialCarousel'>
                    <div className="d-flex justify-content-between align-items-center pb-md-5 pb-2">
                        <div className="testimonial-title p-3">Client Testimonials</div>
                        <div className="testimonial-btns d-flex align-items-center mx-4">
                            <button className='testimonial-btn-container-prev m-2 carousel-control-prev' type='button' data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                                <span aria-hidden="true">
                                    <img className="testimonial-icon" src={previousIcon} alt="prev-icon" />
                                </span>
                            </button>
                            <button className='testimonial-btn-container-next m-2 carousel-control-next' type='button' data-bs-target="#testimonialCarousel" data-bs-slide="next">
                                <span aria-hidden="true">
                                    <img className="testimonial-icon" src={nextIcon} alt="next-icon" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="carousel-inner">
                        <div className='carousel-item active'>
                            <div className="row px-md-4 px-2 d-flex align-items-center justify-content-center">
                                <div className="col-md-5 col-10 m-4 testimonial-card">
                                    <div className="testimonial-header d-flex align-items-center pt-md-5 pt-3 pb-2">
                                        <div className="p-1">
                                            <img className='client-testimonial-img' src={clientImg1} alt="client-img" />
                                        </div>
                                        <div className="client-testimonial-details px-4">
                                            <div className="client-testimonial-name">Chandra kumar</div>
                                            <div className="client-testimonial-service">Cleaning Service</div>
                                        </div>
                                    </div>
                                    <div className="testimonial-description px-2 py-5">
                                        PremiumWalls provided excellent cleaning service with professional and courteous staff. They were punctual, thorough, and left my home spotless. The team paid attention to detail and handled my belongings with care. I highly recommend their services for anyone seeking top-notch cleaning. I'll definitely be a returning customer.
                                    </div>
                                </div>
                                <div className="col-md-5 col-10 m-4 testimonial-card">
                                    <div className="testimonial-header d-flex align-items-center pt-md-5 pt-3 pb-2">
                                        <div className="p-1">
                                            <img className='client-testimonial-img' src={clientImg2} alt="client-img" />
                                        </div>
                                        <div className="client-testimonial-details px-4">
                                            <div className="client-testimonial-name">Pavan Shetty</div>
                                            <div className="client-testimonial-service">Painting service</div>
                                        </div>
                                    </div>
                                    <div className="testimonial-description px-2 py-5">
                                        PremiumWalls Painting exceeded my expectations with their exceptional service. Their team was skilled, efficient, and completed the job on time. The quality of their work was outstanding, and my home looks fantastic. I highly recommend PremiumWalls Painting for anyone in need of painting services. 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                        <div className="row px-md-4 px-2 d-flex align-items-center justify-content-center">
                                <div className="col-md-5 col-10 m-4 testimonial-card">
                                    <div className="testimonial-header d-flex align-items-center pt-md-5 pt-3 pb-2">
                                        <div className="p-1">
                                            <img className='client-testimonial-img' src={clientImg1} alt="client-img" />
                                        </div>
                                        <div className="client-testimonial-details px-4">
                                            <div className="client-testimonial-name">Chandra kumar</div>
                                            <div className="client-testimonial-service">Cleaning Service</div>
                                        </div>
                                    </div>
                                    <div className="testimonial-description px-2 py-5">
                                        PremiumWalls provided excellent cleaning service with professional and courteous staff. They were punctual, thorough, and left my home spotless. The team paid attention to detail and handled my belongings with care. I highly recommend their services for anyone seeking top-notch cleaning. I'll definitely be a returning customer.
                                    </div>
                                </div>
                                <div className="col-md-5 col-10 m-4 testimonial-card">
                                    <div className="testimonial-header d-flex align-items-center pt-md-5 pt-3 pb-2">
                                        <div className="p-1">
                                            <img className='client-testimonial-img' src={clientImg2} alt="client-img" />
                                        </div>
                                        <div className="client-testimonial-details px-4">
                                            <div className="client-testimonial-name">Pavan Shetty</div>
                                            <div className="client-testimonial-service">Painting service</div>
                                        </div>
                                    </div>
                                    <div className="testimonial-description px-2 py-5">
                                        PremiumWalls Painting exceeded my expectations with their exceptional service. Their team was skilled, efficient, and completed the job on time. The quality of their work was outstanding, and my home looks fantastic. I highly recommend PremiumWalls Painting for anyone in need of painting services. 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial