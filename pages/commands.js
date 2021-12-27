import styles from "../styles/Commands.module.css";
import Link from "next/link"
import NavBar from "./navbar";
import CodeStyles from "../styles/CodeBlock.module.css";

export default function Commands() {
    return (
        <div>
            <NavBar />
            <div className={styles.commandsCard}>
                <h1>Commands</h1>
                <p>
                    So you got your bot ready, nice, but now we need to add commands!
                    What are they you might ask, they're a way for users to interact with your with bot. Ever wanted a <code className={CodeStyles.comment}>!kill-everyone-in-existence-apart-from-me</code> command? Well here you can make that!
                </p>

                <h3>How?</h3>
                <p>
                    So in Nextcord, we have something called <code className={CodeStyles.decorator}>@bot.command()</code>, 
                    this makes the command, below it we have to create an <code className={CodeStyles.async}>async </code> function.
                    This function should take in one required parameter called <code className={CodeStyles.arg}>ctx</code> which is an instance of <Link href="https://nextcord.readthedocs.io/en/latest/ext/commands/api.html#nextcord.ext.commands.Context"><a className={styles.docLink}> <strong>Commands.context</strong></a></Link>, 
                    and after this you can add whatever <code className={CodeStyles.arg}>arguments</code> you want, followed by their <code>type</code>.
                    Inside of the function you can handle this however you would like.
                </p>
                <h3>Example</h3>
                <div>
                    <code>
                        <code className={CodeStyles.import}>from</code> <code className={CodeStyles.importPackageName}>nextcord</code>.ext <code className={CodeStyles.import}>import </code><code className={CodeStyles.importPackageName}>commands</code>
                    </code>
                </div>
            </div>
        </div>
    )
}