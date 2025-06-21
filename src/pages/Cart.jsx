import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Cart.css';

const Cart = () => {
    const navigate = useNavigate();
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

    const handleBackToHome = () => {
        navigate('/');
    };

    const handleCheckout = () => {
        // TODO: Implement checkout functionality
        console.log('Proceeding to checkout...');
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
                                    <button className="checkout-button" onClick={handleCheckout}>
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart; 