import React from 'react';
import { useCart } from '../context/CartContext';
import './CartSummary.css';

const CartSummary = () => {
    const { cartItems, removeFromCart, getCartTotal } = useCart();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-summary empty-cart">
                <p>Your cart is empty</p>
            </div>
        );
    }

    return (
        <div className="cart-summary">
            <h2>Cart Summary</h2>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div className="cart-item-header">
                            <h3>{item.serviceName}</h3>
                            <button
                                className="remove-button"
                                onClick={() => removeFromCart(item.id)}
                            >
                                ×
                            </button>
                        </div>
                        <div className="cart-item-details">
                            <p className="item-type">{item.bhkType}</p>
                            <p className="item-quantity">Quantity: {item.quantity}</p>
                            <div className="booking-details">
                                <p className="booking-date">
                                    <span>Date:</span> {formatDate(item.bookingDate)}
                                </p>
                                <p className="booking-time">
                                    <span>Time:</span> {item.bookingTime}
                                </p>
                            </div>
                            <p className="item-price">₹{item.total}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                <span>Total Amount:</span>
                <span>₹{getCartTotal()}</span>
            </div>
            <button className="checkout-button">
                Proceed to Checkout
            </button>
        </div>
    );
};

export default CartSummary; 