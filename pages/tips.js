import styles from "../styles/Info.module.css";
import React, { useState } from 'react';
import {Animated} from "react-animated-css";

export default function CreateTip({title, content}){
    const [visible, setVisible] = useState(true);
  
    function hideMe(){
      setVisible(false);
    }

    return(
        
        <div>
            {visible && (
                <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={visible}>
                    <div className={styles.tipCard}>
                        <div>
                        <div className={styles.tipTitle}>
                            <h2>
                                <strong>
                                    {title}
                                </strong>
                            </h2>
                        </div>
                        <div className={styles.tipContent}>
                            <p>
                                {content}
                            </p>
                        </div>
                        <button className={styles.closeTipButton} onClick={hideMe}>Close Tip</button>
                        </div>
                    </div>
                </Animated>
            )}
        </div>
    )
} 