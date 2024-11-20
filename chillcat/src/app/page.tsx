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
        <img
            className="rottate-image videobanner desktop"
            src="/IMG_0049.JPG" // Replace with the path to your video file

        />
        <img
            className="rottate-image videobanner mobile"
            src="/IMG_0049.JPG" // Replace with the path to your video file

        />
      </div>

      <div  className="banner-on-top">
        <div className={styles.banner__section__overlay}>
        </div>
      </div>
      <div className="banner-header-text-oo">
        <div className="trust">
          <div className="cloud-banner">
            <img
                className="cloud"
                src="/IMG_0053.PNG"
            />
          </div>

        </div>
        <div className="just-chill">
          <img
              src="/IMG_0050.PNG"
          />
        </div>
        <div className="cat-banner">
          <img
              className="cat-image"
              src="/IMG_0048.PNG"/>
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
