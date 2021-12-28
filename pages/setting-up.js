import Link from "next/link"
import NavBar from "./navbar"
import styles from "../styles/SettingUp.module.css"

export default function SettingUp() {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.settingUpCard}>
                <h1>Setting Up</h1>
                <p>
                    Before you can start using Nextcord, you should complete everything on the list below.
                </p>
                <ol>
                    <li>
                        <p>
                            Have good knowledge of Python.
                        </p>

                        <p>
                            Alright, making a bot is cool and all, but there are some prerequisites to it. To create a bot with nextcord, you should have a fairly decent grasp of Python itself. While you can make a bot with very little Python and programming knowledge, trying to do so without understanding the language first will only hinder you. You may get stuck on many uncomplicated issues, struggle with solutions to incredibly easy problems, and all-in-all end up frustrated. Sounds pretty annoying. {/* Taken from DiscordJS ^*/}
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="https://discord.com/developers/applications">
                                <a className={styles.docLink}>
                                    <strong>
                                        Create a Discord Bot App 
                                    </strong>
                                </a>
                            </Link>
                        </p>
                        You're gonna need this bot to get the token to interact with the Discord API and see it's effects.
                    </li>
                    <li>
                        <p>
                           Python 3.8 or higher
                        </p>
                        Nextcord doesn't support anything below this.
                    </li>
                    <li>
                        <p>
                            Have a good knowledge of asynchronous programming
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    )
}