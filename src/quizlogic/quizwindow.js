import React, {Component } from 'react'; 
import Quiz from 'react-quiz-component';

function Quizwindow(props){

const onCompleteAction = (obj) => {
    console.log(obj.correctPoints);
    // YOUR LOGIC GOES HERE
}

    return(
      <div>
        <Quiz quiz={props.quiz} shuffle={true} onComplete={onCompleteAction}/>
      </div>
    );
}

export default Quizwindow;