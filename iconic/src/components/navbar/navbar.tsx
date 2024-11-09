import React from 'react';
import './navbar.scss';

const NavigationBar = () => {
  return (
    <div className='navigation-bar'>
        <div className="navigation-content">
            <a href="#home">Home</a>
            <a href="#about">About ICONIC</a>
            <a href="#contact">Contract Address</a>
        </div>
    </div>
  );
}

export default NavigationBar;
