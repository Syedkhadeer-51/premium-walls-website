import React from 'react';
import logoImage from '../src/assets/navbar-logo.png';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top p-3'>
            <div className='container-fluid'>
                <a className='navbar-brand d-flex align-items-center' href='#'>
                    <img className='navbar-logo-icon' src={logoImage} alt='logo-img' style={{ height: '40px', marginRight: '15px' }} />
                </a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#heroSection'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#servicesContainer'>Services</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#contactUs'>Contact Us</a>
                        </li>
                    </ul>
                    <div className='d-flex mx-3'>
                        <button className='btn login-btn' type='button'>Login</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
