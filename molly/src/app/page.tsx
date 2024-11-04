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
            <div className="gbegiri">
                <img src="/mollybanner.jpeg"/>
            </div>
            <div className="gbegiri-overlay">

            </div>
            <div className="gbegiri-main-overlay">
              <div className={styles.banner__section__overlay}>
                <p>Hey its zack</p>
                <p className={styles.ma}>It&apos;s MOLLY. GON TAKE YOU TO MARS</p>
                <span>Let&apos;s GET you to MARS.</span>

                <div className={styles.cta__buttons}>
                  <button className={styles.buy__button}><a style={{textDecoration:"none", color:"inherit"}} href="https://jup.ag/swap/SOL-2jXFxmm1poNzad8q6qf3TmS3eug4Eq8xsXrQzsPipump">Buy Now</a> </button>
                  <button className={styles.get__button}> <a style={{textDecoration:"none", color:"inherit"}} href="https://dexscreener.com/solana/5sfd1oneboeamezgzjruxdhavqwzfdrmqzscmkhuz8t7">Get on Dex</a></button>
                </div>
              </div>

            </div>
          </div>
          <div className={styles.about__section} id="about">
            <header>Discover the Power of the Molly </header>

            <b>About Molly</b>
            <p>
              Molly)
              After more than six weeks in limbo, an Insta-famous magpie has been returned to a Gold Coast couple who illegally raised it alongside their pet Staffordshire terrier after finding it as a chick. Molly the magpie was voluntarily surrendered to Queensland&#39;s Department of Environment, Science and Innovation (DESI) on March 1. DESI said it seized the bird as the couple who raised it, Juliette Wells and Reece Mortensen, had taken it from the wild and kept it &#34;unlawfully with no permit, licence or authority&#34;. The public backlash to Molly&#39;s seizure was immense, with the state premier and even surfing legend Kelly Slater both advocating for the birds return.
            </p>



          </div>




          <Footer/>
        </div>

    </>
  );
}
