import React from "react";
import styles from './Options.module.css'
import {FaHeart} from 'react-icons/fa'
import {FaHeartCrack} from "react-icons/fa6";
import {FaFaceMeh} from "react-icons/fa6";
import {FaRotate} from "react-icons/fa6";

interface OptionsProps {
    feedback :(param:string)=>void;
    total:number;
}
enum feedbackValues{
    good = "good",
    neutral = "neutral",
    bad = "bad",
    reset = "reset",
}

const Options:React.FC<OptionsProps> = ({feedback,total}) => {

    return (
        <div className={styles.optionsContainer}>
            <button className={styles.btn} onClick={()=>{feedback(feedbackValues.good)}}><FaHeart className={styles.like} /></button>
            <button className={styles.btn} onClick={()=>{feedback(feedbackValues.neutral)}}><FaFaceMeh className={styles.neutral}/> </button>
            <button className={styles.btn} onClick={()=>{feedback(feedbackValues.bad)}}><FaHeartCrack className={styles.dislike}/></button>
            {total > 0 && <button className={styles.btnReset} onClick={() => {
                feedback(feedbackValues.reset)
            }}><FaRotate className={styles.reset} /></button>}
        </div>
    )
}
export default Options;