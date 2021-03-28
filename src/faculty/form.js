import React, { useState } from 'react'; 
import { Input,Stack,Button,InputLeftAddon,InputGroup,HStack,Center, Box } from "@chakra-ui/react"
import { v4 as uuidv4 } from 'uuid';

const Form = () => {  
    const [inputFields, setInputFields] = useState(
      [{
        id: uuidv4(),
        question: '' ,
        oa:'',
        ob:'',
        oc:'',
        od:'',
        answer:'',
        explanation:'',
        mark:''
      },
      ]);

    const handleSubmit = (e) => {
        console.log("InputFields", inputFields);
    };
    
    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        
        setInputFields(newInputFields);
      }

    const handleAdd = () => {
        setInputFields([...inputFields, { 
            id: uuidv4(),
            question: "" ,
            oa:"",
            ob:"",
            oc:"",
            od:"",
            answer:"",
            explanation:"",
            mark:""
         }])
      }

    function handleRemove(i) {
        const values = [...inputFields];
        values.splice(i, 1);
        setInputFields(values);
    }

  return (     
    <Box padding='20px'>   
    <Center>
    <form>     
      <Stack spacing={3}> 

        <InputGroup W='700px'>   
        <InputLeftAddon children="Quiz ID" borderColor='black'/> 
        <Input type="text" focusBorderColor="black" borderColor='black' name="Quiz id" id="Qid" />
        </InputGroup>

        <InputGroup W='700px'>   
        <InputLeftAddon children="Quiz Name" borderColor='black'/> 
        <Input type="text" focusBorderColor="black" borderColor='black' name="Name" id="name" />
        </InputGroup>

        <InputGroup W='700px'>      
        <InputLeftAddon children="Course ID" borderColor='black'/> 
        <Input type="text" focusBorderColor="black" borderColor='black' name="course id" id="courseid" />
        </InputGroup>

        <div className="App">
        {inputFields.map(inputField =>(
            <div key={inputField.id}>
                <HStack spacing={8} border='2px'>
                <Box py = "10px" px= "10px">
                <HStack spacing={3}>
                <Box>

                <Input
                name='question'
                type="text"
                placeholder="Question"
                borderColor='black'
                value={inputField.question}
                onChange={event => handleChangeInput(inputField.id, event)}
                />

                <Input
                name = "oa"
                type="text"
                placeholder="Option A"
                borderColor='black'
                value={inputField.oa}
                onChange={event => handleChangeInput(inputField.id, event)}
                />

                <Input
                name = "ob"
                type="text"
                placeholder="Option B"
                borderColor='black'
                value={inputField.ob}
                onChange={event => handleChangeInput(inputField.id, event)}
                />

                <Input
                name = "oc"
                type="text"
                placeholder="Option C"
                borderColor='black'
                value={inputField.oc}
                onChange={event => handleChangeInput(inputField.id, event)}
                />

                <Input
                name = "od"
                type="text"
                placeholder="Option D"
                borderColor='black'
                value={inputField.od}
                onChange={event => handleChangeInput(inputField.id, event)}
                />

                </Box>
                <Box>

                <Input
                name = "answer"
                type="text"
                placeholder="Correct Option"
                borderColor='green'
                value={inputField.answer}
                onChange={event => handleChangeInput(inputField.id, event)}
                />

                <Input
                name = "explanation"
                type="text"
                placeholder="Explanation"
                borderColor='black'
                value={inputField.explanation}
                onChange={event => handleChangeInput(inputField.id, event)}
                />

                <Input
                name = "mark"
                type="text"
                placeholder="Marks"
                borderColor='black'
                value={inputField.mark}
                onChange={event => handleChangeInput(inputField.id, event)}
                />

                </Box>
                </HStack>
                </Box>
                <Button type="button" bg = 'red' onClick={() => handleRemove(inputField.id)}>
                X
                </Button>
                </HStack>
            </div>   
            ))}
        </div>
        
        <Button W='700px' color='white' bg ='purple.500' onClick={() => handleAdd()}> + ADD QUESTION</Button>
        <Button W='700px' color='white' bg ='black' onClick={() => handleSubmit()}>SUBMIT AND CREATE QUIZ</Button>  
 
      </Stack>    
    </form>  
    </Center>
    </Box> 
  );
}; 
export default Form;