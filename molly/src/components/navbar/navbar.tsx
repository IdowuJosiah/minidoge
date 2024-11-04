import React from 'react';
import './navbar.scss';

const NavigationBar = () => {
  return (
    <div className='navigation-bar'>
        <div className="navigation-content">
            <a href="#home">Home</a>
            <a href="#about">About Molly</a>
            <a href="#contact">Contact Address</a>
        </div>
    </div>
  );
}

export default NavigationBar;
