import React, { useState } from 'react';
import './ProductModal.css';

const BHK_TYPES = [
  { type: '1 BHK', multiplier: 1 },
  { type: '2 BHK', multiplier: 1.75 },
  { type: '3 BHK', multiplier: 2.5 },
  { type: '4 BHK', multiplier: 3.25 },
  { type: '5 BHK', multiplier: 4 },
];

const ProductModal = ({ isOpen, onClose, product, onAddToCart, initialPrice, serviceName }) => {
  const [selectedBHK, setSelectedBHK] = useState(null);
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (!selectedBHK) return;
    setQuantity(1);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 0 && newQuantity <= 5) {
      setQuantity(newQuantity);
      if (newQuantity === 0) {
        setSelectedBHK(null);
      }
    }
  };

  const calculatePrice = (bhk) => {
    return Math.round(initialPrice * bhk.multiplier);
  };

  const calculateTotal = () => {
    if (!selectedBHK || quantity === 0) return 0;
    return calculatePrice(selectedBHK) * quantity;
  };

  const handleConfirm = () => {
    if (selectedBHK && quantity > 0) {
      onAddToCart({
        id: `${product.id}-${selectedBHK.type}-${Date.now()}`,
        productId: product.id,
        productName: product.title,
        serviceName: serviceName,
        bhkType: selectedBHK.type,
        basePrice: calculatePrice(selectedBHK),
        quantity,
        rating,
        total: calculateTotal(),
      });
      onClose();
      setQuantity(0);
      setSelectedBHK(null);
      setRating(0);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Select Home Type</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        
        <div className="modal-body">
          <div className="service-name">{serviceName}</div>
          <div className="bhk-options">
            {BHK_TYPES.map((bhk) => (
              <div 
                key={bhk.type}
                className={`bhk-option ${selectedBHK?.type === bhk.type ? 'selected' : ''}`}
                onClick={() => setSelectedBHK(bhk)}
              >
                <span>{bhk.type}</span>
                <span>₹{calculatePrice(bhk)}</span>
              </div>
            ))}
          </div>

          <div className="rating-section">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= rating ? 'active' : ''}`}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {selectedBHK && quantity === 0 && (
            <button className="add-button" onClick={handleAddToCart}>
              Add
            </button>
          )}

          {selectedBHK && quantity > 0 && (
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
            </div>
          )}
        </div>

        {quantity > 0 && (
          <div className="modal-footer">
            <div className="total-amount">
              Total: ₹{calculateTotal()}
            </div>
            <button className="confirm-button" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal; 