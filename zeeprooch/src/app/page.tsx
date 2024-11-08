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
              <img className="rottate-image" src="/IMG_3065.JPG"/>
            </div>
            <div className="banner-overlays">

            </div>
            <div  className="banner-on-top">
              <div className={styles.banner__section__overlay}>
                <div style={{paddingTop:"250px"}} className={styles.cta__buttons}>
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
