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
    Stack,
    CircularProgress,
    Center
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
             <div>
             <Center>
             <Box
             w = "100%"
             h = "600px"
             py = "100px"
             >
             <Center>
             <CircularProgress isIndeterminate color="orange.400" size="150px" thickness="10px" />
             </Center>
             </Box>
             </Center>
           </div>
            :
            <Link to = {{
              pathname:'/quiz', 
              aboutProps:{
                    questions : this.state.data,
                    quizTitle : this.props.quizTitle,
                    topic : this.props.topic,
                    course : this.props.course,
                    date : this.props.date
                }
              }}>
            <Popover trigger='hover' placement="left">
            <PopoverTrigger>
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
                    <Text color='black' fontSize='xs' fontWeight='bold'>SYNOPSIS</Text>
                    <Text color='black' fontSize='xs' fontWeight='bold'>: {this.props.quizSynopsis}</Text>
                    </HStack>
                    <HStack spacing='1px'>
                    <Text color='black' fontSize='xs' fontWeight='bold'>DATE</Text>
                    <Text color='black' fontSize='xs' fontWeight='bold'>: {this.props.date}</Text>
                    </HStack>
                    <HStack spacing='1px'>
                    <Text color='black' fontSize='xs' fontWeight='bold'>DURATION</Text>
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
            </Link>
           
}
        </div>
    );
}
}

export default Quizblock;