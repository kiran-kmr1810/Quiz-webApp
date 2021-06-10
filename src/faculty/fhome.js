import React , { Component } from "react";
import {
    Box,
    Button,
    Text,
    Stack,
    Center,
    SimpleGrid,
    Heading,
    HStack,
    CircularProgress
} from '@chakra-ui/react'
import  { Link } from 'react-router-dom'
import teach from '../Animation/teach.svg';
import Quizblock from "../components/quizblock";

class Fhome extends Component{


constructor(props)
{
    super(props)
    this.state = { 
        data: [],
        loading: true
    };
}

async componentDidMount() {
    fetch(`https://quizapp1810.herokuapp.com/quiz/`)
    .then(response => response.json())
    .then(data => this.setState({ data:data,loading:false }));
}

componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}



render()
{
return((this.state.loading)?
    <div>
        <Center>
        <Box
        w = "100%"
        h = "600px"
        py = "100px"
        >
        <Center>
        <CircularProgress isIndeterminate color="orange.400" size="150px" thickness="10px" />
        </Center>
        </Box>
        </Center>
    </div>

    :
    
    <div>
           <Box p='50px' bgColor='orange.400' w='100%' h='800px'>
           <Box>
            <Text 
            fontSize= '32' 
            fontWeight='medium'
            color='black'
            >FACULTY HOME PAGE</Text>
            <Box bgColor='black' h='5px' w='100%'/>
            </Box>
            <HStack spacing='100px'>
            <Stack spacing='15px'>
                <Link to='/createquiz' > 
                    <Button bgColor = "black"
                    color='orange.400'
                    width='650px' 
                    mt={4}
                    _hover={{color:"white"}}>
                    CREATE NEW QUIZ</Button>
                </Link>

                <Box 
                h = "100%"
                w = "650px"
                bgColor='whiteAlpha.800'
                borderRadius="3xl"
                px = '40px'
                py = '20px'
                px={4}
                >
                <SimpleGrid spacing="20px">
                <Center>
                <Box py="10px" color="black"> <Heading>List of All Quizzes</Heading></Box>
                </Center>

                <SimpleGrid columns={3} spacing="20px">
                {this.state.data.map((quiz) => (
                
                <Quizblock
                quizTitle={quiz.quizTitle}
                quizSynopsis={quiz.quizSynopsis}
                topic={quiz.topic}
                course={quiz.course}
                duration={quiz.duration}
                date={quiz.date}
                stime={quiz.stime}
                ftime={quiz.ftime}
                id={quiz._id}
                />
                ))}
                </SimpleGrid>
                </SimpleGrid>
                </Box>
            </Stack>
            <img src={teach} width = '400px' Height = '400px' />
            </HStack>
           </Box>
        </div>
    )
}
}
export default Fhome;