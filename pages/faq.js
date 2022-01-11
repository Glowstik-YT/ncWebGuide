import styles from "../styles/Events.module.css";
import Link from "next/link"
import NavBar from "./navbar";
import CodeStyles from "../styles/CodeBlock.module.css";
import { CopyBlock, monokaiSublime } from "react-code-blocks";
import React, { useState } from 'react';
import CreateTip from "./tips";
import Head from "next/head";

const quest1 = `Question: What is "async" and "await"?
Answer: "async" is a keyword that allows you to use asynchronous code. "await" is a keyword that allows you to use asynchronous code, it is used in nextcord to do things step by step.
`;

const quest2 = `Question: What is nextcord, and why should I use it?
Answer: Nextcord is a fork of discord.py v2 Alpha, it is maintained by multiple noteable devs such as "Epic#6666" and "vcokltfre#6868". The fork was made after discord.py shut down and it has been taken care of ever since...
`;

const quest3 = `Question: Why wont the time module work?!
Answer: Many modules are synchronous just like the time module, this is incompatible with nextcord as it is asynchronous and so you have to use alternatives such as "asyncio".
`;

const quest4 = `Question: How do I find peoples IDs?
Answer: You have to enable developer mode in discord, this can be done by going into User Settings > Advanced > Toggling Developer Mode.
`;

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
                <h1>FaQ</h1>
                <p>Here are some questions you may have whilst using nextcord and creating your bot.</p>
                <h3>Question 1</h3>
                <CopyBlock
                    text={quest1}
                    language='shell'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <h3>Question 2</h3>
                <CopyBlock
                    text={quest2}
                    language='shell'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <h3>Question 3</h3>
                <CopyBlock
                    text={quest3}
                    language='shell'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <h3>Question 4</h3>
                <CopyBlock
                    text={quest4}
                    language='shell'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>Click <Link href="https://nextcord.readthedocs.io/en/latest/faq.html#frequently-asked-questions"><a className={styles.docLink} target="_blank"><strong>Here</strong></a></Link> for more information.</p>
                <div className={styles.buttonSwitch}>
                    <Link href="./application-commands">
                        <button className={styles.backButton}>
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}