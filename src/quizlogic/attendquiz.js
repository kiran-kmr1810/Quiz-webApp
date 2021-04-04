import React from "react";
import Quizwindow from './quizwindow'
import { Box, Center} from '@chakra-ui/layout';

const Attendquiz = (props) =>
{
    const k = props.location.aboutProps;
    console.log(k.questions);
    return(
        <div>
            <Box>
            <Center>
            <Quizwindow quiz = {k.questions}/> 
            </Center>
            </Box>
        </div>
      );
}

export default Attendquiz;