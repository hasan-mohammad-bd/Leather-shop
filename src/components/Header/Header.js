import React from 'react';
import logo from "../../image/logo.png"
import "./Header.css"

const Header = () => {
    return (
        <div className='logo-container'>
            <img src={logo} alt="" />
            <h4>Choose 4 products from our store</h4>
        </div>

    );
};

export default Header;