"use client"
import styles from "./page.module.scss";
import NavigationBar from "@/components/navbar/navbar";
import './globals.css'
import Footer from "@/components/footer/footer";

import Steps from "@/components/steps/steps";

export default function Home() {

  return (
    <>
    

        <div className={styles.container}> 
          <NavigationBar/>
          <div className={styles.banner__section} id="home">
              <div className="banner-bacground-image">
                  <video
                      className="rottate-image videobanner desktop"
                      src="/mo.MP4" // Replace with the path to your video file
                      autoPlay
                      loop
                      muted
                      playsInline
                  />
                  <video
                      className="rottate-image videobanner mobile"
                      src="/copy_9741D2AA-D786-49B1-8777-0263DD04C07B.MOV" // Replace with the path to your video file
                      autoPlay
                      loop
                      muted
                      playsInline
                  />
              </div>
            <div className={styles.banner__section__overlay}>

              <div className={styles.cta__buttons}>
                <button className={styles.buy__button}><a style={{textDecoration:"none", color:"inherit"}} href="https://jup.ag/swap/SOL-jCHd8bHsn9XLkLpP6tS63infRFHhorzXpt7pjU5pump">Buy Now</a> </button>
                <button className={styles.get__button}> <a style={{textDecoration:"none", color:"inherit"}} href="https://dexscreener.com/solana/a8yhjw5rxupz6nnrivtnh4ajnsfotv2aq64ubyqwzmxe">Get on Dex</a></button>
              </div>
            </div>
          </div>

          <div className={styles.about__section} id="about">
            <header>Discover the Power of the $CHIPPO</header>
          
          <b>About Colossus</b>
            <p>
              This hippo, a true icon of the $chill guy meta, embodies the ultimate laid-back vibe. A symbol of calm in a world that’s often chaotic, this meme-worthy creature has become a representation of those who go with the flow. He doesnt stress, he doesnt rush—he just exists, in perfect harmony with his surroundings
              </p>
             


              <b>Vision and Potential</b>
              <p>
                Whether he’s basking under the sun or lounging on the grass, this chill hippo reminds us to slow down, relax, and take life as it comes. His easy-going demeanor has turned him into a mascot for those who appreciate the simpler things and don’t sweat the small stuff. As part of the chill meta, he’s the friend everyone needs in their life—a reminder to stay cool, be unbothered, and embrace the art of chilling.
             </p>


          </div>



          <Steps/>

          <Footer/>
        </div>


    </>
  );
}
