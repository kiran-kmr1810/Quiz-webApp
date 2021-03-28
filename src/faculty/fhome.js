import React , { Component } from "react";
import fire from "../config/fire";
import Navbar from '../components/navbar';
import Quizblockcluster from "../components/quizblockcluster"
import {
    Button,
    Spacer,
    Grid,
    Text
} from '@chakra-ui/react'
import  { Link } from 'react-router-dom'

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
           <h1>Faculty Home Page</h1>
           <Link to='/createquiz' > 
           <Button bg='black' color='white'>CREATE QUIZ</Button>
           </Link>
        </div>
    )
}
}
export default Fhome;