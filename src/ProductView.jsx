// src/components/ProductView.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import paintingServiceBanner from '../src/assets/painting-service-banner.png'
import interiorPainting from "../src/assets/interior-painting.png"
import exteriorPainting from "../src/assets/exterior-painting.png"
import interiorPaintingMiniIcon from "../src/assets/interior-mini-card-icon.png"
import exteriorPaintingMiniIcon from "../src/assets/exterior-mini-card-icon.png"
import homeCleaningBanner from "../src/assets/homeCleaningBanner.png"
import furnishedApartment from "../src/assets/furnishedApartment.png"
import unfurnishedApartment from "../src/assets/unfurnishedApartment.png"
import furnishedApartmentSilverIcon from "../src/assets/furnishedApartmentSilverIcon.png"
import furnishedApartmentGoldIcon from "../src/assets/furnishedApartmentGoldIcon.png"
import unfurnishedApartmentSilverIcon from "../src/assets/unfurnishedApartmentSilverIcon.png"
import unfurnishedApartmentGoldIcon from "../src/assets/unfurnishedApartmentGoldIcon.png"
import kitchenCleaningBanner from "../src/assets/kitchenCleaningBanner.png"
import kitchenImg from "../src/assets/kitchenImg.png"
import vacantKitchenCleaningIcon from "../src/assets/vacantkitchenCleaningIcon.png"
import nonvacantKitchenCleaningIcon from "../src/assets/nonVacantKitchenCleaningIcon.png"
import bathroomCleaningBanner from "../src/assets/bathroomCleaningBanner.png"
import bathroomCleaningSilverIcon from "../src/assets/bathroomCleaningSilverIcon.png"
import bathroomCleaningGoldIcon from "../src/assets/bathroomCleaningGoldIcon.png"
import waterProofingBanner from "../src/assets/waterProofingBanner.png"
import waterProofingIcon from "../src/assets/waterProofingIcon.png"
import texturePaintingBanner from "../src/assets/texturePaintingBanner.png"
import texturePaintingIcon from "../src/assets/texturePaintingIcon.png"
import starIcon from "../src/assets/starIcon.png"
import checkMark from "../src/assets/checkmark.png"
import cancelMark from "../src/assets/cancel.png"
import '../src/components/ProductView.css'
import Footer from './Footer';
import { useCart } from './context/CartContext';
import ProductModal from './components/ProductModal';

const productData = [
    {
        id: 1,
        productBanner: paintingServiceBanner,
        alt: "painting",
        title: "Painting service",
        productBookings: "100k+Bookings",
        serviceCard: [
            { cardImg: interiorPainting },
            { cardImg: exteriorPainting }
        ],
        miniCards: [
            {
                productTitle: "Interior Painting",
                productImg: interiorPaintingMiniIcon,
                rating: 4.3,
                header: "Get At home consultation for free",
                features: [
                    "Team of 2-5 painters delivering high-quality work",
                    "Choose from 2200+ shades",
                    "Top branded paints"
                ]
            },
            {
                productTitle: "Exterior Painting",
                productImg: exteriorPaintingMiniIcon,
                rating: 4.2,
                header: "Exterior painting special offer",
                offer: "(limited period offer)",
                features: [
                    "Weather-resistant paints",
                    "Professional finishing",
                    "2-year warranty"
                ]
            }
        ]
    },
    {
        id: 2,
        productBanner: homeCleaningBanner,
        alt: "homeCleaning",
        title: "Home cleaning",
        productBookings: "100k+Bookings",
        serviceCard: [
            { cardImg: furnishedApartment },
            { cardImg: unfurnishedApartment }
        ],
        miniCards: [
            {
                productTitle: "Furnished apartment ( Silver )",
                productImg: furnishedApartmentSilverIcon,
                rating: 4.3,
                header: "Starts at ₹2399",
                features: [
                    "Wiping & mopping of floor & balcony, bathroom deep cleaning",
                    "Dry dusting of ceiling, walls & windows, dry vacuuming of furniture"
                ],
                extradetails: [
                    "Bathroom deep cleaning",
                    "Kitchen regular cleaning",
                    "Living room & bedroom cleaning",
                    "Floor Cleaning",
                    "Hard to reach spots cleaning"
                ],
                extraDetailsExcluded :[
                    "Cleaning of kitchen cabinet interiors appliances",
                    "Removal of utensils/ objects and reorganisation",
                    "Wet wiping of wall & ceiling"
                ]
            }, {
                productTitle: "Furnished apartment ( Gold )",
                productImg: furnishedApartmentGoldIcon,
                rating: 4.3,
                header: "Starts at ₹3999",
                features: [
                    "Deep cleaning of bedroom, living room, bathroom, kitchen & balcony",
                    "Floor deep cleaning by single disc machine, vacuuming of sofa & carpets"
                ],
                extradetails: [
                    "Bathroom deep cleaning",
                    "Kitchen regular cleaning",
                    "Living room & bedroom cleaning",
                    "Floor Cleaning",
                    "Hard to reach spots cleaning"
                ],
                extraDetailsExcluded :[
                    "Cleaning of kitchen cabinet interiors appliances",
                    "Removal of utensils/ objects and reorganisation",
                    "Wet wiping of wall & ceiling"
                ]
            }, {
                productTitle: "UnFurnished apartment ( Silver )",
                productImg: unfurnishedApartmentSilverIcon,
                rating: 4.3,
                header: "Starts at ₹2399",
                features: [
                    "Wiping & mopping of floor & balcony, bathroom deep cleaning",
                    "Dry dusting of ceiling, walls & windows"
                ],
                extradetails: [
                    "Bathroom deep cleaning",
                    "Kitchen regular cleaning",
                    "Living room & bedroom cleaning",
                    "Floor Cleaning",
                    "Hard to reach spots cleaning"
                ],
                extraDetailsExcluded :[
                    "Cleaning of kitchen cabinet interiors appliances",
                    "Removal of utensils/ objects and reorganisation",
                    "Wet wiping of wall & ceiling"
                ]
            }, {
                productTitle: "UnFurnished apartment ( Gold )",
                productImg: unfurnishedApartmentGoldIcon,
                rating: 4.3,
                header: "Starts at ₹3839",
                features: [
                    "Wiping & mopping of floor & balcony, bathroom deep cleaning",
                    "Dry dusting of ceiling, walls & windows"
                ],
                extradetails: [
                    "Bathroom deep cleaning",
                    "Kitchen regular cleaning",
                    "Living room & bedroom cleaning",
                ],
                extraDetailsExcluded :[
                    "Cleaning of kitchen cabinet interiors appliances",
                    "Removal of utensils/ objects and reorganisation",
                    "Wet wiping of wall & ceiling"
                ]

            }
        ]
    },
    {
        id: 3,
        productBanner: kitchenCleaningBanner,
        alt: "kitchenCleaning",
        title: "kitchen cleaning",
        productBookings: "100k+Bookings",
        serviceCard: [
            { cardImg: kitchenImg }
        ],
        miniCards: [
            {
                productTitle: "Vacant kitchen cleaning",
                productImg: vacantKitchenCleaningIcon,
                rating: 4.3,
                header: "Starts at ₹999",
                features: [
                    "Oil & grease stain removal from walls, slabs, cabinets, stove, sink etc",
                    "Cabinets cleaned inside. Removal & placing back items not included",
                ],
                extradetails: [
                    "Cleaning of all areas & surfaces",
                    "Superior stain removal",
                    "Removal of dust from modular",
                ],
                extraDetailsExcluded :[
                    "Removal of utensils and placing back",
                    "Chimney and appliance cleaning depends on your selection",
                ]
            },
            {
                productTitle: "Non vacant kitchen cleaning",
                productImg: nonvacantKitchenCleaningIcon,
                rating: 4.2,
                header: "Starts at ₹1399",
                offer: "(limited period offer)",
                features: [
                    "Oil & grease stain removal from walls, slabs, cabinets, stove, sink etc",
                    "Cabinets cleaned inside. Removal & placing back items not included",
                ],
                extradetails: [
                    "Cleaning of all areas & surfaces",
                    "Superior stain removal",
                    "Removal of dust from modular",
                ],
                extraDetailsExcluded :[
                    "Removal of utensils and placing back",
                    "Chimney and appliance cleaning depends on your selection",
                ]
            }
        ]
    },
    {
        id: 4,
        productBanner: bathroomCleaningBanner,
        alt: "bathroomCleaning",
        title: "Bathroom cleaning",
        productBookings: "100k+Bookings",
        miniCards: [
            {
                productTitle: "Bathroom cleaning ( Silver )",
                productImg: bathroomCleaningSilverIcon,
                rating: 4.3,
                header: "Starts at ₹299",
                features: [
                    "Dirt & black stain removal from toilet pot, tiles, floor, basin, exhaust, etc.",
                    "Book this service every month for a clean, spotless & hygienic bathroom",
                ],
                extradetails: [
                    "Objects removal before cleaning",
                    "Superior stain removal",
                    "Cleaning of all areas & surfaces",
                    "Cleaning of hard to reach spots",
                    "Floor deep cleaning & finishing touch"
                ],
                extraDetailsExcluded :[
                    "Objects removal before cleaning",
                    "Wet wiping of wall & ceiling",
                ]

            },
            {
                productTitle: "Bathroom cleaning ( Gold )",
                productImg: bathroomCleaningGoldIcon,
                rating: 4.2,
                header: "Starts at ₹1399",
                offer: "(limited period offer)",
                features: [
                    "Hard water stains & dirt in tile grouting removal with scrubbing machine",
                    "Intense cleaning of toilet pot, tiles, floor, basin, exhaust, etc.",
                ],
                extradetails: [
                    "Objects removal before cleaning",
                    "Superior stain removal",
                    "Cleaning of all areas & surfaces",
                    "Cleaning of hard to reach spots",
                    "Floor deep cleaning & finishing touch"
                ],
                extraDetailsExcluded :[
                    "Objects removal before cleaning",
                    "Wet wiping of wall & ceiling",
                ]
            }
        ]
    },
    {
        id: 5,
        productBanner: waterProofingBanner,
        alt: "waterProofing",
        title: "water proofing",
        productBookings: "100k+Bookings",
        miniCards: [
            {
                productTitle: "waterproofing",
                productImg: waterProofingIcon,
                rating: 4.3,
                header: "Get At home consultation for free",
                features: [
                    "Protect your house from mould",
                    "On site consultation",
                ]
            }
        ]
    },
    {
        id: 6,
        productBanner: texturePaintingBanner,
        alt: "texturePainting",
        title: "Texture Paintign",
        productBookings: "100k+Bookings",
        miniCards: [
            {
                productTitle: "Texture Painting",
                productImg: texturePaintingIcon,
                rating: 4.3,
                header: "Get At home consultation for free",
                features: [
                    "Protect your house from mould",
                    "On site consultation",
                ]
            }
        ]
    },
];

const PRODUCT_PRICES = {
    // Painting Service
    1: {
        "Interior": {
            "1 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "2 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "3 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "4 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "5 BHK": { basePrice: 0, tax: 0, consultationFee: 50 }
        },
        "Exterior": {
            "1 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "2 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "3 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "4 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "5 BHK": { basePrice: 0, tax: 0, consultationFee: 50 }
        }
    },
    // Home Cleaning
    2: {
        "Furnished Silver": {
            "1 BHK": { basePrice: 2399, tax: 199 },
            "2 BHK": { basePrice: 2799, tax: 299 },
            "3 BHK": { basePrice: 3599, tax: 399 },
            "4 BHK": { basePrice: 4399, tax: 499 },
            "5 BHK": { basePrice: 4699, tax: 499 }
        },
        "Furnished Gold": {
            "1 BHK": { basePrice: 3999, tax: 399 },
            "2 BHK": { basePrice: 3999, tax: 499 },
            "3 BHK": { basePrice: 4599, tax: 499 },
            "4 BHK": { basePrice: 6399, tax: 599 },
            "5 BHK": { basePrice: 7399, tax: 599 }
        },
        "Unfurnished Silver": {
            "1 BHK": { basePrice: 1999, tax: 199 },
            "2 BHK": { basePrice: 2299, tax: 299 },
            "3 BHK": { basePrice: 2899, tax: 399 },
            "4 BHK": { basePrice: 3899, tax: 399 },
            "5 BHK": { basePrice: 4399, tax: 499 }
        },
        "Unfurnished Gold": {
            "1 BHK": { basePrice: 3199, tax: 299 },
            "2 BHK": { basePrice: 3698, tax: 399 },
            "3 BHK": { basePrice: 4599, tax: 499 },
            "4 BHK": { basePrice: 5999, tax: 599 },
            "5 BHK": { basePrice: 6799, tax: 599 }
        }
    },
    // Kitchen Cleaning
    3: {
        "Vacant": {
            "1 BHK": { basePrice: 999, tax: 99 },
            "2 BHK": { basePrice: 1499, tax: 149 },
            "3 BHK": { basePrice: 1999, tax: 199 },
            "4 BHK": { basePrice: 2499, tax: 249 },
            "5 BHK": { basePrice: 2999, tax: 299 }
        },
        "Non Vacant": {
            "1 BHK": { basePrice: 1399, tax: 139 },
            "2 BHK": { basePrice: 1899, tax: 189 },
            "3 BHK": { basePrice: 2399, tax: 239 },
            "4 BHK": { basePrice: 2899, tax: 289 },
            "5 BHK": { basePrice: 3399, tax: 339}
        }
    },
    // Bathroom Cleaning
    4: {
        "Silver": {
            "1 BHK": { basePrice: 309, tax: 50 },
            "2 BHK": { basePrice: 599, tax: 70 },
            "3 BHK": { basePrice: 879, tax: 99 },
            "4 BHK": { basePrice: 999, tax: 99 },
            "5 BHK": { basePrice: 1199, tax: 149 }
        },
        "Gold": {
            "1 BHK": { basePrice: 409, tax: 50 },
            "2 BHK": { basePrice: 709, tax: 149 },
            "3 BHK": { basePrice: 1099, tax: 149 },
            "4 BHK": { basePrice: 1259, tax: 198 },
            "5 BHK": { basePrice: 1599, tax: 249 }
        }
    },
    // Water Proofing
    5: {
        "Standard": {
            "1 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "2 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "3 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "4 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "5 BHK": { basePrice: 0, tax: 0, consultationFee: 50 }
        }
    },
    // Texture Painting
    6: {
        "Standard": {
            "1 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "2 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "3 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "4 BHK": { basePrice: 0, tax: 0, consultationFee: 50 },
            "5 BHK": { basePrice: 0, tax: 0, consultationFee: 50 }
        }
    }
};

const extractPrice = (header) => {
    const matches = header.match(/\d+/);
    if (matches && matches[0]) {
        return parseInt(matches[0]);
    }
    return null;
};

const ProductView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = productData.find(p => p.id === parseInt(id));
    const [selectedMiniCard, setSelectedMiniCard] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addToCart } = useCart();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBackClick = () => {
        navigate('/');
    };

    const handleBookClick = (miniCard) => {
        setSelectedMiniCard(miniCard);
        setIsModalOpen(true);
    };

    const getServiceVariant = (miniCard) => {
        if (miniCard.productTitle.includes('Furnished') && miniCard.productTitle.includes('Silver')) return 'Furnished Silver';
        if (miniCard.productTitle.includes('Furnished') && miniCard.productTitle.includes('Gold')) return 'Furnished Gold';
        if (miniCard.productTitle.includes('UnFurnished') && miniCard.productTitle.includes('Silver')) return 'Unfurnished Silver';
        if (miniCard.productTitle.includes('UnFurnished') && miniCard.productTitle.includes('Gold')) return 'Unfurnished Gold';
        if (miniCard.productTitle.includes('Interior')) return 'Interior';
        if (miniCard.productTitle.includes('Exterior')) return 'Exterior';
        if (miniCard.productTitle.includes('Vacant')) return 'Vacant';
        if (miniCard.productTitle.includes('Non Vacant')) return 'Non Vacant';
        return 'Standard';
    };

    const getServicePrice = (miniCard) => {
        const variant = getServiceVariant(miniCard);
        return PRODUCT_PRICES[product.id]?.[variant]?.["1 BHK"] || 2000;
    };

    const getBHKPrices = () => {
        const variant = getServiceVariant(selectedMiniCard);
        return PRODUCT_PRICES[product.id]?.[variant] || {};
    };

    const handleAddToCart = (cartItem) => {
        addToCart({
            ...cartItem,
            productTitle: selectedMiniCard.productTitle,
            basePrice: cartItem.basePrice
        });
    };

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <div className='product-view-container p-5'>
                <button 
                    className="back-to-home-button" 
                    onClick={handleBackClick}
                >
                    ← Back to Home
                </button>
                <div className="row d-flex justify-content-center pt-5">
                    <div className="col-md-4 col-12">
                        <div className="product-view-header">{product.title}</div>
                        <div className="product-view-sub-text"><span>
                            <img className='product-star-icon mx-2' src={starIcon} alt="star-icon" />
                        </span>4.3 {product.productBookings}</div>
                        {product.serviceCard && product.serviceCard.length > 0 && (
                            <div className="row d-flex product-view-mini-container my-5">
                                {product.serviceCard.map((card, index) => (
                                    <img key={index} className='product-mini-cart-img' src={card.cardImg} alt={`service-${index}`} />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="col-md-8 col-12">
                        <img className="product-view-banner img-fluid" src={product.productBanner} alt={product.alt} />
                        {product.miniCards?.map((miniCard, index) => (
                            <div key={index}>
                                <div className="product-view-sub-header pb-3">{miniCard.productTitle}</div>
                                <div className="product-mini-card-container">
                                    <div className='text-center'>
                                        <img className="product-mini-card-img img-fluid" src={miniCard.productImg} alt="product-mini-card-img" />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center px-3 py-2">
                                        <div className="product-mini-card-rating"><span>
                                            <img className='product-mini-star-icon mx-2' src={starIcon} alt="star-icon" />
                                        </span>{miniCard.rating}</div>
                                        <button 
                                            type='button' 
                                            className='product-mini-book-btn'
                                            onClick={() => handleBookClick(miniCard)}
                                        >
                                            Book
                                        </button>
                                    </div>
                                    <div className="product-mini-card-header mx-3 pb-1 mb-1">
                                        {miniCard.header} <span className='mini-card-offer-txt'>{miniCard.offer}</span>
                                    </div>
                                    <div>
                                        <ul>
                                            {miniCard.features.map((feature, idx) => (
                                                <li key={idx} className='product-mini-card-description py-1'>{feature}</li>
                                            ))}
                                        </ul>
                                        {miniCard.extradetails && miniCard.extradetails.length > 0 && (
                                            <div className="extra-details-container">
                                                <div className="mini-card-features collapse" id={`collapseExample-${index}`}>
                                                    <div className="included-features-details px-3">Included</div>
                                                    <ul className='extra-details-custom-list my-3'>
                                                        {miniCard.extradetails.map((detail, idx) => (
                                                            <li key={idx} className='product-mini-card-description my-1'>
                                                                 <img src={checkMark} alt="icon" className='detail-icon' /> {detail}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="included-features-details px-3">Excluded</div>
                                                    <ul className='extra-details-custom-list my-3'>
                                                        {miniCard.extraDetailsExcluded?.map((detail, idx) => (
                                                            <li key={idx} className='product-mini-card-description my-1'>
                                                                 <img src={cancelMark} alt="icon" className='detail-icon-excluded' /> {detail}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <button className='features-view-more-button mb-2 mx-2' type='button'
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapseExample-${index}`}
                                                    aria-expanded="false"
                                                    aria-controls={`collapseExample-${index}`}>
                                                    View Details
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />

            {selectedMiniCard && (
                <ProductModal
                    isOpen={isModalOpen}
                    onClose={() => {
                        setIsModalOpen(false);
                        setSelectedMiniCard(null);
                    }}
                    product={product}
                    onAddToCart={handleAddToCart}
                    bhkPrices={getBHKPrices()}
                    serviceName={selectedMiniCard.productTitle}
                />
            )}
        </>
    );
}

export default ProductView;
