import React, {useState, useContext} from 'react';

import {Questions} from "../Helpers/QuestionBank";
import {QuizContext} from "../Helpers/Context";
import "../App.css";

export default function QuizCore() {
    const [currQuestion, setCurrQuestion]=useState(0);
    const [optionChosen, setOptionChosen]=useState("")

    const {score, setScore, setGameState} = useContext(QuizContext);

    const nextQuestion = () => {
        if (Questions[currQuestion].answer == optionChosen)
            setScore(score+1);
        setCurrQuestion(currQuestion+1);
    }
    
    const finishQuiz = () => {
        if (Questions[currQuestion].answer == optionChosen)
            setScore(score+1);
        setGameState("end");
    }
    return (
        <div className="quiz">
            <h1>{Questions[currQuestion].question}</h1>
            <div className="options">
                <button onClick={() => {setOptionChosen("A")}}>
                    {Questions[currQuestion].optionA}
                    </button>
                    <button onClick={() => {setOptionChosen("B")}}>
                    {Questions[currQuestion].optionB}
                    </button>
                    <button onClick={() => {setOptionChosen("C")}}>
                    {Questions[currQuestion].optionC}
                    </button>
                    <button onClick={() => {setOptionChosen("D")}}>
                    {Questions[currQuestion].optionD}
                    </button>

                    {currQuestion == Questions.length-1 ? 
                    (<button onClick={finishQuiz}>Finish Quiz</button>):
                    (<button onClick={nextQuestion}>Next Question</button>)}
            </div>
        </div>
    );
};


