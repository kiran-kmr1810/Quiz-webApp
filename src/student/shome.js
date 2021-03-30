import React , { Component , useState,useEffect } from "react";
import fire from "../config/fire";
import Quiz from 'react-quiz-component';
import Quizblockcluster from "../components/quizblockcluster"
import Quizwindow from '../quizlogic/quizwindow'
import {
    Box, Button,Text  
} from '@chakra-ui/react'


class Shome extends Component{

constructor(props)
{
    super(props)
    this.state = { 
        data: [],
        loading: true
    };
}

async componentDidMount() {
    fetch(`http://localhost:5003/quiz/60620fe3714df209202c56ac`)
    .then(response => response.json())
    .then(data => this.setState({ data:data,loading:false }));
}

componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}

myFunction() {
    this.props.history.push('/')
  }
logout(){
    fire.auth().signOut();
}

render()
{
    return(
        (this.state.loading)?
        <div>
            
        </div>
        :<div>
            <Quiz quiz={this.state.data} shuffle={true}/>
            <Button onClick={this.logout}>LOGout</Button>
        </div>
    );
}
}
export default Shome;