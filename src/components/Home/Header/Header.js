import React from 'react';
import HeaderMian from './HeaderMain/HeaderMian';
import './Header.css'
import Navbar from '../../SharedComoponents/Navbar/Navbar'
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