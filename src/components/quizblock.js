import {
    Box
} from '@chakra-ui/react'
import React  from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
            {(this.state.showComponent && !this.state.loading)?
             <>
             </>
             :
             <Link to = {{
                pathname:'/quiz',
                aboutProps:{
                    questions :this.state.data
                }
            }}>
            <Box
            as="button"
            //color="white"
            fontWeight="bold"
            borderRadius="md"
            //bgGradient= "linear(to-r, red.500, yellow.500)"
            bgColor = "orange.400"
            onClick = {this._onButtonClick}
            _hover={{
                bg:"Black",
            }}
            h = "130px"
            w = "200px"
            >
            <Box
                mt="1"
                fontWeight="bold"
                fontSize='2xl'
                as="h2"
                lineHeight="tight"
                color="white"
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
            </Link>
}
        </div>
    );
}
}

export default Quizblock;