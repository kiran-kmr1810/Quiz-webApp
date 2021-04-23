import {
    Box, useColorModeValue,Avatar, Heading,Text,Stack
} from '@chakra-ui/react'
import React  from "react";

const data = {
    imageURL:'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Lindsey morgan',
    role: 'student',
    rollno:'CB.EN.U4CSE18430',
    class: 'CSE E',
    phone: 8056961720,
    mail: "kk10@gmail.com",
  };

function Profile(){
    return (
        <div>
        <Box
        w='500px'
        h='450px'
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>

        <Avatar
          size={'2xl'}
          src={data.imageURL}
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'3xl'} fontFamily={'cursive'}>
          {data.name}
        </Heading>
        <Text fontWeight={600} fontSize='28' color={'orange.400'} mb={4}>
          {data.role}
        </Text>
        <Text
          textAlign={'center'}
          fontSize='20'
          //bg ={useColorModeValue('orange.700', 'orange.400')}
          color='black'
          px={3}>
          {data.rollno}
        </Text>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6} paddingBottom ='20px'>
          <Text
            px={2}
            py={1}
            bg='orange.400'
            color='white'
            >
            {data.class}
          </Text>
          <Text
            px={2}
            py={1}
            bg='orange.400'
            color='white'
            >
            {data.phone}
          </Text>
        </Stack>
        <Text
            px={2}
            py={1}
            bg='orange.400'
            color='white'
            >
            {data.mail}
          </Text>
        </Box>
        </div>
    )
}

export default Profile;