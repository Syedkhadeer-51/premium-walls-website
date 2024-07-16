import React from 'react'
import addressLogo from "../src/assets/adress-logo.png"
import callLogo from "../src/assets/Calling.png"
import mailLogo from "../src/assets/mail-icon.png"
import linkedinLogo from "../src/assets/linked-in.png"
import instagramLogo from "../src/assets/instagram.png"
import twiterLogo from "../src/assets/twiter-icon.png"


const Footer = () => {
  return (
    <div className='footer-container' id='footer'>
        <div className="row py-5 d-flex align-items-center justify-content-center">
            <div className="col-md-5 col-12">
                <div className='px-md-5 px-2'>
                  <img src={addressLogo} className='adress-logo-img' alt="adress-logo" />
                </div>
                <div className="adress-text px-md-5 px-2 py-3">
                    Premium walls, 4th Floor,BENAKA RESIDENCY, HSR 7th SECTOR,
                    Behind TOTAL ENERGIES, BENGALURU, 560068.
                </div>
                <div className="adress-contact-details d-flex align-items-center px-md-5 px-2 py-3">
                  <div className="adress-contact-logo p-2 text-center">
                    <img className='call-logo' src={callLogo} alt="call-logo" />
                  </div>
                  <div className="p-2">
                    <div className="adress-contact-label">Phone Number</div>
                    <div className="adress-contact-number">+91-8904949777</div>
                  </div>
                </div>
                <div className="social-links px-md-5 px-2 py-3 d-flex">
                  <div className="social-links-container m-2 d-flex justify-content-center align-items-center">
                    <img className="social-logo" src={mailLogo} alt="mail-logo" />
                  </div>
                  <div className="social-links-container m-2 d-flex justify-content-center align-items-center">
                    <img className="social-logo" src={linkedinLogo} alt="mail-logo" />
                  </div>
                  <div className="social-links-container m-2 d-flex justify-content-center align-items-center">
                    <img className="social-logo" src={instagramLogo} alt="mail-logo" />
                  </div>
                  <div className="social-links-container m-2 d-flex justify-content-center align-items-center">
                    <img className="social-logo" src={twiterLogo} alt="mail-logo" />
                  </div>
                </div>
            </div>
            <div className="col-md-5 col-12">
              <div className="row">
                <div className="col-6 quick-links">
                  <div className="quick-links-tile pb-3">Quick Links</div>
                  <div className="quick-links-text px-1 py-3">Book Now</div>
                  <div className="quick-links-text px-1 py-3">Terms & Conditions</div>
                  <div className="quick-links-text px-1 py-3">Privacy Policy</div>
                  <div className="quick-links-text px-1 py-3">Order cancellation policy</div>
                  <div className="quick-links-text px-1 py-3">Contact Us</div>
                </div>
                <div className="col-6 quick-links">
                  <div className="quick-links-tile pb-3">Services</div>
                  <div className="quick-links-text px-1 py-3">Painting</div>
                  <div className="quick-links-text px-1 py-3">Cleaning</div>
                  <div className="quick-links-text px-1 py-3">Bathroom Cleaning</div>
                  <div className="quick-links-text px-1 py-3">Water proofing</div>
                  <div className="quick-links-text px-1 py-3">Texture</div>
                </div>
              </div>
            </div>
        </div>
        <div className="row py-5 px-2 copywrights-container text-center">
          <div className="copyright-text">Copyright © Premium walls Pvt. Ltd 2023. All rights reserved. </div>
        </div>
    </div>
  )
}

export default Footer