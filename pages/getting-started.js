import Link from "next/link"
import NavBar from "./navbar"
import styles from "../styles/GettingStarted.module.css"
import Head from "next/head";
import { CopyBlock, monokaiSublime } from "react-code-blocks";
import CreateWarning from "./warning";
import CodeStyles from "../styles/CodeBlock.module.css";
import info from "../styles/Info.module.css";
import ReactPlayer from 'react-player';
import { isMobile } from 'react-device-detect';

const importsCode = `from nextcord.ext import commands
import nextcord
`
const onReadyCode = `@bot.event
async def on_ready():
    print("Ready")
`

const pingCommandCode = `@bot.command(name="ping", description="Shows the bot's latency")
async def ping(ctx : commands.Context):
    await ctx.send(f"Pong 🏓 {round(bot.latency * 1000)}ms")
`

export default function SettingUp() {
    return (
        isMobile ? ( <center><h1>Mobile currently not supported.</h1></center> ) :
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
                <p>Now that we have python 3.8+ installed and a discord bot created, we can now start the fun portion, CODING!</p>
                <h3>Installing Required Dependencies</h3>
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
                <h3>Importing Dependencies</h3>
                <p>We will need to import <code className={CodeStyles.inline}>nextcord</code> and <code className={CodeStyles.inline}>nextcord.ext</code> (both of which derive from the same library).</p>
                <CopyBlock
                    text={importsCode}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <h3>Creating a Bot Class</h3>
                <p>In order to create most of the bots features (commands/events) you will need to use a bot class, this can be done two ways, using bot or client. Bot supports the entire <code className={CodeStyles.inline}>ext.commands</code> allowing you to do more (such as create cogs) whilst Client can not handle as much as Bot such as listeners.</p>
                <p>T.L;D.R - Bot has everything Client has, but also includes <code className={CodeStyles.inline}>ext.commands</code> thus allowing you too do more.</p>
                <CopyBlock
                    text='bot = commands.Bot(commands_prefix="!")'
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <h3>on_ready Event</h3>
                <p>This event is ran once the bot is ready, its common pratice to keep a <code className={CodeStyles.inline}>print</code> statement informing the dev the bot has started and maybe with information about the bot such as the number of guilds its in or the bots id.</p>
                <CopyBlock
                    text={onReadyCode}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                
                <h3>Creating Commands</h3>
                <p>The first of many commands we will make is the ping command, it is a regular command almost every bot has and it helps check the latency and speed of the bot.</p>
                <CopyBlock
                    text={pingCommandCode}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>More on the creation of commands in <Link href="./commands"><a className={styles.docLink}><strong>How to make Commands</strong></a></Link> </p>
                <h3>Managing Our Tokens</h3>
                <div className={info.warnCard}>
                    <div>
                        <div className={info.warnTitle}>
                            <h2>
                                <strong>
                                    Token Storage
                                </strong>
                            </h2>
                        </div>
                        <div className={info.warnContent}>
                            <p>
                            This isn't the most secure way to store your token, check out <Link href="./token-storage"><a className={styles.docLink}><strong>Secure Token Storage</strong></a></Link> for more information.
                            </p>
                        </div>
                    </div>
                </div>
                <p>This is the final and most important step of creating a discord bot, your bot token is required to run your bot; the token lets the Discord API know what bot is being run. If your token gets leaked or compromised whoever has the token is able to then control your bot and use it to damage such as raiding servers.</p>
                <CopyBlock
                    text='bot.run(token="TOKEN")'
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p></p>
                <center>
                    <div>
                        <ReactPlayer url="https://www.youtube.com/watch?v=e9SYmj1QF8I" />
                    </div>
                </center>
                <div className={styles.buttonSwitch}>
                    <Link href="./commands">
                        <button className={styles.nextButton}>
                            Nextcord Commands
                        </button>
                    </Link>
                    <Link href="/setting-up">
                        <button className={styles.backButton}>
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}