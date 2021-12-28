import Link from "next/link"
import NavBar from "./navbar"
import styles from "../styles/GettingStarted.module.css"
import Head from "next/head";
import { CopyBlock, monokaiSublime } from "react-code-blocks";
import CreateWarning from "./warning";

export default function SettingUp() {
    return (
        <div className={styles.container}>
            <Head>
                <title>The Unofficial Nextcord Web Guide</title>
                <meta
                name="description"
                content="The Unofficial Nextcord Web Guide is a collection of tutorials and guides for Nextcordv2"
                />
            </Head>
            <NavBar />
            <div className={styles.gettingStartedCard}>
                <h1>Getting Started Part 2</h1>
                <h2>Installing Required Dependencies</h2>
                <CreateWarning title="Possible Errors" content="If an error occurs, you may need to update your version of python to the latest version. "/>
                <p>
                    In order to create a bot with Nextcord, you first need to install Nextcord. To do so, you can use the following command in your terminal:
                </p>
                <CopyBlock
                    text='pip install -U nextcord'
                    language='shell'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <div className={styles.buttonSwitch}>
                    <Link href="./commands">
                        <button className={styles.nextButton}>
                            <strong>Nextcord Commands</strong>
                        </button>
                    </Link>
                    <Link href="/setting-up">
                        <button className={styles.backButton}>
                            <strong>Go Back</strong>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}