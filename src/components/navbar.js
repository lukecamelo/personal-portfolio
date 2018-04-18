import React from 'react';
import './navbar.css';

const navbar = () => {
    return (
        <div className='Navbar'>
            <a href="#" className="navItem">About</a>
            <a href="#" className="navItem">What I know</a>
            <a href="#" className="navItem">Projects</a>
            <a href="" className="navItem">Contact</a>
        </div>
    );
}

export default navbar;