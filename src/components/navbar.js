import {
    Box,
    Avatar,
    HStack,
    Spacer,
    Button,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { Link } from "react-router-dom";

export default function Navbar() {
return(
<div>
<Box 
//bgGradient= "linear(to-r, red.500, yellow.500)" 
bg='black'
px={4} height = '50px'>
<HStack spacing="24px"py = '10px'>
    <Text color='orange.400' 
    size='md' fontSize= '22' 
    fontFamily='sans-serif'
    letterSpacing='widest' f
    ontWeight='extrabold'>QUIZZY</Text>

    <Spacer />   
    
    <Menu placement='left-start'>
    <MenuButton>
    <Avatar bgColor='orange.400' size = "sm"/>
    </MenuButton>
    <MenuList maxW='10px'>
        <Link to = '/'><MenuItem>LOGOUT</MenuItem></Link>
    </MenuList>
    </Menu>

</HStack>
</Box>
<Box bgColor='orange.400' h='3px' w='100%'/>
</div>
);
}