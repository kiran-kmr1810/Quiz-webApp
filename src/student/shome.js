import React , { Component } from "react";
import fire from "../config/fire";
import Quizblock from "../components/quizblock";
import { Box, Center ,Heading,HStack,SimpleGrid,VStack,CircularProgress}from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import exam from '../Animation/exam.svg';

var sectionStyle = {
  width: "100%",
  height: "100%",
  //backgroundImage: `url(${doo})`
};


class Shome extends Component{

constructor(props)
{
    super(props)
    this.state = { 
        data: [],
        loading: true
    };
}

async componentDidMount() {
    fetch(`https://quizapp1810.herokuapp.com/quiz/quizcurr/current`)
    .then(response => response.json())
    .then(data => this.setState({ data:data,loading:false }));
}

componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}

async quizwithid(id){
    
}

myFunction() {
    this.props.history.push('/')
  }
logout(){
    fire.auth().signOut();
}

render()
{
    return(
        (this.state.loading)?
        <div>
          <Center>
          <Box
          w = "100%"
          h = "800px"
          py = "100px"
          >
          <Center>
          <CircularProgress isIndeterminate color="orange.400" size="150px" thickness="10px" />
          </Center>
          </Box>
          </Center>
        </div>

        :<div>
          <Box py='50px'
            style = {sectionStyle}
            minH = "500px"
          >
          <VStack>
          <HStack spacing="100px">
          <Box  w="500px" h ='375px'paddingLeft='50px' >
          <img src={exam} width = '400px' Height = '400px'/>
          </Box>
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
            <Box py="10px" color="black"> <Heading>Available Quizzes</Heading></Box>
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
            </HStack>
            </VStack>
          </Box>
          <Box  pos="fixed" h='150px' w='100%' bg='black' p ='25px'>
              <Center>
              <HStack spacing='250px'>
              <Link to = '/mark'>
                <Button  bgColor='black' color='white'
                _hover={{
                bg:"black",
                color:"orange.400"
                }}>
                MY MARKS</Button>
              </Link>
              
                <Link to = '/about'>
                <Button  bgColor='black' color='white'
                _hover={{
                bg:"black",
                color:"orange.400"
                }}>
                ABOUT ME</Button>
                </Link>

                <Link to = '/'>
                <Button  bgColor='black' color='white'
                _hover={{
                bg:"black",
                color:"orange.400"
                }}>
                LOGOUT</Button>
                </Link>

              </HStack>
              </Center>
            </Box>
        </div>
      );
}
}
export default Shome;