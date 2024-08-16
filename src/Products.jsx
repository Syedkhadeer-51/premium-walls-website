import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductDisabledCard from './ProductDisabled';
import paintingImg from "../src/assets/painting.png";
import homeCleaningImg from "../src/assets/home-cleaning.png";
import kitchenCleaning from "../src/assets/kitchen-cleaning.png";
import bathroomServiceImg from "../src/assets/Bathroom-cleaning.png";
import waterProofingImg from "../src/assets/water-proofing.png";
import textureServiceCleaning from "../src/assets/texture-service.png";
import expandMoreIcon from "../src/assets/expand_more.png";
import sofaCleaning from "../src/assets/sofa-cleaning.png";
import acRepair from "../src/assets/ac-repair.png";
import carpenterService from "../src/assets/carpenter-service.png";
import plumbingService from "../src/assets/plumbing-service.png";
import electricianService from "../src/assets/electrician-service.png";
import smartTravelHub from "../src/assets/smart-travel-hub.png";
import OtherProductCard from './OtherProductCard';

const productData = [
    { id: 1, img: paintingImg, alt: "painting", title: "Painting", description: "Revitalise the heart of your home with our painting service" },
    { id: 2, img: homeCleaningImg, alt: "home-cleaning", title: "Home cleaning", description: "Elevate the essence of your home with our home cleaning solutions" },
    { id: 3, img: kitchenCleaning, alt: "kitchen-cleaning", title: "Kitchen cleaning", description: "Elevate the essence of your home with our home cleaning solutions" },
    { id: 4, img: bathroomServiceImg, alt: "bathroom-cleaning", title: "Bathroom cleaning", description: "Refresh your sanctuary with our meticulous bathroom cleaning" },
    { id: 5, img: waterProofingImg, alt: "water-proofing", title: "Water proofing", description: "Shield your space with our expert waterproofing solutions" },
    { id: 6, img: textureServiceCleaning, alt: "texture-service", title: "Texture", description: "Add depth and character with our premium texture services" }
];

const disabledProductData = [
    { id: 7, img: sofaCleaning, alt: "sofa-cleaning",title: "Sofa Cleaning", description: "Renew your comfort with our specialised sofa cleaning" },
    { id: 8, img: acRepair, alt: "ac-repair", title: "AC repair", description: "Restore comfort with our efficient AC repair services" },
    { id: 9, img: carpenterService, alt: "carpenter-service", title: "Carpenter service", description: "Craft bespoke furniture with our skilled carpentry service" },
    { id: 10, img: plumbingService, alt: "plumbing", title: "Plumbing", description: "Ensure smooth operations with our reliable plumbing solutions" },
    { id: 11, img: electricianService, alt: "electrician", title: "Electrician", description: "Illuminate your space with our adept electrician services" },
];

const otherServicesData = [
    {
        id: 12, img:smartTravelHub , alt: "smart-travel",title: "Smart travel hub ", description: "Ready for your next adventure? Reach out and book your dream trip with us today!" 
    }
]

const Products = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const collapseElement = document.querySelector('#collapseExample');

        const handleShow = () => {
            collapseElement.scrollIntoView({ behavior: 'smooth' });
        };

        collapseElement.addEventListener('shown.bs.collapse', handleShow);

        return () => {
            collapseElement.removeEventListener('shown.bs.collapse', handleShow);
        };
    }, []);

    const handleButtonClick = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div className='product-container' id='servicesContainer'>
            <div className="row d-flex align-items-center">
                <div className="col-md-6 col-12 product-header">
                    <div className='product-container-title py-2'>Our Services</div>
                    <div className='product-description py-2'>Discover our complete range of home services tailored to meet your need.</div>
                </div>
                <div className="col-md-6 col-12 d-flex justify-content-end">
                    <div className="d-flex align-items-center">
                        <button
                            className="product-view-more-btn d-flex align-items-center"
                            type='button'
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample"
                            aria-expanded={isExpanded}
                            aria-controls="collapseExample"
                            onClick={handleButtonClick}
                        >
                            View more
                            <img
                                src={expandMoreIcon}
                                alt="icon"
                                className={`ml-2 ${isExpanded ? 'rotate-180' : ''}`}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center pt-5 pb-3">
                {productData.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="collapse" id="collapseExample">
                <div className="row d-flex justify-content-center pt-5 pb-3">
                    {disabledProductData.map(product => (
                        <ProductDisabledCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
            <div className='row product-header'>
                <div className='product-container-title py-2'>Other Services</div>
                <div className='product-description py-2'>Discover our complete range of other services tailored to meet your need.</div>
            </div>
            <div className="row d-flex justify-content-start pt-5 pb-3">
                {otherServicesData.map(otherproduct => (
                    <OtherProductCard key={otherproduct.id} otherproduct={otherproduct} />
                ))}
            </div>
        
        </div>
    );
}

export default Products;
