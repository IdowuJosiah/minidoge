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

    <div className={styles.banner__section} id="home">
      {/* <video className={styles.banner__image} src={BannerVideo} alt=''/> */}
      <div className="banner-bacground-image">
        <video
            className="rottate-image videobanner desktop"
            src="/-2122678917185029725.MP4" // Replace with the path to your video file
            autoPlay
            loop
            muted
            playsInline
        />
        <video
            className="rottate-image videobanner mobile"
            src="/copy_21C9F681-CD73-4257-A235-F789D55C11E5.MOV" // Replace with the path to your video file
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
          $TRUST THE PROCESS
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
