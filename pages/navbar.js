import styles from '../styles/Navbar.module.css'
import Link from "next/link";

export default function NavBar()  {
    return (
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
                    <Link href="/getting-starting">
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
                        Cogs
                    </Link>
                </li>
                <li className={styles.sepList}>
                    <Link href="/faq">
                        FaQs
                    </Link>
                </li>

            </ul>
        </div>
    )
}