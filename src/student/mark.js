import { Text,Center,Box,SimpleGrid,Table,Thead,Tbody,Tr,Th,Td,CircularProgress, VStack, } from "@chakra-ui/react";
import React , { Component } from "react";
import firebase from 'firebase';
import load from '../Animation/loading.svg';
import GoBack from '../components/goback';  


class Mark extends Component{

constructor(props)
{
    super(props)
    this.state = { 
        data: [],
        loading: true,
        uid: 0
    };
}

async componentDidMount(){
    var uid =  await firebase.auth().currentUser.uid
    this.setState({uid:uid})
    fetch(`http://localhost:5003/result/uid/${this.state.uid}`)
    .then(response => response.json())
    .then(data => this.setState({ data:data,loading:false }));
}

render()
{return(
        (this.state.loading)?
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

        :<div>
        <Box bgColor='orange.600' h='580px'>
        <Box p='20px'>
            <GoBack/>
        </Box>
        <VStack>
        <Box>
            <Text 
            fontSize= '22' 
            fontWeight='medium'
            color='white'
            >MY MARKS</Text>
        <Box bgColor='black' h='5px' w='1000px'/>
        </Box>
        <Box p='30px'>
        <Box w='800px' h='100%' p='5px' bgColor='black'>
        <Table variant="striped" color='orange.400' bgColor='white' >
        <Thead bgColor='black'>
            <Tr>
            <Th fontWeight='extrabold' color='white' fontSize='15'>QUIZ NAME</Th>
            <Th fontWeight='extrabold' color='white' fontSize='15'>COURSE</Th>
            <Th fontWeight='extrabold' color='white' fontSize='15'>TOPIC</Th>
            <Th fontWeight='extrabold' color='white' fontSize='15'>DATE</Th>
            <Th isNumeric fontWeight='extrabold' color='white' fontSize='15'>MARKS</Th>
            </Tr>
        </Thead>
        <Tbody>
        {this.state.data.map((quiz) => (
            <Tr>
            <Td fontWeight='bold' color='black'>{quiz.quizTitle}</Td>
            <Td fontWeight='bold' color='black'>{quiz.course}</Td>
            <Td fontWeight='bold' color='black'>{quiz.topic}</Td>
            <Td fontWeight='bold' color='black'>{quiz.date}</Td>
            <Td isNumeric fontWeight='bold'color='black'>{quiz.mark}</Td>
            </Tr>
        ))}
        </Tbody>
        </Table>
        </Box>
        </Box>
        </VStack>
        </Box>
    </div>           
);}}

export default Mark;
