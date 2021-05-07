import React from 'react';
import { Box, Center, Text, VStack} from '@chakra-ui/layout';
import Profile from './components/profile';
import { Button } from '@chakra-ui/button';
import { useHistory } from "react-router-dom";
import firebase from 'firebase';

function About() {
    var uid =  firebase.auth().currentUser.uid
    console.log(uid);
    let history = useHistory();
    return (
        <div>
            <Box py='2px' bgColor='orange.400'>
            <VStack spacing='30px'>
            <Box w='100%' h='100%' px='30px' paddingTop='20px'>
                <Button w='100px'h='30px'mt={4}
                bgColor='black'
                color='orange.400'
                _hover={{
                    color:"black",
                    bg:"white"
                    }}
                    onClick={history.goBack}>
                    GO BACK
                </Button>
            <Center>
                <Text 
                fontSize= '32' 
                fontWeight='medium'
                color='black'
                >PERSONAL DETAILS</Text>
            </Center>
                <Box bgColor='black' h='5px' w='100%'/>
            </Box>
            <Profile uid = {uid}/>
            </VStack>
            </Box>
        </div>
    )
}

export default About;