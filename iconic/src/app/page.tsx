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
                    <Image className={styles.banner__image} src="/IMG_3088.JPG" alt=''/>
                    <div className={styles.banner__section__overlay}>
                        <div className={styles.cta__buttons}>
                            <button className={styles.buy__button}><a style={{textDecoration: "none", color: "inherit"}}
                                                                      href="https://jup.ag/swap/SOL-FZJVuk92WHhDXJ3RM7nzbndQvqZz3e3FPDB3njXwpump">Buy
                                Now</a></button>
                            <button className={styles.get__button}><a style={{textDecoration: "none", color: "inherit"}}
                                                                      href="https://dexscreener.com/solana/btrxvjnmaxxs2meh46395csqpq5993eddty4awabgwed">Get
                                on Dex</a></button>
                        </div>
                    </div>
                </div>


                <div className={styles.meme__gallery} id="gallery">
                    <div className={styles.meme}>
                        <Image src="IMG_3089.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src="IMG_3088.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src="IMG_3090.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src="IMG_3091.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src="IMG_3092.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src="IMG_3093.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src="IMG_3094.JPG" alt="#"/>
                    </div>

                    <div className={styles.meme}>
                        <Image src="IMG_3095.JPG" alt="#"/>
                    </div>
                    <div className={styles.meme}>
                        <Image src="IMG_3096.JPG" alt="#"/>
                    </div>
                    <div className={styles.meme}>
                        <Image src="IMG_3097.JPG" alt="#"/>
                    </div>
                    <div className={styles.meme}>
                        <Image src="IMG_3098.JPG" alt="#"/>
                    </div>
                    <div className={styles.meme}>
                        <Image src="IMG_3099.JPG" alt="#"/>
                    </div>


                </div>

                <Steps/>

                <Footer/>
            </div>


        </>
    );
}
