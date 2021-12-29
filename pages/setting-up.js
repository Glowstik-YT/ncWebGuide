import Link from "next/link"
import NavBar from "./navbar"
import styles from "../styles/SettingUp.module.css"
import Head from "next/head";
import Image from 'next/image'

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
            <div className={styles.settingUpCard}>
                <h1>Getting Started Part 1</h1>
                <p>
                    Before you can start using Nextcord, you should complete everything on the list below.
                </p>
                <ol>
                    <li>
                        <p>
                            Have good knowledge of Python.
                        </p>

                        <p>
                            Alright, making a bot is cool and all, but there are some prerequisites to it. To create a bot with Nextcord, you should have a fairly decent grasp of Python itself. While you can make a bot with very little Python and programming knowledge, trying to do so without understanding the language first will only hinder you. You may get stuck on many uncomplicated issues, struggle with solutions to incredibly easy problems, and all-in-all end up frustrated. Sounds pretty annoying. {/* Taken from DiscordJS ^*/}
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="https://discord.com/developers/applications">
                                <a className={styles.docLink} target="_blank">
                                    <strong>
                                        Create a Discord Bot App 
                                    </strong>
                                </a>
                            </Link>
                        </p>
                        <Image src="https://media.giphy.com/media/HabWJqEMcdH5F8ULz2/giphy-downsized-large.gif" width="640" height="360"></Image>
                        <p>You're gonna need this bot to get the token to interact with the Discord API and see it's effects.</p>
                    </li>
                    <li>
                        <p>
                            <Link href="https://www.python.org/downloads/">
                                <a className={styles.docLink} target="_blank">
                                    <strong>
                                        Python 3.8 or higher
                                    </strong>
                                </a>
                            </Link>
                        </p>
                        Nextcord v2 is a forked from Discord.py 2.0 Alpha, which does not support anything earlier than Python 3.8.
                    </li>
                    <li>
                        <p>
                            Have a good knowledge of asynchronous programming.
                        </p>
                    </li>
                </ol>

                <div className={styles.buttonSwitch}>
                    <Link href="./getting-started">
                        <button className={styles.nextButton}>
                            <strong>Getting Started P2</strong>
                        </button>
                    </Link>
                    <Link href="/">
                        <button className={styles.backButton}>
                            <strong>Go Home</strong>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}