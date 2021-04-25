import {
    Box,Popover,Button,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    Portal,
    PopoverCloseButton,
    Text,
    HStack,
    Stack
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
             <Popover trigger='hover' placement="left">
             <PopoverTrigger>
            <Link to = {{pathname:'/quiz',aboutProps:{questions :this.state.data}}}>
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
            </PopoverTrigger>
            <Portal>
            <PopoverContent bgColor='orange.400'>
              <PopoverArrow />
              <PopoverHeader>
              <Text color='black' fontSize='s' fontWeight='bold'>
              {this.props.quizTitle}
              </Text>
            </PopoverHeader>
              <PopoverBody>
                <Box>
                    <Stack spacing='3px'>
                    <HStack spacing='1px'>
                    <Text color='black' fontSize='xs' fontWeight='bold'>COURSE</Text>
                    <Text color='black' fontSize='xs' fontWeight='bold'>: {this.props.course}</Text>
                    </HStack>
                    <HStack spacing='1px'>
                    <Text color='black' fontSize='xs' fontWeight='bold'>TOPIC</Text>
                    <Text color='black' fontSize='xs' fontWeight='bold'>: {this.props.topic}</Text>
                    </HStack>
                    <HStack spacing='1px'>
                    <Text color='black' fontSize='xs' fontWeight='bold'>quizSynopsis</Text>
                    <Text color='black' fontSize='xs' fontWeight='bold'>: {this.props.quizSynopsis}</Text>
                    </HStack>
                    <HStack spacing='1px'>
                    <Text color='black' fontSize='xs' fontWeight='bold'>Date</Text>
                    <Text color='black' fontSize='xs' fontWeight='bold'>: {this.props.date}</Text>
                    </HStack>
                    <HStack spacing='1px'>
                    <Text color='black' fontSize='xs' fontWeight='bold'>Duration</Text>
                    <Text color='black' fontSize='xs' fontWeight='bold'>: {this.props.duration}</Text>
                    </HStack>
                    </Stack>
                </Box>
              </PopoverBody>
              <PopoverFooter>
              <Text color='white' fontSize='s' fontWeight='bold'>
              {this.props.stime} - {this.props.ftime}
              </Text>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
}
        </div>
    );
}
}

export default Quizblock;