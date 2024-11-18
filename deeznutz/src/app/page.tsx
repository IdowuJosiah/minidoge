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
            src="/copy_0AC5F4C3-70E6-4EAD-9816-64F94771D11C.MOV" // Replace with the path to your video file
            autoPlay
            loop
            muted
            playsInline
        />
        <video
            className="rottate-image videobanner mobile"
            src="/copy_E2241F8C-6456-401C-A323-E76833C8D15D.mp4" // Replace with the path to your video file
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
      <div className="banner-header-text-oo">
        <div className="trust">
          THE BIRD $TWEAKS
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
