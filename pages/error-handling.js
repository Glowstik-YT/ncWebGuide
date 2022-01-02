import { CopyBlock, monokaiSublime } from "react-code-blocks";
import styles from "../styles/Cogs.module.css";
import Head from "next/head"
import Navbar from "./navbar"
import CodeStyles from "../styles/CodeBlock.module.css";
import info from "../styles/Info.module.css";
import CreateWarning from "./warning";
import Link from "next/link"

const globalErrorExample = `@bot.event
async def on_command_error(ctx: commands.Context, error: commands.CommandError):
`

const commandNotFoundExample = `if isinstance(error, commands.CommandNotFound):
    return 
#it is not recommended to have a message for everytime a command is not found
`

const commandOnCooldownExample = `elif isinstance(error, commands.MissingPermissions):
    await ctx.send(f"You are on cooldown for {round(error.retry_after, 1)} seconds")
`

const missingPermissionsExample = `elif isinstance(error, commands.MissingPermissions):
    await ctx.send(f"You are missing the following permissions: {error.missing_perms}")
`

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
                <p>They way we do this, is by creating an event with the name of <code className={CodeStyles.inline}>on_command_error</code>, we pass in <code className={CodeStyles.inline}>ctx</code> and the error itself.</p>
                <CopyBlock
                    text={globalErrorExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>Once we have this, we can then add if statments for each of the errors we might expect. To get the error value please refer to <Link href="https://nextcord.readthedocs.io/en/latest/ext/commands/api.html#nextcord.ext.commands.CommandError"><a className={styles.docLink} target="_blank"><strong>CommandError</strong></a></Link> for more information. Just for demonstration pouposes we will do three errors together, <code className={CodeStyles.inline}>CommandNotFound</code>, <code className={CodeStyles.inline}>CommandOnCooldown</code>, and <code className={CodeStyles.inline}>MissingPermissions</code>.</p>
                <CopyBlock
                    text={commandNotFoundExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p></p>
                <CopyBlock
                    text={commandOnCooldownExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
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