import { CopyBlock, monokaiSublime } from "react-code-blocks";
import styles from "../styles/Views.module.css";
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
                <h1>Views</h1>
                <p>Views contain discords newer interactions such as buttons and selects, these can be used to do a variety of tasks from help commands to litteral games. This is a fairly new feature as it came out in Discord.py v2 Alpha, but it still works as expected and is super easy to use.</p>
                <div className={styles.buttonSwitch}>
                    <Link href="./views">
                        <button className={styles.nextButton}>
                            Views
                        </button>
                    </Link>
                    <Link href="./cogs">
                        <button className={styles.backButton}>
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}