"use client"
import styles from "./page.module.scss";
import './globals.css'
import Footer from "@/components/footer/footer";


export default function Home() {

  return (
    <>
    

        <div className={styles.container}> 
          <div className={styles.banner__section} id="home">
              <div className="banner-bacground-image">
                  <img
                      className="rottate-image videobanner desktop"
                      src="photo_2024-12-08 01.26.29.jpeg" // Replace with the path to your video file

                  />
                  <img
                      className="rottate-image videobanner mobile"
                      src="photo_2024-12-08 01.26.29.jpeg" // Replace with the path to your video file

                  />
              </div>
            <div className={styles.banner__section__overlay}>
                    <div className="header-divo">
                        <h1 className="header-landing">
                            $MINIDOGE CTO
                        </h1>
                    </div>
              <div className={styles.cta__buttons}>
                <button className={styles.buy__button}><a style={{textDecoration:"none", color:"inherit"}} href="https://jup.ag/swap/SOL-8J6CexwfJ8CSzn2DgWhzQe1NHd2hK9DKX59FCNNMo2hu">Buy Now</a> </button>
                <button className={styles.get__button}> <a style={{textDecoration:"none", color:"inherit"}} href="https://dexscreener.com/solana/cfwwtfeyr4ai9tmpbte21jsewhum3pmytaluf9x2b5ej">Get on Dex</a></button>
              </div>
            </div>
              <div>
                  <div className={styles.meme__gallery} id="gallery">
                      <div className={styles.meme}>
                          <img src="/IMG_3595.JPG" alt="#"/>
                      </div>

                      <div className={styles.meme}>
                          <img src="/IMG_3597.JPG" alt="#"/>
                      </div>

                      <div className={styles.meme}>
                          <img src="/IMG_3598.JPG" alt="#"/>
                      </div>
                  </div>

                  <Footer/>
              </div>
          </div>


        </div>


    </>
  );
}
