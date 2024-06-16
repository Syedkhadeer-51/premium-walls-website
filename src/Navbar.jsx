import React from 'react'
import logoImage from '../src/assets/premium-walls-logo.png'
const Navbar = () => {
    return (
        <nav className='text-white'>
            <div className="container-fluid position-absolute">
                <div className='justify-content-around'>
                    <ul className='navbar-nav d-flex flex-row justify-content-around bg-transparent my-3'>
                        <li className="mx-3 px-3">
                            <img className='img-fluid logo-icon' src={logoImage} alt="logo-img" />
                        </li>
                        <li className="nav-item mx-3 px-3">
                            <a className="nav-link" href="#heroSectio">Home</a>
                        </li>
                        <li className="nav-item mx-3 px-3">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item mx-3 px-3">
                            <a className="nav-link" href="#choose">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar