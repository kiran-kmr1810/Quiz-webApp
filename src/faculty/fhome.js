import React , { Component } from "react";
import fire from "../config/fire";
import {
    Box,
    Button,
    HStack,
    Text,
    VStack,
} from '@chakra-ui/react'
import  { Link } from 'react-router-dom'
import teach from '../Animation/teach.svg';


class Fhome extends Component{

state = {

}
constructor(props)
{
    super(props)
}
logout(){
    fire.auth().signOut();
}
addques(){
    return(
        <div>

        </div>
    )
}
render()
{
    return(
        <div>
           <Box p='50px' bgColor='orange.400' w='100%' h='567px'>
           <Box>
            <Text 
            fontSize= '32' 
            fontWeight='medium'
            color='orange.900'
            >Faculty Home Page</Text>
            <Box bgColor='black' h='5px' w='100%'/>
            </Box>
            <HStack spacing='200px'>
                <img src={teach} width = '500px' Height = '500px' />
                <VStack spacing='150px'>
                <Link to='/createquiz' > 
                <Button bgColor = "orange.400" 
                width='full' 
                fontSize='5xl'
                mt={4}
                color='white'
                _hover={{
                    //bg:"black",
                    color:"black"
                    }}
                >CREATE NEW QUIZ</Button>
                </Link>
                <Link to = '/'>
                <Button bgColor = "orange.400" 
                width='full' 
                mt={4}
                _hover={{
                    bg:"black",
                    color:"orange.400"
                    }}
                >Logout</Button>
                </Link>
                </VStack>
            </HStack>
           </Box>
        </div>
    )
}
}
export default Fhome;