import styles from '../styles/Home.module.css'
import Link from "next/link";
import Head from "next/head";
import NavBar from "./navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Head>
        <title>The Unofficial Nextcord Web Guide</title>
        <meta
          name="description"
          content="The Unofficial Nextcord Web Guide is a collection of tutorials and guides for Nextcordv2"
        />
      </Head>
      <div className={styles.introCard}>
        <h1 className={styles.introTitle}>
          The Unofficial Nextcord Web Guide
        </h1>
        <p className={styles.introText}> 
          So you wanna create a discord bot? Click the get started button below to start your journey! 
        </p>
        <Link href="/setting-up">
          <button className={styles.getStartedButton}>
            <strong>Get Started</strong>
          </button>
        </Link>
        <Link href="https://github.com/Glowstik-YT/glowNextcordTutorial">
          <a target="_blank">
            <button className={styles.sourceCodeButton}>
              <strong>Source Code</strong>  
            </button>
          </a>
        </Link>
        <center>
          <p className={styles.introFooter}>
              Made with love by Glowstik_#5127 and The Untraceable#4852❤️ 
          </p>
        </center>
      </div>
    </div>
  )
}
