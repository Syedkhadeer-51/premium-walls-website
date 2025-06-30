import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from './context/CartContext';
import logoImage from '../src/assets/navbar-logo.png';
import LoginModal from './components/LoginModal';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { cartItems } = useCart();
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleHomeClick = () => {
        if (location.pathname === '/') {
            // If already on home page, scroll to hero section
            const heroSection = document.getElementById('heroSection');
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to home page
            navigate('/');
        }
    };

    const handleServicesClick = () => {
        if (location.pathname === '/') {
            // If on home page, scroll to services section
            const servicesSection = document.getElementById('servicesContainer');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to home page and scroll to services
            navigate('/');
            setTimeout(() => {
                const servicesSection = document.getElementById('servicesContainer');
                if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    const handleContactClick = () => {
        if (location.pathname === '/') {
            // If on home page, scroll to contact section
            const contactSection = document.getElementById('contactUs');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to home page and scroll to contact
            navigate('/');
            setTimeout(() => {
                const contactSection = document.getElementById('contactUs');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top p-3'>
            <div className='container-fluid'>
                <a className='navbar-brand d-flex align-items-center' href='#' onClick={handleLogoClick}>
                    <img className='navbar-logo-icon' src={logoImage} alt='logo-img' style={{ height: '40px', marginRight: '15px' }} />
                </a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#' onClick={handleHomeClick}>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#' onClick={handleServicesClick}>Services</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#' onClick={handleContactClick}>Contact Us</a>
                        </li>
                    </ul>
                    <div className='d-flex mx-3 gap-2'>
                        <button 
                            className='btn cart-btn position-relative' 
                            type='button'
                            onClick={handleCartClick}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Cart
                            {cartItems.length > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>
                        <button className='btn login-btn' type='button' onClick={handleLoginClick}>Login</button>
                    </div>
                </div>
            </div>
            {showLoginModal && (
                <LoginModal
                    onLogin={(user) => {
                        // You can store user in context or state here if needed
                        setShowLoginModal(false);
                    }}
                />
            )}
        </nav>
    );
}

export default Navbar;
