"use client"
import React, { useState } from 'react';
import './footer.scss';
import { RiTwitterFill } from "react-icons/ri";
import { FaTelegramPlane } from 'react-icons/fa';
import Image from 'next/image';
import Dex from '../../../public/dex-screener-seeklogo.png'

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const code = "Ghe6ADeD68s56VezA8T6KejzSTZRzHd3R9ZjtT9xpump";

  const handleCopy = () => {
    console.log('clicked');
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    });
  };

  return (
    <div className='footer-section' id='contact'>
      <header className='footer-header'>Get some ZEREPOOCH here</header>
      <button className='copy-button' onClick={handleCopy}>Ghe6ADeD68s56VezA8T6KejzSTZRzHd3R9ZjtT9xpump</button>
      <div className="footer-icons">
          <div className="links">
              <a href="https://x.com/zerepooch" className="">
                  <RiTwitterFill/>
              </a>
          </div>
          <div className="links">
              <a href="https://t.me/zerepooch_cto" className="">
                  <FaTelegramPlane />
              </a>
          </div>
          <div className="links">
              <a href="https://dexscreener.com/solana/45hdxara8gsfxhsefei6ckeeb9gngmfq1shkvdarbpuf" className="">
                  <Image src={Dex} alt=''/>
              </a>
          </div>
      </div>

      <span className={`tooltip ${copied ? 'show' : ''}`}>Copied to clipboard</span>
    </div>
  );
};

export default Footer;
