import React, { useState } from 'react';
import BookingDateTime from './BookingDateTime';
import './ProductModal.css';
import starIcon from "../assets/starIcon.png"


const BHK_TYPES = [
  { type: '1 BHK' },
  { type: '2 BHK' },
  { type: '3 BHK' },
  { type: '4 BHK' },
  { type: '5 BHK' },
];

const STEPS = {
  SELECT_BHK: 'SELECT_BHK',
  SELECT_DATETIME: 'SELECT_DATETIME'
};

const ProductModal = ({ isOpen, onClose, product, onAddToCart, bhkPrices, serviceName }) => {
  const [currentStep, setCurrentStep] = useState(STEPS.SELECT_BHK);
  const [selectedBHK, setSelectedBHK] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleAddClick = (bhk) => {
    setSelectedBHK(bhk);
    setQuantity(1);
  };

  const handleQuantityChange = (newQuantity, bhk) => {
    if (newQuantity >= 0 && newQuantity <= 5) {
      if (newQuantity === 0) {
        setSelectedBHK(null);
        setQuantity(0);
      } else {
        setSelectedBHK(bhk);
        setQuantity(newQuantity);
      }
    }
  };

  const getPrice = (bhkType) => {
    return bhkPrices[bhkType] || 0;
  };

  const calculateTotal = () => {
    if (!selectedBHK || quantity === 0) return 0;
    return getPrice(selectedBHK.type) * quantity;
  };

  const handleProceedToDateTime = () => {
    setCurrentStep(STEPS.SELECT_DATETIME);
  };

  const handleBackToBHK = () => {
    setCurrentStep(STEPS.SELECT_BHK);
  };

  const handleDateTimeConfirm = (details) => {
    setBookingDetails(details);
    handleConfirm(details);
  };

  const handleConfirm = (dateTimeDetails) => {
    if (selectedBHK && quantity > 0) {
      onAddToCart({
        id: `${product.id}-${selectedBHK.type}-${Date.now()}`,
        productId: product.id,
        productName: product.title,
        serviceName: serviceName,
        bhkType: selectedBHK.type,
        basePrice: getPrice(selectedBHK.type),
        quantity,
        total: calculateTotal(),
        bookingDate: dateTimeDetails.date,
        bookingTime: dateTimeDetails.timeSlot
      });
      onClose();
      setQuantity(0);
      setSelectedBHK(null);
      setBookingDetails(null);
      setCurrentStep(STEPS.SELECT_BHK);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{currentStep === STEPS.SELECT_BHK ? 'Select Home Type' : 'Schedule Service'}</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body p-0">
          {currentStep === STEPS.SELECT_BHK ? (
            <>
              <div className="service-name">{serviceName}</div>
              <div className="bhk-options">
                {BHK_TYPES.map((bhk) => (
                  <div
                    key={bhk.type}
                    className={`bhk-option ${selectedBHK?.type === bhk.type ? 'selected' : ''}`}
                  >
                    <div>
                      <div>{bhk.type}</div>
                      <div className="product-mini-card-rating">
                        <span>
                          <img className='product-mini-star-icon' src={starIcon} alt="star-icon" />
                        </span>
                        <span className='mx-2'>4.2</span>
                      </div>
                      <div className='d-flex justify-content-start align-items-center'>
                        <div className='bhk-price'>₹{getPrice(bhk.type)}</div>
                        <ul className='m-0'>
                          <li className='p-0 bhk-time'>30mins</li>
                        </ul>
                      </div>
                    </div>
                    {selectedBHK?.type === bhk.type ? (
                      <div className="quantity-controls inline">
                        <button onClick={() => handleQuantityChange(quantity - 1, bhk)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(quantity + 1, bhk)}>+</button>
                      </div>
                    ) : (
                      <button
                        type='button'
                        className='product-mini-book-btn'
                        onClick={() => handleAddClick(bhk)}
                      >
                        Add
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <BookingDateTime
              onConfirm={handleDateTimeConfirm}
              onBack={handleBackToBHK}
            />
          )}
        </div>

        {currentStep === STEPS.SELECT_BHK && quantity > 0 && (
          <div className="modal-footer">
            <div className="total-amount">
              Total: ₹{calculateTotal()}
            </div>
            <button className="confirm-button" onClick={handleProceedToDateTime}>
              Proceed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal; 