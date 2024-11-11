"use client"
import styles from "./page.module.scss";
import NavigationBar from "@/components/navbar/navbar";
import './globals.css'
import Footer from "@/components/footer/footer";



export default function Home() {

  return (
    <>


<div className="main-main">
  <div className={styles.container}>
    <NavigationBar/>
    <div className={styles.banner__section} id="home">
      {/* <video className={styles.banner__image} src={BannerVideo} alt=''/> */}
      <div className="banner-bacground-image">
        <video
            className="rottate-image videobanner"
            src="/-9089601618369949122.MP4" // Replace with the path to your video file
            autoPlay
            loop
            muted
            playsInline
        />
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

</div>

    </>
  );
}
