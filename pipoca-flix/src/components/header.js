import React, { useState } from "react"
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

export default function Header() {

    return (
        <>
        <Image
            className={styles.logo}
            src="/Header BG.png"
            alt="Logo PipocaFlix"
            fill={true}
            
          />
          <div className={styles.header} id="home">
          <h2>PipocaFlix</h2>
          <nav className={styles.nav}>
            <a className={styles.navlink} href="#home">HOME</a> 
            <a className={styles.navlink} href="#catalogo">CATALOGO</a> 
            <a className={styles.navlink} href="#assassinos">ASSASSINOS</a>
            <a className={styles.navlink} href="#container">INGRESSOS</a> 
          </nav>
        </div>
        <div>
          <Image
            className={styles.logofundo}
            src="/Header BG.png"
            alt="Logo PipocaFlix"
            width={2000}
            height={969}
            priority={false}
          />
        </div>
        </>
    )
}