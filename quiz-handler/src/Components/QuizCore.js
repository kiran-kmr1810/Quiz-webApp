import React, {useState} from 'react';
import {Questions} from "../Helpers/QuestionBank";
export default function QuizCore() {
    const [currQuestion, setCurrQuestion]=useState(0);
    const [optionChosen, setOptionChosen]=useState("")
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

            </div>
        </div>
    );
};


