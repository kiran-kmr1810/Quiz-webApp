import React from 'react';
import { Box, Center, HStack, Text, VStack} from '@chakra-ui/layout';
import selfie from './Animation/selfie.svg';
import Profile from './components/profile';

function About(){
    return (
        <div>
            <Box py='10px' bgColor='orange.400'>
            <VStack spacing='30px'>
            {/*<img src={selfie} width = '200px' Height = '200px'/> */}
            <Box w='100%' h='100%' px='30px' paddingTop='20px'>
            <Center>
                <Text 
                fontSize= '32' 
                fontWeight='medium'
                color='black'
                >PERSONAL DETAILS</Text>
            </Center>
                <Box bgColor='black' h='5px' w='100%'/>
            </Box>
            <Profile/>
            </VStack>
            </Box>
        </div>
    )
}

export default About;