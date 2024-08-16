import React, { useEffect } from 'react';
import smartTravelIcon from "../src/assets/smart-travel-round-icon.png"
import smartTravelCalling from "../src/assets/calling-icon.png"
import smartTravelInstagram from "../src/assets/instagram-icon.png"
import gokarnaTripImg from "../src/assets/gokarna-trip.png"
import coorgTrip from "../src/assets/coorg-trip.png"
import goaTrip from "../src/assets/goa-trip.png"
import manaliTrip from "../src/assets/manali.png"
import keralaTrip from "../src/assets/kerala-trip.png"
import ootyTrip from "../src/assets/ooty-trip.png"

import Footer from './Footer';

const tripData = [
    {
        title: "Gokarna Dandeli",
        description: "Start at just ₹5,599",
        imgSrc: gokarnaTripImg,
    },
    {
        title: "Coorg Chickmaglur",
        description: "Start at just ₹6,699 ",
        imgSrc: coorgTrip,
    },
    {
        title: "Goa & Dudsagar",
        description: "Start at just ₹6,699 ",
        imgSrc: goaTrip,
    },
    {
        title: "Manali",
        description: "Start at just ₹6,999 ",
        imgSrc: manaliTrip,
    },
    {
        title: "Kerala",
        description: "Start at just ₹14,999 ",
        imgSrc: keralaTrip,
    },
    {
        title: "Ooty Coonoor",
        description: "Start at just ₹5,599 ",
        imgSrc: ootyTrip,
    },
];

const OtherProductView = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component loads
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='product-container' id='servicesContainer'>
                <div className="row d-flex align-items-center text-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="travel-hub-icon img-fluid mx-3" src={smartTravelIcon} alt="Smart Travel Hub Icon" />
                        <div className='travel-hub-title py-2'>Smart Travel Hub</div>
                    </div>
                    <div className='Travel-hub-description py-2'>Ready for your next adventure? Reach out and book your dream trip with us today!</div>
                    <div className="row">
                        <div className="col-6 travel-hub-number">
                            <div className="d-flex justify-content-center align-items-center pt-4">
                                <div>
                                    <img className="travel-calling-icon img-fluid mx-3" src={smartTravelCalling} alt="Calling Icon" />
                                </div>
                                <div className="d-flex flex-column align-items-start">
                                    <div className="travel-hub-text-1">Phone Number</div>
                                    <div className="travel-hub-text-2">+91-9640285295</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 travel-hub-number">
                            <div className="d-flex justify-content-center align-items-center pt-4">
                                <div>
                                    <img className="travel-instagram-icon img-fluid mx-3" src={smartTravelInstagram} alt="Instagram Icon" />
                                </div>
                                <div className="d-flex flex-column align-items-start">
                                    <div className="travel-hub-text-1">Instagram</div>
                                    <div className="travel-hub-text-2">Smart_travel_hub_555</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 travel-social-social"></div>
                    </div>
                </div>
                <div className='row py-4 d-flex justify-content-center align-items-center'>
                    {tripData.map((trip, index) => (
                        <div key={index} className="col-md-4 col-12 trip-card p-0 mx-4 my-3">
                            <div className='text-center'>
                                <img className="trip-card-img img-fluid" src={trip.imgSrc} alt={trip.title} />
                            </div>
                            <div className="trip-title p-3">{trip.title}</div>
                            <div className="trip-description pt-0 pb-3 px-3">{trip.description}</div>
                            <div className="d-flex justify-content-between pt-1 pb-3 px-3">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <div className="trip-btn">Book Now</div>
                                    <div className="trip-contact-btn">Contact us</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default OtherProductView;
