import { Box, Center } from '@chakra-ui/layout';
import Quiz from 'react-quiz-component';
import React, { useState,useEffect } from 'react'; 

const inp ={
  "_id": "60620fe3714df209202c56ac",
  "quizTitle": "Movie Quiz 1",
  "quizSynopsis": "This is a test quiz",
  "questions": [
    {
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "vijay",
        "ajith",
        "rajini",
        "kamal"
      ],
      "_id": "60620fe3714df209202c56ad",
      "question": "who is the best actor ?",
      "correctAnswer": "4",
      "point": 2
    },
    {
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "dhanush",
        "sj suriya",
        "jayam ravi",
        "vimal na"
      ],
      "_id": "60620fe3714df209202c56ae",
      "question": "who is the best actor really ?",
      "correctAnswer": "4",
      "point": 1
    }
  ],
  "date": "2021-03-29T17:35:31.050Z",
  "__v": 0
}

function Quizwindow(){

    return(
    <div>
        <Box>
        <Center>
        <Quiz quiz={inp} shuffle={true}/>
        </Center>
        </Box>
    </div>
    );
}

export default Quizwindow;