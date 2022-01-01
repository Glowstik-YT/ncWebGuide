import { CopyBlock, monokaiSublime } from "react-code-blocks";
import styles from "../styles/Cogs.module.css";
import Head from "next/head"
import Navbar from "./navbar"
import CodeStyles from "../styles/CodeBlock.module.css";
import info from "../styles/Info.module.css";
import CreateWarning from "./warning";
import Link from "next/link"
export default function Cogs() {
    return (
        <div>
            <Navbar />
            <Head>
                <title>The Unofficial Nextcord Web Guide</title>
                <meta
                name="description"
                content="The Unofficial Nextcord Web Guide is a collection of tutorials and guides for Nextcordv2"
                />
            </Head>
            <div className={styles.card}>
                <h1>Error Handling</h1>
                <p>Being able to handle errors is a big part of creating a discord bot, it ensures your bot will still work even if not everything goes to plan. Thats why nextcord has two ways to handle errors, per-command error handling and global error handling. Global error handling is a lot more popular as it is automatically applied to every command and is a quick way to do it. Although if you need specific error handling for certain commands, per-command error handling is probably the better option.</p>
                <h3>Global Error Handling</h3>
                
                <div className={styles.buttonSwitch}>
                    <Link href="./events">
                        <button className={styles.nextButton}>
                            Error Handling
                        </button>
                    </Link>
                    <Link href="./events">
                        <button className={styles.backButton}>
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}