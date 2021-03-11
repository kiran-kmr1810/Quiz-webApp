import React , { Component } from "react";
import fire from "./config/fire";
import firebase from 'firebase';

class Login extends Component{

state={
        email : "",
        password : "",
        role : ""
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


handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}

render()
{
    return(
        <div>
            <form>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="enter email address"
                onChange={this.handleChange}
                value={this.state.email}
                />
                <input
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="enter password"
                value={this.state.password}
                />
                <button onClick={this.login}>Login</button>
            </form>

        </div>
    )
}
}
export default Login;