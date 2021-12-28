import styles from "../styles/Info.module.css";
import { useState } from "react"

export default function CreateWarning({title, content}){
    const [visible, setVisible] = useState(true);
    function hideMe(){
        setVisible(false);
    }
    
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
                <button className={styles.closeTipButton} onClick={hideMe}>Close Warning</button>
                </div>
            </div>
        </div>
    )
} 