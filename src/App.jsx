import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import OurServices from './Ourservices';
import './index.css';
import Trust from './Trust';
import ChooseUs from './chooseUs';
import Contact from './Contact';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import Acheivments from './Acheivments';
import Testimonial from './Testimonial';
import Partner from './Partner';
import Footer from './Footer';
import Products from './Products';
import ProductView from './ProductView';
import OtherproductView from './OtherProductView';
import TermsAndConditions from './TermsAndConditions';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';

// Screen Size Restriction Component
function ScreenSizeRestriction({ children }) {
    const [isScreenLargeEnough, setIsScreenLargeEnough] = useState(window.innerWidth >= 800);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenLargeEnough(window.innerWidth >= 800);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isScreenLargeEnough) {
        return (
            <div style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                padding: '20px',
                boxSizing: 'border-box'
            }}>
                <div style={{
                    maxWidth: '400px',
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e0e0e0'
                }}>
                    <div style={{
                        fontSize: '48px',
                        marginBottom: '20px',
                        color: '#333'
                    }}>
                        💻
                    </div>
                    <h1 style={{
                        fontSize: '24px',
                        marginBottom: '16px',
                        color: '#333',
                        fontWeight: '600'
                    }}>
                        Open on Laptop
                    </h1>
                    <p style={{
                        fontSize: '16px',
                        color: '#666',
                        lineHeight: '1.5',
                        margin: '0'
                    }}>
                        This website is optimized for desktop and laptop screens. 
                        Please open it on a device with a screen width of 800px or larger.
                    </p>
                </div>
            </div>
        );
    }

    return children;
}

function Home() {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <Products/>
            <Trust/>
            <OurServices/>
            <Acheivments/>
            <ChooseUs/>
            <Testimonial/>
            <Contact/>
            <Partner/>
            <Footer/>
        </>
    );
}

function App() {
    return (
        <ScreenSizeRestriction>
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<ProductView />} />
                        <Route path="/OtherproductView" element={<OtherproductView />} />
                        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </Router>
            </CartProvider>
        </ScreenSizeRestriction>
    );
}

export default App;
