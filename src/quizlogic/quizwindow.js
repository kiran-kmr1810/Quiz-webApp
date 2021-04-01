import React, {Component } from 'react'; 
import Quiz from 'react-quiz-component';

function Quizwindow(props){
    return(
      <div>
        <Quiz quiz={props.quiz} shuffle={true}/>
      </div>
    );
}

export default Quizwindow;