import styles from "../styles/Events.module.css";
import Link from "next/link"
import NavBar from "./navbar";
import CodeStyles from "../styles/CodeBlock.module.css";
import { CopyBlock, monokaiSublime } from "react-code-blocks";
import React, { useState } from 'react';
import CreateTip from "./tips";
import Head from "next/head";
import { isMobile } from 'react-device-detect';

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

export default function FaQ() {
    return (
        isMobile ? ( <center><h1>Mobile currently not supported.</h1></center> ) :
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
                <h1>Thanks!</h1>
                <p>Huge thanks to everyone who has contributed to not only the creation of this guide but also the creation of nextcord, I would not be able to create this guide without them and they did play a big part in the development of the guide. This guide will be updated regularly but currently (at the time of writing) things may look a bit rushed as I wanted to complete this as fast as possible. I will be going back and fixing any typos or issues I have discovered and this guide will be getting a lot more indepth soon! Lastly, I want to thank you for ig just spending your time to use the guide and I hope it helps you! - <code className={CodeStyles.inline}>Glowstik_</code> </p>
                <div className={styles.buttonSwitch}>
                    <Link href="/">
                        <button className={styles.nextButton}>
                            Home
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}