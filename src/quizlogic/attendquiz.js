import React from "react";
import Quizwindow from './quizwindow'
import { Box, Center} from '@chakra-ui/layout';

const Attendquiz = (props) =>
{
    const k = props.location.aboutProps;
    return(
        <div>
            <Box>
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