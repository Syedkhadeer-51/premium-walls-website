import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './CartSummary.css';

const CartSummary = () => {
  const { cartItems, getCartTotal, removeFromCart } = useCart();
  const [isExpanded, setIsExpanded] = useState(false);

  if (cartItems.length === 0) return null;

  return (
    <div className={`cart-summary ${isExpanded ? 'expanded' : ''}`}>
      <div className="cart-summary-content">
        <div className="cart-header" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="cart-items-count">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </div>
          <div className="cart-total">
            Total: ₹{getCartTotal()}
          </div>
          <button className="expand-button">
            {isExpanded ? '▼' : '▲'}
          </button>
        </div>

        {isExpanded && (
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <h3>{item.productName}</h3>
                  <p>{item.bhkType} - ₹{item.basePrice} × {item.quantity}</p>
                  <div className="item-rating">
                    {Array.from({ length: item.rating }, (_, i) => (
                      <span key={i} className="star active">★</span>
                    ))}
                  </div>
                </div>
                <div className="cart-item-actions">
                  <span className="item-total">₹{item.total}</span>
                  <button 
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <button className="checkout-button">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary; 