import styles from "../styles/Events.module.css";
import Link from "next/link"
import NavBar from "./navbar";
import CodeStyles from "../styles/CodeBlock.module.css";
import { CopyBlock, monokaiSublime } from "react-code-blocks";
import React, { useState } from 'react';
import CreateTip from "./tips";
import CreateWarning from "./warning";
import Head from "next/head";

const onMessageExample = `async def on_message(message):
    if message.author.id == 744715959817994371:
        await message.channel.send("Hello, glowstik!")
`

const onGuidJoinExample = `async def on_guild_join(guild):
    channel = guild.channel
    await channel.send("Helloooo, I'm a new bot added to the server!")
`

export default function Commands() {
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
                <h1>Events</h1>
                <p>Events are triggered when a specific event occurs, this can be whenever a user sends a message, or a member is banned. (There are wayy more than two events). We will go over together 3 events that almost everyone will have in their bots, if you want to add more events, please reference the <Link href="https://nextcord.readthedocs.io/en/latest/ext/commands/api.html#nextcord.ext.commands.Bot.event"><a className={styles.docLink}><strong>Event Documentation</strong></a></Link>.</p>
                <h3>on_message</h3>
                <p>This event is fired when a user sends a message in a channel that the bot is able to read. This param can be used for filtering messages, leveling systems, and automoderation. The <code className={CodeStyles.inline}>on_message</code> event takes in the message argument and nothing else.</p>
                <CreateTip title="Examples" content="All of these code blocks are examples, it is not recommended to use these exact examples for your bot as they are just meant to showcase the capablities of the event" />
                <CopyBlock
                    text={onMessageExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>This code will check if the message is sent by a specific user (in this case, me) and if it is, then it will send a message; if the author of the message is someone else, the bot will do nothing.</p>
                <h3>on_guild_join</h3>
                <p>This event is used when the bot joins a new guild/server, it can be used incase the bot has to update a db when a new server is added, or if the bot would like to introduce itself to a new server.</p>
                <CopyBlock
                    text={onGuidJoinExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>This will find the first channel in the guild and send a message telling members the bot has joined.</p>
                <h3>on_member_join</h3>
                <div className={styles.buttonSwitch}>
                    <Link href="./cogs">
                        <button className={styles.nextButton}>
                            Nextcord Events
                        </button>
                    </Link>
                    <Link href="./commands">
                        <button className={styles.backButton}>
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}