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
      <header className='footer-header'> $TRUST THE BUY</header>
        <div className="copy-button-div">
            <button className='copy-button' onClick={handleCopy}>AsZbLhzi1MgxKKD1SceeUCyxkmHxNZy7dvo89AZEpump</button>
        </div>
      <div className="footer-icons">
          <div className="links">
              <a href="https://x.com/TRUST_CTO_" className="">
                  <RiTwitterFill/>
              </a>
          </div>
          <div className="links">
              <a href="https://x.com/zerepooch" className="">
                  <FaTelegramPlane />
              </a>
          </div>
          <div className="links">
              <a href="https://dexscreener.com/solana/bbmxkqr1tcwswn4blqmk6usvejjdfkizowpzzqwtiqgt" className="">
                  <Image src={Dex} alt=''/>
              </a>
          </div>
      </div>

      <span className={`tooltip ${copied ? 'show' : ''}`}>Copied to clipboard</span>
    </div>
  );
};

export default Footer;
