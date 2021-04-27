import { Text,Center,Box,SimpleGrid,Table,Thead,Tbody,Tr,Th,Td,TableCaption, VStack, } from "@chakra-ui/react";
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
          <SimpleGrid>
          <Text fontSize="4xl">HOLD YOUR BREATH</Text>
          <img src={load} width = '300px' Height = '300px' />
          </SimpleGrid>
          </Center>
          </Box>
          </Center>
        </div>

        :<div>
        <GoBack/>
        <VStack>
        <Box>
            <Text 
            fontSize= '22' 
            fontWeight='medium'
            color='black'
            >MY MARKS</Text>
        <Box bgColor='black' h='5px' w='1000px'/>
        </Box>
        <Box p='30px'>
        <Box w='800px' h='100%' p='5px' bgColor='black'>
        <Table variant="striped" color='orange.400' bgColor='white' >
        <Thead>
            <Tr>
            <Th fontWeight='extrabold' color='black' fontSize='13'>QUIZ NAME</Th>
            <Th fontWeight='extrabold' color='black' fontSize='13'>COURSE</Th>
            <Th fontWeight='extrabold' color='black' fontSize='13'>TOPIC</Th>
            <Th fontWeight='extrabold' color='black' fontSize='13'>DATE</Th>
            <Th isNumeric fontWeight='extrabold' color='black' fontSize='13'>MARKS</Th>
            </Tr>
        </Thead>
        <Tbody>
        {this.state.data.map((quiz) => (
            <Tr>
            <Td fontWeight='bold'>{quiz.quizTitle}</Td>
            <Td fontWeight='bold'>{quiz.course}</Td>
            <Td fontWeight='bold'>{quiz.topic}</Td>
            <Td fontWeight='bold'>{quiz.date}</Td>
            <Td isNumeric fontWeight='bold'>{quiz.mark}</Td>
            </Tr>
        ))}
        </Tbody>
        </Table>
        </Box>
        </Box>
        </VStack>
    </div>           
);}}

export default Mark;
