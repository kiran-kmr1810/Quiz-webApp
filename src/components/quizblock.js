import {
    Box,Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    Portal,
    Text,
    HStack,
    Stack
} from '@chakra-ui/react'
import React  from "react";
import { Link ,useHistory } from "react-router-dom";



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
    this.state.showComponent = false;
    this.state.loading = true;
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
            {(this.state.showComponent && !this.state.loading)?
             <>
             <Text>loading...</Text>
             </>
            :
            <Link to = {{
              pathname:'/quiz', 
              aboutProps:{
                    questions : this.state.data
                }
              }}>
            <Box
            as="button"
            fontWeight="bold"
            borderRadius="md"
            bgColor = "orange.400"
            onClick = {this._onButtonClick}
            _hover={{bg:"Black",}}
            h = "100%"
            w = "200px">
            <Box
                mt="1"
                fontWeight="bold"
                fontSize='xl'
                as="h2"
                lineHeight="tight"
                color="white"
                isTruncated
                >
                {this.props.quizTitle}
                </Box>
                <Box
                mt="1"
                as="h5"
                fontSize='sm'
                lineHeight="tight"
                color="white"
                isTruncated
                >
                Topic : {this.props.topic}
                </Box>
                <Box
                mt="1"
                as="h4"
                fontSize='sm'
                lineHeight="tight"
                color="white"
                isTruncated
                >
                Course : {this.props.course}
                </Box>
                <Box
                mt="1"
                as="h4"
                fontSize='sm'
                lineHeight="tight"
                color="white"
                isTruncated
                >
                Duration: {this.props.duration}
                </Box>
            </Box>
            </Link>
           
}
        </div>
    );
}
}

export default Quizblock;