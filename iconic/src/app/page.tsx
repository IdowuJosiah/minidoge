"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import NavigationBar from "@/components/navbar/navbar";
import BannerImage from '../../public/ji.JPG'
import './globals.css'
import Footer from "@/components/footer/footer";
import MemeOne from '../../public/IMG_3071.JPG'
import MemeTwo from '../../public/IMG_3072.JPG'
import MemeThree from '../../public/IMG_3073.JPG'
import MemeFour from '../../public/IMG_3074.JPG'
import MemeFive from '../../public/IMG_3075.JPG'
import MemeSix from '../../public/IMG_3076.JPG'
import MemeSeven from '../../public/ji.JPG'
import MemeEight from '../../public/IMG_3078.JPG'
import MemeNine from '../../public/IMG_3079.JPG'
import MemeTen from '../../public/IMG_3080.JPG'
import MemeEleven from '../../public/IMG_3081.JPG'
import MemeTwelve from '../../public/IMG_3082.JPG'

import Steps from "@/components/steps/steps";

export default function Home() {

    return (
        <>


            <div className={styles.container}>
                <NavigationBar/>
                <div className={styles.banner__section} id="home">
                    <Image className={styles.banner__image} src={BannerImage} alt=''/>
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
                        <Image src={MemeOne} alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src={MemeTwo} alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src={MemeThree} alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src={MemeFour} alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src={MemeFive} alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src={MemeSix} alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src={MemeSeven} alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src={MemeEight} alt="#"/>
                    </div>
                    <div className={styles.meme}>
                        <Image src={MemeNine} alt="#"/>
                    </div>
                    <div className={styles.meme}>
                        <Image src={MemeTen} alt="#"/>
                    </div>
                    <div className={styles.meme}>
                        <Image src={MemeEleven} alt="#"/>
                    </div>
                    <div className={styles.meme}>
                        <Image src={MemeTwelve} alt="#"/>
                    </div>


                </div>

                <Steps/>

                <Footer/>
            </div>


        </>
    );
}
