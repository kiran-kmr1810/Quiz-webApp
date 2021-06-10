import React from 'react'; 
import Quiz from 'react-quiz-component';
import axios from 'axios';
import firebase from 'firebase';
import { Box,Button } from '@chakra-ui/react';
import { useHistory } from "react-router-dom";

function Quizwindow(props){

let history = useHistory();
const onCompleteAction = (obj) => {
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
    axios.post(`https://quizapp1810.herokuapp.com/result/add`, output)
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
    });
  }
}
    return(
      <div>
        <Box>
        <Button w='100px'h='30px'mt={4}
          color='black'
          _hover={{
              color:"black",
              bg:"white"
            }}
          onClick={history.goBack}>
          Return
        </Button>
        </Box>
        <Box h='100%' w='100%' p='30px' borderRadius="2xl" borderColor='black'>
        <Quiz quiz={props.quiz} 
        shuffle={true} 
        onComplete={onCompleteAction}/>
        </Box>
      </div>
    );
}

export default Quizwindow;