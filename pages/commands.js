import styles from "../styles/Commands.module.css";
import Link from "next/link"
import NavBar from "./navbar";
import CodeStyles from "../styles/CodeBlock.module.css";
import { CopyBlock, monokaiSublime } from "react-code-blocks";
import React, { useState } from 'react';
import CreateTip from "./tips";
import Head from "next/head";

const basicExampleCommand = `@bot.command()
async def example(ctx):
    await ctx.send("This is an example command")
`

const advancedExampleCommand = `@bot.command()
async def joined(ctx, member: nextcord.Member):
    await ctx.send(f"{member.name} joined in {member.joined_at}")
`

export default function Commands() {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <Head>
                <title>The Unofficial Nextcord Web Guide</title>
                <meta
                name="description"
                content="The Unofficial Nextcord Web Guide is a collection of tutorials and guides for Nextcordv2"
                />
            </Head>
            <NavBar />
            <div className={styles.commandsCard}>
                <h1>Commands</h1>
                <p>
                    So you got your bot ready, nice, but now we need to add commands!
                    What are they you might ask, they're a way for users to interact with your with bot. Ever wanted a <code className={CodeStyles.inline}>!kill-everyone-in-existence-apart-from-me</code> command? Well here you can make that!
                </p>
                <CreateTip title="Decorators" content='Decorators have a special feature allowing us to enter args into them. The description and name args are very popular for decorators because they can be used in more complex help commands to let the user know more about the command.' />
                <h3>How?</h3>
                <p>
                    So in Nextcord, there is something called <code className={CodeStyles.inline}>@bot.command()</code>, 
                    its a decorator that lets the library know that the code below makes a command, below it we have to create an <code className={CodeStyles.inline}>async </code> function.
                    This function should take in at least one required parameter called <code className={CodeStyles.inline}>ctx</code> which is an instance of <Link href="https://nextcord.readthedocs.io/en/latest/ext/commands/api.html#nextcord.ext.commands.Context"><a className={styles.docLink}> <strong>Commands.context</strong></a></Link>
                    . After this you can add whatever <code className={CodeStyles.inline}>arguments</code> you want, followed by their <code className={CodeStyles.inline}>type</code>.
                    Inside of the function you can handle this however you would like.
                </p>
                <h3>Basic Example</h3>
                <div>
                    <CopyBlock
                    text={basicExampleCommand}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                    />
                </div>
                <h3>Advanced Example</h3>
                <div>
                    <CopyBlock
                    text={advancedExampleCommand}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                    />
                </div>
                <h3>Analizing the Example</h3>
                <p>
                    In the advanced example above, the bot grabs the member argument and then refences the discord api to find the join date of that user, once the join date is found, the bot sends that messsage to the channel.
                </p>
                <div className={styles.buttonSwitch}>
                    <Link href="./events">
                        <button className={styles.nextButton}>
                            Nextcord Events
                        </button>
                    </Link>
                    <Link href="./getting-started">
                        <button className={styles.backButton}>
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}