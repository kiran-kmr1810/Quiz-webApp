import React from "react";
import Quizwindow from './quizwindow'
import { Box,Center} from '@chakra-ui/react'

const Attendquiz = (props) =>
{
    const k = props.location.aboutProps;
    
    return(  
        <div>
            <Box maxH="200px">
            <Center>
            <Quizwindow 
            quiz = {k.questions} 
            quizTitle={k.quizTitle} 
            topic={k.topic} 
            course={k.course}
            date={k.date}
            />
            </Center>
            </Box> 
        </div>
      );
}

export default Attendquiz;