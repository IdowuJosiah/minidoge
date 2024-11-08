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

            <div  className="banner-on-top">
              <div className={styles.banner__section__overlay}>
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
