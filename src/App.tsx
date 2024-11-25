// @ts-ignore
import 'modern-normalize';
import './App.css'
import Description from "./components/Description/Description.tsx";
import Options from "./components/Options/Options.tsx";
import Feedback from "./components/Feedback/Feedback.tsx";
import {useEffect, useState} from "react";

type FeedbackType = {
    good: number;
    neutral: number;
    bad: number;
}

function App() {

    const [data, setData] = useState<FeedbackType>(() => {
        const storageData: string | null = window.localStorage.getItem('feedback-data');
        if (storageData !== null) {
            return JSON.parse(storageData);
        } else {
            return {good: 0, neutral: 0, bad: 0};
        }
    });

    const total: number = data.good + data.neutral + data.bad;

    const updateFeedback = (e: string): void => {
        if (e !== 'reset') {
            setData((prev: FeedbackType) => ({
                ...prev,
                [e]: prev[e as keyof FeedbackType] + 1,
            }));
        } else {
            setData({good: 0, neutral: 0, bad: 0})
        }
    }

    useEffect(() => {
        window.localStorage.setItem('feedback-data', JSON.stringify(data));
    }, [data])

    return (
        <div className="container">
            <Description/>
            <Options total={total} feedback={updateFeedback}/>
            <Feedback
                feedbackData={data}
                total={total}
                positive={Math.round(data.good / total * 100)}
            />
        </div>
    )
}

export default App
