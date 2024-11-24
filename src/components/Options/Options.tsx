import React from "react";
import styles from './Options.module.css'



interface OptionsProps {
    feedback :(param:string)=>void;
}
enum feedbackValues{
    good = "good",
    neutral = "neutral",
    bad = "bad",
    reset = "reset",
}

const Options:React.FC<OptionsProps> = ({feedback}) => {

    return (
        <div className={styles.optionsContainer}>
            <button className={styles.btn} onClick={()=>{feedback(feedbackValues.good)}}>Good</button>
            <button className={styles.btn} onClick={()=>{feedback(feedbackValues.neutral)}}>Neutral</button>
            <button className={styles.btn} onClick={()=>{feedback(feedbackValues.bad)}}>Bad</button>
            <button className={styles.btn} onClick={()=>{feedback(feedbackValues.reset)}}>Reset</button>
        </div>
    )
}
export default Options;