// src/pages/Cart.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Cart.css';

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, getCartTotal, clearCart } = useCart();

    // Add state for user info and form/modal
    const [showUserForm, setShowUserForm] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userContact, setUserContact] = useState('');
    const [userAddress, setUserAddress] = useState('');

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    // WhatsApp order handler
    const handlePlaceOrder = () => {
        
        const whatsappNumber = '9986583598'; 

        // Build the message
        let message = 'New Order from Premium Walls Website:%0A%0A';
        cartItems.forEach((item, idx) => {
            message += `Item ${idx + 1}:%0A`;
            message += `Service: ${item.serviceName}%0A`;
            message += `Type: ${item.bhkType}%0A`;
            message += `Quantity: ${item.quantity}%0A`;
            message += `Date: ${formatDate(item.bookingDate)}%0A`;
            message += `Time: ${item.bookingTime}%0A`;
            message += `Total: ₹${item.total}%0A%0A`;
        });
        message += `Order Total: ₹${getCartTotal()}%0A%0A`;
        message += `Customer Name: ${userName}%0A`;
        message += `Email: ${userEmail}%0A`;
        message += `Contact: ${userContact}%0A`;
        message += `Address: ${userAddress}%0A`;

        // Open WhatsApp
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        setShowUserForm(false);
        // Optionally, clear the cart after sending
        // clearCart();
    };

    if (cartItems.length === 0) {
        return (
            <>
                <Navbar />
                <div className="cart-page">
                    <div className="cart-container my-5 p-3">
                        <div className="cart-header my-5">
                            <button className="back-button" onClick={handleBackToHome}>
                                ← Back to Home
                            </button>
                            <h1>Shopping Cart</h1>
                        </div>
                        <div className="empty-cart">
                            <div className="empty-cart-icon">🛒</div>
                            <h2>Your cart is empty</h2>
                            <p>Looks like you haven't added any services to your cart yet.</p>
                            <div className="empty-cart-actions">
                                <button className="continue-shopping-btn" onClick={handleBackToHome}>
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="cart-page">
                <div className="cart-container my-5 p-3">
                    <div className="cart-header">
                        <button className="back-button" onClick={handleBackToHome}>
                            ← Back to Home
                        </button>
                        <h1>Shopping Cart</h1>
                    </div>
                    <div className="cart-content">
                        <div className="cart-items-section">
                            <div className="cart-items-header">
                                <h2>Cart Items ({cartItems.length})</h2>
                                <button className="continue-shopping-btn-small" onClick={handleBackToHome}>
                                    Continue Shopping
                                </button>
                            </div>
                            <div className="cart-items">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <div className="cart-item-header">
                                            <h3>{item.serviceName}</h3>
                                            <button
                                                className="remove-button"
                                                onClick={() => removeFromCart(item.id)}
                                                title="Remove item"
                                            >
                                                ×
                                            </button>
                                        </div>
                                        <div className="cart-item-details">
                                            <div className="item-info">
                                                <p className="item-type">
                                                    <strong>Type:</strong> {item.bhkType}
                                                </p>
                                                <p className="item-quantity">
                                                    <strong>Quantity:</strong> {item.quantity}
                                                </p>
                                            </div>
                                            <div className="booking-details">
                                                <p className="booking-date">
                                                    <strong>Date:</strong> {formatDate(item.bookingDate)}
                                                </p>
                                                <p className="booking-time">
                                                    <strong>Time:</strong> {item.bookingTime}
                                                </p>
                                            </div>
                                            <div className="price-breakdown">
                                                {item.basePrice > 0 && (
                                                    <p className="price-item">
                                                        <span>Base Price:</span> ₹{item.basePrice}
                                                    </p>
                                                )}
                                                {item.tax > 0 && (
                                                    <p className="price-item">
                                                        <span>Tax:</span> ₹{item.tax}
                                                    </p>
                                                )}
                                                {item.consultationFee > 0 && (
                                                    <p className="price-item">
                                                        <span>Consultation:</span> ₹{item.consultationFee}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="item-total">
                                                <strong>Total:</strong> ₹{item.total}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="cart-summary-section">
                            <div className="cart-summary">
                                <h3>Order Summary</h3>
                                <div className="summary-details">
                                    <div className="summary-row">
                                        <span>Items ({cartItems.length}):</span>
                                        <span>₹{getCartTotal()}</span>
                                    </div>
                                    <div className="summary-total">
                                        <span>Total Amount:</span>
                                        <span>₹{getCartTotal()}</span>
                                    </div>
                                </div>
                                <div className="cart-actions">
                                    <button className="continue-shopping-btn" onClick={handleBackToHome}>
                                        Continue Shopping
                                    </button>
                                    <button className="checkout-button" onClick={() => setShowUserForm(true)}>
                                        Place Order via WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showUserForm && (
                <div className="modal-overlay">
                    <div className="modal-content" style={{ maxWidth: 400 }}>
                        <h2>Enter Your Details</h2>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                handlePlaceOrder();
                            }}
                        >
                            <div className="form-group">
                                <label htmlFor="userName">Your Name</label>
                                <input
                                    id="userName"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={userName}
                                    onChange={e => setUserName(e.target.value)}
                                    required
                                    className="form-input"
                                    autoComplete="name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userEmail">Email</label>
                                <input
                                    id="userEmail"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={userEmail}
                                    onChange={e => setUserEmail(e.target.value)}
                                    required
                                    className="form-input"
                                    autoComplete="email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userContact">Contact Number</label>
                                <input
                                    id="userContact"
                                    type="text"
                                    placeholder="Enter contact number"
                                    value={userContact}
                                    onChange={e => setUserContact(e.target.value)}
                                    required
                                    className="form-input"
                                    autoComplete="tel"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userAddress">Full Address</label>
                                <input
                                    id="userAddress"
                                    type="text"
                                    placeholder="Enter your complete address"
                                    value={userAddress}
                                    onChange={e => setUserAddress(e.target.value)}
                                    required
                                    className="form-input"
                                    autoComplete="street-address"
                                />
                                <small className="address-hint">* Please enter your full address carefully, including city and PIN code.</small>
                            </div>
                            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                                <button type="submit" className="checkout-button" style={{ flex: 1 }}>
                                    Send Order
                                </button>
                                <button
                                    type="button"
                                    className="continue-shopping-btn-small"
                                    style={{ flex: 1 }}
                                    onClick={() => setShowUserForm(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Cart;