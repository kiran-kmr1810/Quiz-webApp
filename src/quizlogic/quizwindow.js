import { Box, Center} from '@chakra-ui/layout';
import Quiz from 'react-quiz-component';
import React, {Component } from 'react'; 

class Quizwindow extends Component{

  constructor(props)
  {
      super(props)
      this.state = { 
          data: [],
          loading: true
      };
  }
  
  async componentDidMount() {
      fetch(`http://localhost:5003/quiz/6062c76278a1ac21ccfd15a3`)
      .then(response => response.json())
      .then(data => this.setState({ data:data,loading:false }));
  }
  
  componentWillUnmount() {
      // fix Warning: Can't perform a React state update on an unmounted component
      this.setState = (state,callback)=>{
          return;
      };
  }
  render()
  {
    return(
      (this.state.loading)?
      <div>
    
      </div>
      :<div>
        <Box>
          <Center>
          <Quiz quiz={this.state.data} shuffle={true}/>
          </Center>
        </Box>
      </div>
    );
}
}

export default Quizwindow;