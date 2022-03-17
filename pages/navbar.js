import styles from '../styles/Navbar.module.css'
import Link from "next/link";
import React, {useState} from 'react'
import { isMobile } from 'react-device-detect';
import Head from "next/head";

export default function NavBar()  {
    const [mobileNav, setMobileNav] = useState(false);
    return (
        true ? ( 
            <>
                <button className={styles.sideBtnCircle} onClick={() => { setMobileNav(!mobileNav) }}>Toggle Nav</button>
                {mobileNav && (
                    <div className={styles.sideBar}>
                        <ul className={styles.sideList}>
                            <h2 className={styles.sideListTitle}>NavBar</h2>
                            <li className={styles.sepList}>
                                <Link href="/">
                                    Home
                                </Link>    
                            </li>
                            <li className={styles.sepList}>
                                <Link href="/setting-up">
                                    Setting Up
                                </Link>
                            </li>
                            <li className={styles.sepList}>
                                <Link href="/getting-started">
                                    Getting Started
                                </Link>
                            </li>
                            <li className={styles.sepList}>
                                <Link href="/commands">
                                    How to make commands
                                </Link>
                            </li>
                            <li className={styles.sepList}>
                                <Link href="/events">
                                    How to handle events
                                </Link>
                            </li>
                            <li className={styles.sepList}>
                                <Link href="/cogs">
                                    Adding Cogs
                                </Link>
                            </li>
                            <li className={styles.sepList}>
                                <Link href="/error-handling">
                                    Error Handling
                                </Link>
                            </li>
                            <li className={styles.sepList}>
                                <Link href="/views">
                                    Views
                                </Link>
                            </li>
                            <li className={styles.sepList}>
                                <Link href="/application-commands">
                                    Application Commands
                                </Link>
                            </li>
                            <li className={styles.sepList}>
                                <Link href="/faq">
                                    Popular Topics
                                </Link>
                            </li>
                        </ul>
                        <button className={styles.sideBtn} onClick={() => { setMobileNav(!mobileNav) }}>Hide Sidebar</button>
                    </div>
                )}
            </> 
        ) : 
        <div className={styles.sideBar}>
            <ul className={styles.sideList}>
                <h2 className={styles.sideListTitle}>NavBar</h2>
                <li className={styles.sepList}>
                    <Link href="/">
                        Home
                    </Link>    
                </li>
                <li className={styles.sepList}>
                    <Link href="/setting-up">
                        Setting Up
                    </Link>
                </li>
                <li className={styles.sepList}>
                    <Link href="/getting-started">
                        Getting Started
                    </Link>
                </li>
                <li className={styles.sepList}>
                    <Link href="/commands">
                        How to make commands
                    </Link>
                </li>
                <li className={styles.sepList}>
                    <Link href="/events">
                        How to handle events
                    </Link>
                </li>
                <li className={styles.sepList}>
                    <Link href="/cogs">
                        Adding Cogs
                    </Link>
                </li>
                <li className={styles.sepList}>
                    <Link href="/error-handling">
                        Error Handling
                    </Link>
                </li>
                <li className={styles.sepList}>
                    <Link href="/views">
                        Views
                    </Link>
                </li>
                <li className={styles.sepList}>
                    <Link href="/application-commands">
                        Application Commands
                    </Link>
                </li>
                <li className={styles.sepList}>
                    <Link href="/faq">
                        Popular Topics
                    </Link>
                </li>
            </ul>
        </div>
    )
}