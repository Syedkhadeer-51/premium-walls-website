import React from 'react'

const Navbar = () => {
    return (
        <nav className='text-white'>
            <div className="container-fluid position-absolute">
                <div className='justify-content-end'>
                    <ul className='navbar-nav d-flex flex-row justify-content-end bg-transparent my-3'>
                        <li className="nav-item mx-3 px-3">
                            <a className="nav-link" href="#About">ABOUT</a>
                        </li>
                        <li className="nav-item mx-3 px-3">
                            <a className="nav-link" href="#Packages">PACKAGES</a>
                        </li>
                        <li className="nav-item mx-3 px-3">
                            <a className="nav-link" href="#contact">CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar