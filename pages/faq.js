import styles from "../styles/Faq.module.css";
import Link from "next/link"
import NavBar from "./navbar";
import CodeStyles from "../styles/CodeBlock.module.css";
import { CopyBlock, monokaiSublime } from "react-code-blocks";
import React, { useState } from 'react';
import CreateTip from "./tips";
import Head from "next/head";
import { isMobile } from 'react-device-detect';
import Image from 'next/image'

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
            <div className={styles.cardFlex}>
                <div className={styles.sectionCard}>
                    <h1>Embed</h1>
                    <p>Add <i>style</i> to your messages using embeds! A better way to organize info.</p>
                    <center>
                        <Image src="https://media.discordapp.net/attachments/794739330835808261/953857372718264340/embeddd.png?width=1052&height=701" height="170" width="253"/>
                    </center>
                </div>
                <div className={styles.sectionCard}>
                    <h1>test</h1>
                    <p>another test to see what it can put in this and such ykykykkykykykykykykyyk also does it wrap ther text olr what lmaiod;ofj lskajflk;dajf;klsjad;lf jl;kjfl;</p>
                </div>
            </div>

        </div>
    )
}