"use client"
import React, { useState } from 'react';
import './footer.scss';
import { RiTwitterFill } from "react-icons/ri";
import { FaTelegramPlane } from 'react-icons/fa';
import Image from 'next/image';
import Dex from '../../../public/dex-screener-seeklogo.png'

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const code = "5MaeW2ARKTHh4vLjSwd4HyJqZB8WCp9UBwbFzXAtpump";

  const handleCopy = () => {
    console.log('clicked');
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    });
  };

  return (
    <div className='footer-section' id='contact'>
      <header className='footer-header'>Get some BUCK here</header>
      <button className='copy-button' onClick={handleCopy}>CONTRACT ADDRESS</button>
      <div className="footer-icons">
          <div className="links">
              <a href="https://x.com/BucktoabuckCTO" className="">
                  <RiTwitterFill/>
              </a>
          </div>
          <div className="links">
              <a href="https://t.me/BucktoabuckCTO" className="">
                  <FaTelegramPlane />
              </a>
          </div>
          <div className="links">
              <a href="https://dexscreener.com/solana/6w8xruuy8aai3haug5n1evauemsfa7a55d532d7scg18" className="">
                  <Image src={Dex} alt=''/>
              </a>
          </div>
      </div>

      <span className={`tooltip ${copied ? 'show' : ''}`}>Copied to clipboard</span>
    </div>
  );
};

export default Footer;
