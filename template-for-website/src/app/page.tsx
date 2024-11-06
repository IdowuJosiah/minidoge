"use client"
import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import NavigationBar from "@/components/navbar/navbar";
import './globals.css'
import Footer from "@/components/footer/footer";
import SlideOutWords from "@/components/slide-text/slide-text";



export default function Home() {
  const words = ['Hello there', ' Buck Welcomes you', 'To The future'];
  const [showMainContent, setShowMainContent] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
     {!showMainContent ? (
      <SlideOutWords 
        words={words} 
        onComplete={() => setShowMainContent(true)} 
      />
    ) : (
      

        <div className={styles.container}> 
          <NavigationBar/>
          <div className={styles.banner__section} id="home">
            {/* <video className={styles.banner__image} src={BannerVideo} alt=''/> */}
            <video
              ref={videoRef}
              className={styles.banner__video}
              width="100%"
              height="100%"
              src='-7780751749536911421.MP4'

              // onEnded={handleVideoEnd} // Reset to paused state when video ends
            >
            </video>
            <div className={styles.banner__section__overlay}>
              <p>Hey its zack</p>
              <p className={styles.ma}>It&apos;s ASTROCHIMP. GON TAKE YOU TO MARS</p>
              <span>Let&apos;s GET you to MARS.</span>

              <div className={styles.cta__buttons}>
                <button className={styles.buy__button}><a style={{textDecoration:"none", color:"inherit"}} href="https://jup.ag/swap/SOL-8SuMAjoZeLGaaekNHP235Dv4soXsrcseFXefT3A9pump">Buy Now</a> </button>
                <button className={styles.get__button}> <a style={{textDecoration:"none", color:"inherit"}} href="https://dexscreener.com/solana/gq3wzaougwmpcsvxzvyjlkipf7bri3nw8rupilsxfs8w">Get on Dex</a></button>
              </div>
            </div>
          </div>
          <div className={styles.about__section} id="about">
            <header>Discover the Power of the ASTROCHIMP The HAM</header>

            <b>About ASTROCHIMP</b>
            <p>
              Ham wasnt always known by that name. Originally designated as No. 65, he was renamed after the Holloman Aerospace Medical Center, where he underwent rigorous training.
            </p>



          </div>


          <div className={styles.meme__gallery} id="gallery">


             <div className={styles.meme}>
              <Image src="/IMG_3007.JPG" alt="#"/>
             </div>

             <div className={styles.meme}>
              <Image src="/IMG_3008.JPG" alt="#"/>
             </div>

             <div className={styles.meme}>
              <Image src="/IMG_3009.JPG" alt="#"/>
             </div>

             <div className={styles.meme}>
              <Image src="/IMG_3010.JPG" alt="#"/>
             </div>

             <div className={styles.meme}>
              <Image src="/IMG_3011.JPG" alt="#"/>
             </div>

              <div className={styles.meme}>
                  <Image src="/IMG_3012.JPG" alt="#"/>
              </div>

              <div className={styles.meme}>
                  <Image src="/IMG_3013.JPG" alt="#"/>
              </div>

              <div className={styles.meme}>
                  <Image src="/IMG_3014.JPG" alt="#"/>
              </div>

            <div className={styles.meme}>
              <Image src="/IMG_3015.JPG" alt="#"/>
            </div>


          </div>


          <Footer/>
        </div>
      )}

    </>
  );
}
