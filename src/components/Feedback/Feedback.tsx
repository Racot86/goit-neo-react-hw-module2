import styles from './Feedback.module.css'

type Feedback = {
    good: number;
    neutral: number;
    bad: number;
}

interface FeedbackProps {
    feedbackData: Feedback;
    total: number;
    positive: number;
}

const Feedback:React.FC<FeedbackProps> = ({feedbackData,total,positive }) => {

    return (
        <>
            {total > 0 ? (
                <ul className={styles.feedbackCard}>
                    <li>
                        <p>Good: <span>{feedbackData.good}</span></p>
                    </li>
                    <li>
                        <p>Neutral: <span>{feedbackData.neutral}</span></p>
                    </li>
                    <li>
                        <p>Bad: <span>{feedbackData.bad}</span></p>
                    </li>
                    <li>
                        <p>Total: <span>{total}</span></p>
                    </li>
                    <li>
                        <p>Positive: <span>{positive}%</span></p>
                    </li>
                </ul>
            ):(
                <p className={styles.feedbackCard}>no feedback yet</p>
            )}

        </>
    )
}

export default Feedback;