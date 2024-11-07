"use client"
import styles from "./page.module.scss";
import NavigationBar from "@/components/navbar/navbar";
import './globals.css'
import Footer from "@/components/footer/footer";



export default function Home() {

  return (
    <>



        <div className={styles.container}> 
          <NavigationBar/>
          <div className={styles.banner__section} id="home">
            {/* <video className={styles.banner__image} src={BannerVideo} alt=''/> */}
            <div className="banner-bacground-image">
              <img src="/IMG_3041.JPG"/>
            </div>
            <div className="banner-overlay">

            </div>
            <div style={{marginTop:"170px", }} className="banner-on-top">
              <div className={styles.banner__section__overlay}>
                <div className={styles.cta__buttons}>
                  <button  className={styles.buy__button}><a style={{textDecoration:"none", color:"inherit", }} href="https://jup.ag/swap/SOL-5MaeW2ARKTHh4vLjSwd4HyJqZB8WCp9UBwbFzXAtpump">Buy Now</a> </button>
                </div>
              </div>
            </div>
            <div className="banner-footer">
              <Footer/>
            </div>
          </div>



        </div>

    </>
  );
}
