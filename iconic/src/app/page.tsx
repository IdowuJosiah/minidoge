"use client"
import Image from "next/image";
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
                    <Image className={styles.banner__image} src="/ji.JPG" alt=''/>
                    <div className={styles.banner__section__overlay}>
                        <p>Hi there ICON</p>
                        <p className={styles.ma}>LETS COME MAKE YOU THE NEXT ICON</p>
                        <span>Let&apos;s create your own ICONIC adventure.</span>

                        <div className={styles.cta__buttons}>
                            <button className={styles.buy__button}><a style={{textDecoration: "none", color: "inherit"}}
                                                                      href="https://jup.ag/swap/SOL-8SuMAjoZeLGaaekNHP235Dv4soXsrcseFXefT3A9pump">Buy
                                Now</a></button>
                            <button className={styles.get__button}><a style={{textDecoration: "none", color: "inherit"}}
                                                                      href="https://dexscreener.com/solana/8wgy9ke3yatcvoiw4engaxvukpqr2pmvhzcmyzavlbke">Get
                                on Dex</a></button>
                        </div>
                    </div>
                </div>


                <div className={styles.meme__gallery} id="gallery">
                    <div className={styles.meme}>
                        <Image src="IMG_3071.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src="IMG_3072.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src="IMG_3073.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src="IMG_3074.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src="IMG_3075.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src="IMG_3076.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src="IMG_3077.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src="IMG_3078.JPG" alt="#"/>
                    </div>
                    <div className={styles.meme}>
                        <Image src="IMG_3079.JPG" alt="#"/>
                    </div>
                    <div className={styles.meme}>
                        <Image src="IMG_3080.JPG" alt="#"/>
                    </div>
                    <div className={styles.meme}>
                        <Image src="IMG_3081.JPG" alt="#"/>
                    </div>
                    <div className={styles.meme}>
                        <Image src="IMG_3082.JPG" alt="#"/>
                    </div>


                </div>

                <Steps/>

                <Footer/>
            </div>


        </>
    );
}
