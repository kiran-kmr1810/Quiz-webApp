import { HStack ,FormControl,FormLabel,Input, Box,Select,Text,Button,Center,useToast} from '@chakra-ui/react';
import React, {useState} from 'react';
import add from '../Animation/add.svg';
import fire from "../config/fire";
import axios from 'axios';

const Admin = () => {
    const toast = useToast()
    const [email, setemail] = useState();
    const [name, setname] = useState();
    const [role, setrole] = useState();
    const [id, setid] = useState();
    const [phone, setphone] = useState();
    const [cl, setcl] = useState();
    const [password,setpassword] = useState();
    const [imgl,setimgl] = useState();
    var a = "";

    const signup = async({e, p}) => {
        await fire.auth().createUserWithEmailAndPassword(e,p).then(async(u)=>
        {   
                a = u.user.uid;
        })

    }

    const handleSubmit = async(e) =>{
        
        const pass ={
            "e" : email,
            "p" : password,
        }

        await signup(pass)

        const out = {
            "email": email,
            "uid": a,
            "password": password,
            "name": name,
            "role": role,
            "id": id,
            "phone": phone,
            "cl": cl,
            "imgl":imgl,
        }
        axios.post(`http://localhost:5003/login/add`, out)
        .catch(error => {
          this.setState({ errorMessage: error.message });
          console.error('There was an error!', error);
        });
    }

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
        <Input type="email" placeholder="Email id" onChange={e => setemail(e.target.value)}/>
        </FormControl>

        <FormControl id="password" isRequired>
        <FormLabel color='orange.400'>Password</FormLabel>
        <Input  placeholder="password" onChange={e => setpassword(e.target.value)}/>
        </FormControl>

        <FormControl id="imgl" isRequired>
        <FormLabel>Drive Image Id</FormLabel>
        <Input  placeholder="Paste the id of your image uploaded togoogle drive" onChange={e => setimgl(e.target.value)}/>
        </FormControl>

        <FormControl id="Name" isRequired>
        <FormLabel color='orange.400'>Name</FormLabel>
        <Input placeholder="Name" onChange={e => setname(e.target.value)}/>
        </FormControl>

        <FormControl id="role">
        <FormLabel>Role</FormLabel>
        <Select placeholder="faculty or student" onChange={e => setrole(e.target.value)}>
            <option>Faculty</option>
            <option>Student</option>
        </Select>
        </FormControl>

        <FormControl id="id" isRequired>
        <FormLabel color='orange.400'>ID</FormLabel>
        <Input placeholder="Rollno or facultyid" onChange={e => setid(e.target.value)}/>
        </FormControl>

        <FormControl id="phone" isRequired>
        <FormLabel>phone</FormLabel>
        <Input placeholder="phone no" onChange={e => setphone(e.target.value)}/>
        </FormControl>

        <FormControl id="class" isRequired>
        <FormLabel color='orange.400'>class</FormLabel>
        <Input placeholder="class" onChange={e => setcl(e.target.value)}/>
        </FormControl>
        <Center>
        <Button bgColor = "orange.400" 
                width='full' 
                mt={4}
                _hover={{
                    bg:"black",
                    color:"orange.400"
                    }}
                onClick={() =>  {toast({
                        title: "NEW USER ADDED",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                });handleSubmit();}}
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

export default Admin;

