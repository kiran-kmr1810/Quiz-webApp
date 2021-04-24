import { HStack ,FormControl,FormLabel,Input, Box,Select,Text,Button,Center} from '@chakra-ui/react';
import React from 'react';
import add from '../Animation/add.svg';

function admin(){
    return(
    <div>
        <HStack p='40px' spacing='150px'>
        <Box w='600px' h='100%' p='20px' border='2px' bgColor='blackAlpha.100'>
        <Box>
        <Text 
        fontSize= '32' 
        fontWeight='medium'
        color='black'
        >ADD NEW USER</Text>
        <Box bgColor='black' h='5px' w='100%'/>
        </Box>
        <Box py='30px'>
        <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Email id"/>
        </FormControl>

        <FormControl id="Name" isRequired>
        <FormLabel color='orange.400'>Name</FormLabel>
        <Input placeholder="Name"/>
        </FormControl>

        <FormControl id="role">
        <FormLabel>Role</FormLabel>
        <Select placeholder="faculty or student">
            <option>Faculty</option>
            <option>Student</option>
        </Select>
        </FormControl>

        <FormControl id="id" isRequired>
        <FormLabel color='orange.400'>ID</FormLabel>
        <Input placeholder="Rollno or facultyid"/>
        </FormControl>

        <FormControl id="phone" isRequired>
        <FormLabel>phone</FormLabel>
        <Input placeholder="phone no"/>
        </FormControl>

        <FormControl id="class" isRequired>
        <FormLabel color='orange.400'>class</FormLabel>
        <Input placeholder="class"/>
        </FormControl>
        <Center>
        <Button bgColor = "orange.400" 
                width='full' 
                mt={4}
                _hover={{
                    bg:"black",
                    color:"orange.400"
                    }}
                >
            ADD USER
        </Button>
        </Center>
        </Box>
        </Box>
        <img src={add} width = '400px' Height = '400px' />
        </HStack>
    </div>   
    )
}

export default admin;

