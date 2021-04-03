import React , { Component , useState,useEffect } from "react";
import Quizwindow from '../quizlogic/quizwindow'
import fire from "../config/fire";
import Quizblock from "../components/quizblock";
import { Box, Center ,SimpleGrid, Text} from '@chakra-ui/layout';

class Shome extends Component{

constructor(props)
{
    super(props)
    this.state = { 
        data: [],
        quizzy: [],
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

async quizwithid(id){
    
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
        <Text>Student Quiz portal</Text>
          <Box py='100px'>
            {/*<Center>
            <SimpleGrid columns={3} spacing={5}>
            {this.state.data.map((quiz) => (
            <Quizblock
            quizTitle={quiz.quizTitle}
            quizSynopsis={quiz.quizSynopsis}
            id={quiz._id}
            />
            ))}
            </SimpleGrid>
            </Center>*/}
            <Quizwindow quiz = {this.state.data}/>
          </Box>
        </div>
      );
}
}
export default Shome;