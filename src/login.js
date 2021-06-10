import React , { Component } from "react";
import fire from "./config/fire";
import firebase from 'firebase';
import { Button} from "@chakra-ui/react"
import log from './Animation/log.svg'
import Mod from './components/modal'
import { Box,Flex,FormControl,FormLabel,Input,
    Stack,Alert,AlertIcon,AlertTitle
} from '@chakra-ui/react'

class Login extends Component{

state={
        email : "",
        password : "",
        role : "",
        err : false,
}

constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(async(u)=>
    {   
        //console.log(u)
        var uid =  await firebase.auth().currentUser.uid
        await fetch(`https://quizapp1810.herokuapp.com/login/uid/${uid}`)
        .then((response) => response.json()) 
        .then((role) => {
            window.user = {role : role}
            this.props.loadrole();
        });
    }).catch((err)=>{
        this.setState({ err: true })
        console.log(this.state.err);
    })
}


handleChange(name,value){
    this.setState({
        [name] : value
    })
}

render()
{
    return(
        <div> 
            <Flex minHeight='94vh' width='full' align='center' justifyContent='space-around' bg="orange.600" >
            <Box >
            <img src={log} width = '500px' Height = '500px' />
            </Box>
            <Box 
                borderWidth={1}
                px={4}
                width='full'
                maxWidth='500px'
                borderRadius={4}
                textAlign='center'
                boxShadow='lg'
                bg = "white"
            >
            <Box my={6} px={6} textAlign='left'>
            <form>
            <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                type ='email' 
                placeholder='Enter your email address' 
                onChange = { (a) => this.handleChange("email",a.target.value)} 
                value={this.state.email}
                />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input 
                type='password' 
                placeholder='Enter your password'
                onChange = { (a) => this.handleChange("password",a.target.value)} 
                value={this.state.password}
                 />
            </FormControl>
            { this.state.err ?
                <Box paddingTop="10px">
                    <Alert status="error">
                        <AlertIcon />
                        <AlertTitle mr={1}>Invalid Login!</AlertTitle>
                    </Alert>
                </Box> 
            :null}
            <Stack isInline justifyContent='space-between' mt={4}>
                <Box>
                    <Mod/>
                </Box>
            </Stack>

            <Button bgColor = "orange.400"
                onClick={this.login}  
                width='full' 
                mt={4}
                _hover={{
                    bg:"black",
                    color:"orange.400"
                    }}
                >LOG IN</Button>
            </form>
            </Box>
            </Box>
            </Flex>
        </div>
    )
}
}
export default Login;