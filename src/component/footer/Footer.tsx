import React from 'react';
import styles from "./Footer.module.scss"
import Logo from "@/component/logo/Logo";
import SocialMedia from "@/component/socialMedia";
import Navbar from "@/component/ui/navbar/Navbar";
import {navData} from "@/data/navData";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles["footer__top"]}>
                <Logo title="yyndam.AY"/>
                <div className={styles['footer__group']}>
                  <Link href="/" className={styles["footer__link"]}>+99363680888</Link>
                  <Link href="https://mail.google.com/yagageldiyew@gmail.com" className={styles["footer__link"]}>yagageldiyew@gmail.com</Link>
                    <SocialMedia/>
                </div>
                    </div>
            <div className={styles['footer__bottom']}>
                <Navbar navItems={navData}/>
                <p className={styles["footer__sub-title"]}>Designed and built by <span>yyndam.AY</span> with Love & Coffee</p>
            </div>
        </footer>
);
};

export default Footer;