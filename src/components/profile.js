import {
    Box,Avatar, Heading,Text,Stack
} from '@chakra-ui/react'
import React  from "react";


class Profile extends React.Component {
  constructor(props) 
  {
    super(props);
    this.state = {
        data: [],
        showComponent: false,
        loading: true
    };
  }

  async componentDidMount() {
    this.state.showComponent = false;
    this.state.loading = true;
    fetch(`https://quizapp1810.herokuapp.com/login/details/${this.props.uid}`)
    .then((response) => response.json()) 
    .then(data => this.setState({ data:data,loading:false }));;   
}
    
  render() {
    return (
        <div>
        <Box
        w='500px'
        h='450px'
        bg="white"
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>

        <Avatar
          size={'2xl'}
          //src={this.state.data.imgl}
          src = {`https://drive.google.com/uc?id=${this.state.data.imgl}`}
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'3xl'} fontFamily={'cursive'}>
          {this.state.data.name}
        </Heading>
        <Text fontWeight={600} fontSize='28' color={'orange.400'} mb={4}>
          {this.state.data.role}
        </Text>
        <Text
          textAlign={'center'}
          fontSize='20'
          color='black'
          px={3}>
          {this.state.data.id}
        </Text>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6} paddingBottom ='20px'>
          <Text
            px={2}
            py={1}
            color='white'
            bg='black'
            >
            {this.state.data.cl}
          </Text>
          <Text
            px={2}
            py={1}
            bg='orange.400'
            color='white'
            >
            {this.state.data.phone}
          </Text>
        </Stack>
        <Text
            px={2}
            py={1}
            color='black'
            >
            {this.state.data.email}
          </Text>
        </Box>
        </div>
    )
}
}

export default Profile;