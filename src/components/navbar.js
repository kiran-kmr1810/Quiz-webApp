import logo from '../Animation/logo.PNG'
import {
    Box,
    Avatar,
    HStack,
    Spacer,
    Button,
} from '@chakra-ui/react'

export default function Navbar() {
return(
<Box bg="black" px={4} height = '50px'>
<HStack spacing="24px"py = '10px'>
    <img src={logo} width = '90px' Height = '90px' />
    <Spacer />
    <Button size = 'md' color = 'white' variant="link"> HOME </Button>
    <Button size = 'md' color = 'white' variant="link"> ABOUT </Button>
    <Button size = 'md' color = 'white' variant="link"> MARKS </Button>

    <Avatar bg="purple.500" size = "sm"/>
</HStack>
</Box>
);
}