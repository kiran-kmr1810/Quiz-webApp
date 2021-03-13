import React , { Component } from "react";
import fire from "./config/fire";
import firebase from 'firebase';
import { Button} from "@chakra-ui/react"
import log from './Animation/log.svg'
import {
    Box,
    Flex,
    Link,
    FormControl,
    FormLabel,
    Input,
    Stack,
} from '@chakra-ui/react'

class Login extends Component{

state={
        email : "",
        password : "",
        role : "",
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
        await fetch(`http://localhost:5003/login/uid/${uid}`)
        .then((response) => response.json()) 
        .then((role) => {
            window.user = {role : role}
            this.props.loadrole();
        });
    }).catch((err)=>{
        console.log(err);
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
            <Box bg="blackAlpha.800" px={4} height = '30px'>
            </Box>
            <Flex minHeight='100vh' width='full' align='center' justifyContent='space-around' bg="grey" >
            <Box >
            <img src={log} width = '600px' Height = '600px' />
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

            <Stack isInline justifyContent='space-between' mt={4}>
                {/*<Box>
                    <Checkbox>Remember Me</Checkbox>
                </Box>*/}
                <Box>
                    <Link color ="teal">Forgot your password?</Link>
                </Box>
            </Stack>

            <Button colorScheme = "purple"
                onClick={this.login}  
                width='full' 
                mt={4}
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