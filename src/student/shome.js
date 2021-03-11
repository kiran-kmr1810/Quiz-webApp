import React , { Component } from "react";
import fire from "../config/fire";

class Shome extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    fire.auth().signOut();
}
render()
{
    return(
        <div>
           <h1>Student</h1>
            <button onClick={this.logout}>Logout</button>
        </div>
    )
}
}
export default Shome;