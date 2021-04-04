import {
    Box
} from '@chakra-ui/react'
import React , { Component , useState,useEffect } from "react";
import Quizwindow from '../quizlogic/quizwindow'

class Quizblock extends React.Component {

constructor(props) 
{
    super(props);
    this.state = {
    data: [],
    showComponent: false,
    loading: true
};
      this._onButtonClick = this._onButtonClick.bind(this);
}

async componentDidMount() {
    fetch(`http://localhost:5003/quiz/${this.props.id}`)
    .then(response => response.json())
    .then(data => this.setState({ data:data,loading:false }));
}
  
_onButtonClick() {
      this.setState({
        showComponent: true,
      });
}
  
render() {
    return(
        <div>
            <Box as="button" bg="purple.500"  h='150px' w = '150px' 
            onClick = {this._onButtonClick}
            >
                <Box
                mt="1"
                fontWeight="bold"
                fontSize='2xl'
                as="h2"
                lineHeight="tight"
                color="black"
                isTruncated
                >
                {this.props.quizTitle}
                </Box>
                <Box
                mt="1"
                as="h4"
                fontSize='sm'
                lineHeight="tight"
                color="white"
                isTruncated
                >
                {this.props.quizSynopsis}
                </Box>
            </Box>
            {(this.state.showComponent && !this.state.loading)?
                <Quizwindow quiz = {this.state.data}/> :
                null
            }
        </div>
    );
}
}

export default Quizblock;