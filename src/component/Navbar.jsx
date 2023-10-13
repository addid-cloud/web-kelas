import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className='navbar'>
            <div className='logo'>
                <h2>Logo</h2>
            </div>
            <div className={`menu-toggle ${isActive ? 'active' : ''}`} onClick={toggleNavbar}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                <li>
                    <Link to='/' onClick={toggleNavbar}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/galeri' onClick={toggleNavbar}>
                        Galeri
                    </Link>
                </li>
                {/* Tambahkan lebih banyak item menu di sini */}
            </ul>
        </nav>
    );
}

export default Navbar;
