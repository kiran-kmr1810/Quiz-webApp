import React, { Component} from 'react';
import fire from './config/fire';
import Login from './login.js';
import  { Redirect } from 'react-router-dom'


class App extends Component{

  state={
    user : {},
    role : {}
  }
  constructor(props)
  {
    super(props);
  }

  componentDidMount = async () => {
    this.authListener();
    console.log(this.state.role);
  }

  loadrole(){
    this.setState({role : window.user.role});
  }

  authListener = async() =>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (
        <div className="App">
          {(() => {
        if (this.state.user) {
          if(this.state.role === "faculty"){
            return (
              <Redirect to='/fhome'  />
          )}
          else if (this.state.role === "student") {
            return (
              <Redirect to='/shome'  />
            )
          } else {
            return (
              <div>
              <Login loadrole = {this.loadrole.bind(this)}/>
              </div>
            )
          }
        }else {
          return (
            <div>
            <Login loadrole = {this.loadrole.bind(this)}/>   
            </div>
            
          )
        } 
      })()}
        </div>
    );
  }
}

export default App;