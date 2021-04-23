import {
    Box,
    Avatar,
    HStack,
    Spacer,
    Button,
    Text,
} from '@chakra-ui/react'

export default function Navbar() {
return(
<div>
<Box 
//bgGradient= "linear(to-r, red.500, yellow.500)" 
bg='black'
px={4} height = '50px'>
<HStack spacing="24px"py = '10px'>
    <Text color='orange.400' size='md' fontSize= '22' fontFamily='sans-serif'letterSpacing='widest' fontWeight='extrabold'>QUIZZY</Text>
    <Spacer />
    <Button size = 'md' color = 'white' variant="link"> HOME </Button>
    <Button size = 'md' color = 'orange.400' variant="link"> ABOUT </Button>
    <Button size = 'md' color = 'white' variant="link"> MARKS </Button>

    <Avatar bgColor='orange.400' size = "sm"/>
</HStack>
</Box>
<Box bgColor='orange.400' h='3px' w='100%'/>
</div>
);
}