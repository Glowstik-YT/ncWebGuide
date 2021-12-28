import styles from "../styles/Info.module.css";

export default function CreateWarning({title, content}){
    return(
        <div>
            <div className={styles.warnCard}>
                <div>
                <div className={styles.warnTitle}>
                    <h2>
                        <strong>
                            {title}
                        </strong>
                    </h2>
                </div>
                <div className={styles.warnContent}>
                    <p>
                        {content}
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
} 