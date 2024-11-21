"use client"
import styles from "./page.module.scss";
import './globals.css'
import Footer from "@/components/footer/footer";



export default function Home() {

  return (
    <>


<div className="main-main">
  <div className={styles.container}>

    <div className={styles.banner__section} id="home">
      {/* <video className={styles.banner__image} src={BannerVideo} alt=''/> */}
      <div className="banner-bacground-image">
        <video
            className="rottate-image videobanner desktop"
            src="/money.mp4" // Replace with the path to your video file
            autoPlay
            loop
            muted
            playsInline
        />
        <video
            className="rottate-image videobanner mobile"
            src="/copy_6B121DB7-1A5A-4354-9FB9-19F86D280DB3.MOV" // Replace with the path to your video file
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
      <div className="banner-tophead">
        <p className="bt-text">
          /REVERSAL
        </p>
      </div>
      <div className="banner-header-text-avatar">
          <img className="banner-avater" src="/IMG_0062.PNG"
          />
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
