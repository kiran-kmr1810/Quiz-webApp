import React  ,  {useState} from "react";
import fire from "../config/fire";
import firebase from 'firebase';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    useToast
} from "@chakra-ui/react"



function Mod() {
    const [emailid, setemailid] = useState();
    const toast = useToast()
    const handleSubmit = async(e) =>{
        fire.auth().sendPasswordResetEmail(emailid).then(function() {
            
          }).catch(function(error) {
            // An error happened.
          });
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button bg='white' 
        color='black' 
        onClick={onOpen}
        _hover={{
            color:"black",
            bg:"white"
        }}
        >Forgot password ?</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Forgot password ?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Input type="email" placeholder="Enter your email id" onChange={e => setemailid(e.target.value)}/>
            </ModalBody>
            <ModalFooter>
              <Button bg='black' 
              color="white" 
              _hover={{
                color:"black",
                bg:"white"
                }}
              mr={3} onClick={onClose}>
                Close
              </Button>
              <Button 
              bg='orange.400' 
              _hover={{
                bg:"white"
                }}
                onClick={() =>  {
                    handleSubmit();
                    onClose();
                    toast({
                        title: "Reset password mail sent !",
                        variant: 'left-accent',
                        position: "top-right",
                        isClosable: true,
                        status: "success",
                        duration: 2000,
                    })
                }}
              >Send mail</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default Mod;