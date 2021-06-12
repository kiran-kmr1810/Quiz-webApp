import React, { useState }   from 'react'; 
import Quiz from 'react-quiz-component';
import axios from 'axios';
import firebase from 'firebase';
import { Box,Button,Alert,AlertIcon,AlertTitle,CloseButton} from '@chakra-ui/react';
import { useHistory } from "react-router-dom";
import PageVisibility from 'react-page-visibility';

function Quizwindow(props){

  const [visible, setvisible] = useState(false);
  const onClose = () => setvisible(false)
  const handleVisibilityChange = (e) =>{
      setvisible(true);
  }
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
      <PageVisibility onChange={handleVisibilityChange}>
      <div>
        <Box>
        { visible ?
                <Box paddingTop="10px">
                    <Alert status="error">
                        <AlertIcon />
                        <AlertTitle mr={1}>You switched tab !</AlertTitle>
                        <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
                    </Alert>
                </Box> 
          :null}
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
      </PageVisibility>
    );
}

export default Quizwindow;