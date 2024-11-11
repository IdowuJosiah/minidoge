"use client"
import React, { useState } from 'react';
import './footer.scss';
import { RiTwitterFill } from "react-icons/ri";
import { FaTelegramPlane } from 'react-icons/fa';
import Image from 'next/image';
import Dex from '../../../public/dex-screener-seeklogo.png'

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const code = "96QmMPAiy79EJcvKc7nLzdPqFHrVuFrha6yUgLb4pump";

  const handleCopy = () => {
    console.log('clicked');
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    });
  };

  return (
    <div className='footer-section' id='contact'>
      <header className='footer-header'>Get $JUSTABLACKHOLE here</header>
      <button className='copy-button' onClick={handleCopy}>96QmMPAiy79EJcvKc7nLzdPqFHrVuFrha6yUgLb4pump</button>
      <div className="footer-icons">
          <div className="links">
              <a href="https://x.com/zerepooch" className="">
                  <RiTwitterFill/>
              </a>
          </div>
          <div className="links">
              <a href="https://x.com/zerepooch" className="">
                  <FaTelegramPlane />
              </a>
          </div>
          <div className="links">
              <a href="https://dexscreener.com/solana/2pkcdg1sqq4urrh8rp8syensbwudjb5sgz5dngnk13ks" className="">
                  <Image src={Dex} alt=''/>
              </a>
          </div>
      </div>

      <span className={`tooltip ${copied ? 'show' : ''}`}>Copied to clipboard</span>
    </div>
  );
};

export default Footer;
