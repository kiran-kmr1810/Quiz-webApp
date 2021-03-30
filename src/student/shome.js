import React , { Component , useState,useEffect } from "react";
import Quizwindow from '../quizlogic/quizwindow'
import fire from "../config/fire";

import Quizblockcluster from "../components/quizblockcluster"



class Shome extends Component{

constructor(props)
{
    super(props)
    this.state = { 
        data: [],
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
        <div>
            <Quizwindow/>
        </div>
    );
}
}
export default Shome;