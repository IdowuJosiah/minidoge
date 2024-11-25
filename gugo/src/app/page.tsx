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
                      src="/IMG_3371.JPG" // Replace with the path to your video file

                  />
                  <img
                      className="rottate-image videobanner mobile"
                      src="/IMG_3369.JPG" // Replace with the path to your video file

                  />
              </div>
            <div className={styles.banner__section__overlay}>
                    <div className="header-divo">
                        <h1 className="header-landing">
                            $GUGO CTO
                        </h1>
                    </div>
              <div className={styles.cta__buttons}>
                <button className={styles.buy__button}><a style={{textDecoration:"none", color:"inherit"}} href="https://jup.ag/swap/SOL-EM2xa9mWsVKkDUP3KGfy7WxC1vXS7FdTgARdnZzrpump">Buy Now</a> </button>
                <button className={styles.get__button}> <a style={{textDecoration:"none", color:"inherit"}} href="https://dexscreener.com/solana/6nuhxztpq38ct2xuryzundvcivhu4hca1tstt7k7ycru">Get on Dex</a></button>
              </div>
            </div>
            <div>
                <div className={styles.meme__gallery} id="gallery">
                    <div className={styles.meme}>
                        <img src="/IMG_3373.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <img src="/IMG_3371.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <img src="/IMG_3376.JPG" alt="#"/>
                    </div>

                </div>
                <Footer/>
            </div>
          </div>






        </div>


    </>
  );
}
