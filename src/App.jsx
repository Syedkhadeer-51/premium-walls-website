import React from 'react';
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
import { UserProvider } from  './context/UserContext'

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
        <UserProvider>
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
        </UserProvider>
    );
}

export default App;
