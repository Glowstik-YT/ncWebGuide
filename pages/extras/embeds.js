import styles from "../../styles/Events.module.css";
import Link from "next/link"
import NavBar from "../navbar";
import CodeStyles from "../../styles/CodeBlock.module.css";
import { CopyBlock, monokaiSublime } from "react-code-blocks";
import React, { useState } from 'react';
import CreateTip from "../tips";
import Head from "next/head";
import { isMobile } from 'react-device-detect';

export default function Embeds() {
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
                <h1>uhhh hello</h1>
            </div>

        </div>
    )
}