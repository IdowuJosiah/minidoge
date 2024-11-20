"use client"
import React, { useState } from 'react';
import './footer.scss';
import { RiTwitterFill } from "react-icons/ri";
import { FaTelegramPlane } from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";
import Image from 'next/image';
import Dex from '../../../public/dex-screener-seeklogo.png'

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const code = "VhAk1GMq1AtRZRkVQmsLpYXTrG1ZS3UoiFUPyMFpump";

  const handleCopy = () => {
    console.log('clicked');
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    });
  };

  return (
    <div className='footer-section' id='contact'>
        <div className="copy-button-div">
            <button className='copy-button' onClick={handleCopy}>VhAk1GMq1AtRZRkVQmsLpYXTrG1ZS3UoiFUPyMFpump</button>
            <div className="copy-button-search">
                <p>
                    <FaSearch className="icon" />
                </p>
            </div>
        </div>
      <div className="footer-icons">
          <div className="links">
              <a href="https://t.me/tweak_Portal" className="">
                  <RiTwitterFill/>
              </a>
          </div>
          <div className="links">
              <a href="https://x.com/zerepooch" className="">
                  <FaTelegramPlane />
              </a>
          </div>
          <div className="links">
              <a href="https://dexscreener.com/solana/fgqc4pcpwg9ohyzdqmvbynrneby2novvpsyhbwgjyo3qlo" className="">
                  <Image src={Dex} alt=''/>
              </a>
          </div>
      </div>

      <span className={`tooltip ${copied ? 'show' : ''}`}>Copied to clipboard</span>
    </div>
  );
};

export default Footer;
