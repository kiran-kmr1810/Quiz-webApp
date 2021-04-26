import React from 'react'; 
import Quiz from 'react-quiz-component';
import axios from 'axios';
import firebase from 'firebase';
import { Text } from '@chakra-ui/layout';

function Quizwindow(props){

const onCompleteAction = (obj) => {
    console.log(obj.correctPoints);
    // YOUR LOGIC GOES HERE
    var uid =  firebase.auth().currentUser.uid
    const output = {
      "uid": uid,
      "quizTitle": props.quizTitle,
      "course":props.course,
      "topic":props.topic,
      "date": props.date,
      "mark" : obj.correctPoints,
    }
    if(output.mark > 0){
    console.log(output);
    axios.post(`http://localhost:5003/result/add`, output)
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
    });
  }
}

    return(
      <div>
        {/*<Text>{props.quizTitle}</Text>
        <Text>{props.date}</Text>
        <Text>{props.topic}</Text>
        <Text>{props.course}</Text>*/}
        <Quiz quiz={props.quiz} shuffle={true} onComplete={onCompleteAction}/>
      </div>
    );
}

export default Quizwindow;