import ProductCard from './ProductCard';
import paintingImg from "../src/assets/painting.png";
import homeCleaningImg from "../src/assets/home-cleaning.png";
import kitchenCleaning from "../src/assets/kitchen-cleaning.png";
import bathroomServiceImg from "../src/assets/Bathroom-cleaning.png";
import waterProofingImg from "../src/assets/water-proofing.png";
import textureServiceCleaning from "../src/assets/texture-service.png";


const productData = [
    { id: 1, img: paintingImg, alt: "painting", title: "Painting", description: "Revitalise the heart of your home with our painting service" },
    { id: 2, img: homeCleaningImg, alt: "home-cleaning", title: "Home cleaning", description: "Elevate the essence of your home with our home cleaning solutions" },
    { id: 3, img: kitchenCleaning, alt: "kitchen-cleaning", title: "Kitchen cleaning", description: "Elevate the essence of your home with our home cleaning solutions" },
    { id: 4, img: bathroomServiceImg, alt: "bathroom-cleaning", title: "Bathroom cleaning", description: "Refresh your sanctuary with our meticulous bathroom cleaning" },
    { id: 5, img: waterProofingImg, alt: "water-proofing", title: "Water proofing", description: "Shield your space with our expert waterproofing solutions" },
    { id: 6, img: textureServiceCleaning, alt: "texture-service", title: "Texture", description: "Add depth and character with our premium texture services" }
];


const OtherProductView = () => {
    return (
        <div className='product-container' id='servicesContainer'>
            <div className="row d-flex align-items-center">
                <div className="col-md-6 col-12 product-header">
                    <div className='product-container-title py-2'>Smart Travel Hub</div>
                    <div className='product-description py-2'>Discover our complete range of home services tailored to meet your need.</div>
                </div>
            </div>
            <div className="row d-flex justify-content-center pt-5 pb-3">
                {productData.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default OtherProductView;
