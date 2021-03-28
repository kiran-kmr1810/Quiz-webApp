import React , { Component } from "react";
import fire from "../config/fire";
import Quizblockcluster from "../components/quizblockcluster"
import Quizwindow from '../quizlogic/quizwindow'
import {
    Box, Button,  
} from '@chakra-ui/react'


class Shome extends Component{

state = {
    name : "Kiran kumar A",
    listitems: ["15CSE111 QUIZ 1", "15CSE456 PERIODICAL 2", "15CSE566 REQUIZ 3"]
}
constructor(props)
{
    super(props)
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
        <div>
            <Quizwindow/>
            <Button onClick={this.logout}>LOGout</Button>
        </div>
    )
}
}
export default Shome;