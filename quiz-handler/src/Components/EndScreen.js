import React, {useState, useContext} from 'react';
import {QuizContext} from '../Helpers/Context';
import {Questions} from "../Helpers/QuestionBank";
import "../App.css";


export default function EndScreen() {
    
    const {score, setGameState, setScore} = useContext(QuizContext)
    
    const restartQuiz = () => {
        setGameState("menu");
        setScore(0)
    }
    return (
        <div className="end">
            <h1>Quiz Successfully Submitted</h1>
            <h2>
                SCORE: {score}/{Questions.length}
            </h2>
            <button onClick={restartQuiz}>
                Restart Quiz
            </button>
        </div>
    );
};

