// src/components/ProductView.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
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
import vacantKitchenCleaningIcon from "../src/assets/vacantKitchenCleaningIcon.png"
import nonvacantKitchenCleaningIcon from "../src/assets/nonvacantKitchenCleaningIcon.png"
import bathroomCleaningBanner from "../src/assets/bathroomCleaningBanner.png"
import bathroomCleaningSilverIcon from "../src/assets/bathroomCleaningSilverIcon.png"
import bathroomCleaningGoldIcon from "../src/assets/bathroomCleaningGoldIcon.png"
import waterProofingBanner from "../src/assets/waterProofingBanner.png"
import waterProofingIcon from "../src/assets/waterProofingIcon.png"
import texturePaintingBanner from "../src/assets/texturePaintingBanner.png"
import texturePaintingIcon from "../src/assets/texturePaintingIcon.png"
import starIcon from "../src/assets/starIcon.png"







import Footer from './Footer';

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
                header: "Starts at ₹2099",
                features: [
                    "Wiping & mopping of floor & balcony, bathroom deep cleaning",
                    "Dry dusting of ceiling, walls & windows, dry vacuuming of furniture"
                ]
            }, {
                productTitle: "Furnished apartment ( Gold )",
                productImg: furnishedApartmentGoldIcon,
                rating: 4.3,
                header: "Starts at ₹3299",
                features: [
                    "Deep cleaning of bedroom, living room, bathroom, kitchen & balcony",
                    "Floor deep cleaning by single disc machine, vacuuming of sofa & carpets"
                ]
            }, {
                productTitle: "UnFurnished apartment ( Silver )",
                productImg: unfurnishedApartmentSilverIcon,
                rating: 4.3,
                header: "Starts at ₹2549",
                features: [
                    "Wiping & mopping of floor & balcony, bathroom deep cleaning",
                    "Dry dusting of ceiling, walls & windows"
                ]
            }, {
                productTitle: "UnFurnished apartment ( Gold )",
                productImg: unfurnishedApartmentGoldIcon,
                rating: 4.3,
                header: "Starts at ₹3839",
                features: [
                    "Wiping & mopping of floor & balcony, bathroom deep cleaning",
                    "Dry dusting of ceiling, walls & windows"
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

const ProductView = () => {
    const { id } = useParams();
    const product = productData.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <div className='product-view-container p-5'>
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
                        <img className="product-view-banner" src={product.productBanner} alt={product.alt} />
                        {product.miniCards?.map((miniCard, index) => (
                            <div key={index}>
                                <div className="product-view-sub-header pb-3">{miniCard.productTitle}</div>
                                <div className="product-mini-card-container">
                                    <div className='text-center'>
                                        <img className="product-mini-card-img" src={miniCard.productImg} alt="product-mini-card-img" />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center px-3 py-2">
                                        <div className="product-mini-card-rating"><span>
                                            <img className='product-mini-star-icon mx-2' src={starIcon} alt="star-icon" />
                                        </span>{miniCard.rating}</div>
                                        <button type='button' className='product-mini-book-btn'>Book</button>
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductView;
