import React, { useState } from "react"
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

export default function Footer() {

    return (
        <>
        <div id="footer" className={styles.footerimagem}>
        <a href="https://www.instagram.com/ide_jr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <Image
            className={styles.footerimagem}
            src="/Instagram.png"
            alt="Insta"
            width={55}
            height={55}

          />
          </a>
          <a href="https://br.linkedin.com/company/empresa-júnior-ide">
          <Image
            className={styles.footerimagem}
            src="/Linkedin.png"
            alt="Linkedin"
            width={55}
            height={55}

          />
          </a>
        <a href="https://linktr.ee/idejr?fbclid=PAZXh0bgNhZW0CMTEAAaZKe64yMd9TTc0qNSePLyc0BBKPZJDOeYGd4VD5mSTOUk-dGx90Q_JY8Hw_aem_mE8fgj3fBL-harhaSJUbFg">
        <Image
            className={styles.footerimagem}
            src="/IDE.png"
            alt="IDE Redes"
            width={75}
            height={55}

          />
        </a>
        </div>
        <div className={styles.footertext}>
            <h3>CineIDE &copy; Todos os direitos reservados</h3>
        </div>
        <div className={styles.footertext}>
            <a href="https://policies.google.com/terms?hl=pt-BR">
                <h4>Termos de Uso</h4>
            </a>
            <a href="https://policies.google.com/privacy?hl=pt-BR">
                <h4>Política de Privacidade</h4>
            </a>
            <a href="https://www.google.com/intl/pt-BR/policies/privacy/archive/20010104/#:~:text=Google%20e%20Cookies&text=O%20Google%20faz%20isso%20armazenando,estatutos%2C%20ou%20ordem%20de%20tribunal.">
                <h4>Política de Cookies</h4>
            </a>
        </div>
        <div><Image
            className={styles.footerimagem2}
            src="/IDE.png"
            alt="IDE Logo"
            width={100}
            height={73}
          /></div>
        </>
    )
}