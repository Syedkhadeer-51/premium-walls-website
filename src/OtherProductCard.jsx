// src/OtherProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import arrowRightIcon from "../src/assets/book-now-arrow-right.png";


const OtherProductCard = ({ otherproduct }) => {
    return (
        <div className="col-md-4 col-12 product-card p-0 mx-4 my-3">
            <div className='text-center'>
                <img className="product-card-img img-fluid" src={otherproduct.img} alt={otherproduct.alt} />
            </div>
            <div className="product-title p-3">{otherproduct.title}</div>
            <div className="product-description p-3">{otherproduct.description}</div>
            <div className="product-book-btn d-flex justify-content-between pt-3 pb-5 px-3">
                <Link to={`/OtherproductView`} className="d-flex justify-content-between align-items-center w-100">
                    <div className="product-book-txt">Book Now</div>
                    <img className='product-arrow-icon' src={arrowRightIcon} alt="arrow-right-icon" />
                </Link>
            </div>
        </div>
    );
}

export default OtherProductCard;
