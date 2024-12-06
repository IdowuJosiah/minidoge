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
                      src="photo_2024-12-06 21.41.35.jpeg" // Replace with the path to your video file

                  />
                  <img
                      className="rottate-image videobanner mobile"
                      src="/photo_2024-12-06 21.41.35.jpeg" // Replace with the path to your video file

                  />
              </div>
            <div className={styles.banner__section__overlay}>
                    <div className="header-divo">
                        <h1 className="header-landing">
                            $GOATMAS CTO
                        </h1>
                    </div>
              <div className={styles.cta__buttons}>
                <button className={styles.buy__button}><a style={{textDecoration:"none", color:"inherit"}} href="https://jup.ag/swap/SOL-Ekir7xTBxsQLzdAy5SGJ6kfWqcRNMD39ERaojoodpump">Buy Now</a> </button>
                <button className={styles.get__button}> <a style={{textDecoration:"none", color:"inherit"}} href="https://dexscreener.com/solana/cijxn2fkxqghlwczucdhfwssnhl8npqye4y8ta6rvxc3">Get on Dex</a></button>
              </div>
            </div>
            <div>

                <Footer/>
            </div>
          </div>






        </div>


    </>
  );
}
