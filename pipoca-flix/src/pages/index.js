import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Form from "../components/form";
import Header from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <header>
        <Header></Header>
        
      </header>
      
        <main className={styles.main}>

         <Form></Form>
        </main>
        
        <footer className={styles.footer}>          
        </footer>
    </>
  );
}
