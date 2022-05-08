import styles from '../styles/Home.module.css'
import Link from "next/link";
import Head from "next/head";
import NavBar from "./navbar";
import { isMobile } from 'react-device-detect';

export default function Home() {
  return (
    isMobile ? ( <center><h1>Mobile currently not supported.</h1></center> ) :
    <div className={styles.container}>
      <NavBar />
      <Head>
        <title>The Unofficial Nextcord Web Guide</title>
        <meta
          name="description"
          content="The Unofficial Nextcord Web Guide is a collection of tutorials and guides for Nextcordv2"
        />
        <meta name="DiscordLinkButtonLabel" content="Nextcord Guide">

      </Head>
      <div className={styles.introCard}>
        <h1 className={styles.introTitle}>
          The Unofficial Nextcord Web Guide
        </h1>
        <p className={styles.introText}> 
          So you wanna create a Discord Bot? Click the get started button below to start your journey! 
        </p>
        <Link href="/setting-up">
          <button className={styles.getStartedButton}>
            Get Started
          </button>
        </Link>
        <Link href="https://github.com/Glowstik-YT/ncWebGuide">
          <a target="_blank">
            <button className={styles.sourceCodeButton}>
              Source Code  
            </button>
          </a>
        </Link>
        <center>
          <p className={styles.introFooter}>
            <Link href="./credits">
              Made with ❤️ by Glowstik_#5127 and The Untraceable#4852 
            </Link>
          </p>
        </center>
      </div>
    </div>
  )
}
