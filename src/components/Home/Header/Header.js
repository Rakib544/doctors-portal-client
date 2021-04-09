import React from 'react';
import HeaderMian from './HeaderMain/HeaderMian';
import Navbar from './Navbar/Navbar';
import './Header.css'
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar />
            <HeaderMian />
            <BusinessInfo />
        </div>
    );
};

export default Header;