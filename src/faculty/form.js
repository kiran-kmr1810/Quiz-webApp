import React, { useState } from 'react'; 
import { Input,Stack,Button,InputLeftAddon,InputGroup,HStack,Center, Box,useToast  } from "@chakra-ui/react"
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import  { Link } from 'react-router-dom'

const Form = () => {  
    const toast = useToast()
    var [inputFields, setInputFields] = useState(
      [{
        id: uuidv4(),
        question: '' ,
        answers:[],
        oa:'',
        ob:'',
        oc:'',
        od:'',
        correctAnswer:'',
        explanation:'',
        point:''
      },
      ]);
    const [quizTitle, setquizTitle] = useState();
    const [date, setdate] = useState();
    const [stime, setstime] = useState();
    const [ftime, setftime] = useState();
    const [duration, setduration] = useState();
    const [quizSynopsis, setquizSynopsis] = useState();
    const [course, setcourse] = useState();
    const [topic, settopic] = useState();

    const handleSubmit = (e) =>{
      const output = {
        "quizTitle": quizTitle,
        "quizSynopsis": quizSynopsis,
        "duration":duration,
        "course":course,
        "topic":topic,
        "date":date,
        "stime":stime,
        "ftime":ftime,
        "questions" : inputFields,
      }

      inputFields.forEach((item) => {
        var arr = [item.oa,item.ob,item.oc,item.od];
        item.answers = arr
      });
      console.log(output);
      axios.post(`https://quizapp1810.herokuapp.com/quiz/add`, output)
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
    });
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
            answers:[],
            oa:"",
            ob:"",
            oc:"",
            od:"",
            correctAnswer:"",
            explanation:"",
            point:""
         }])
      }

    function handleRemove(i) {
        const values = [...inputFields];
        values.splice(i, 1);
        setInputFields(values);
    }

  return ( 
    <div>
    <Box padding='20px'>
    <Link to = '/fhome'>
      <Button color='white' bg ='black'_hover={{bg:"black",color:"orange.400"}}>RETURN TO HOMEPAGE</Button>
    </Link>
    <Box padding='20px'>   
    <Center>
    <form>     
      <Stack spacing={3}> 

        <InputGroup W='700px'>   
        <InputLeftAddon children="Quiz Title" borderColor='black'/> 
        <Input type="text" focusBorderColor="black" borderColor='black' 
        name="quizTitle" onChange={e => setquizTitle(e.target.value)}/>
        </InputGroup>

        <InputGroup W='700px'>      
        <InputLeftAddon children="Quiz Synopsis" borderColor='black'/> 
        <Input type="text" focusBorderColor="black" borderColor='black' 
        name="quizSynopsis"onChange={e => setquizSynopsis(e.target.value)}  />
        </InputGroup>

        <InputGroup W='700px'>      
        <InputLeftAddon children="Course" borderColor='black'/> 
        <Input type="text" focusBorderColor="black" borderColor='black' 
        name="course"onChange={e => setcourse(e.target.value)}  />
        </InputGroup>

        <InputGroup W='700px'>      
        <InputLeftAddon children="Topic" borderColor='black'/> 
        <Input type="text" focusBorderColor="black" borderColor='black' 
        name="topic"onChange={e => settopic(e.target.value)}  />
        </InputGroup>

        <InputGroup W='700px'>      
        <InputLeftAddon children="Date" borderColor='black'/> 
        <Input type="text" focusBorderColor="black" borderColor='black' placeholder='YYYY/MM/DD'
        name="date"onChange={e => setdate(e.target.value)}  />
        </InputGroup>

        <InputGroup W='700px'>      
        <InputLeftAddon children="Start time" borderColor='black'/> 
        <Input type="text" focusBorderColor="black" borderColor='black' placeholder='HH:MM'
        name="stime"onChange={e => setstime(e.target.value)}  />
        </InputGroup>

        <InputGroup W='700px'>      
        <InputLeftAddon children="End time" borderColor='black'/> 
        <Input type="text" focusBorderColor="black" borderColor='black'placeholder='HH:MM' 
        name="ftime"onChange={e => setftime(e.target.value)}  />
        </InputGroup>

        <InputGroup W='700px'>      
        <InputLeftAddon children="Duration" borderColor='black'/> 
        <Input type="text" focusBorderColor="black" borderColor='black' placeholder='Minutes'
        name="duration"onChange={e => setduration(e.target.value)}  />
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
                onChange={
                  event => handleChangeInput(inputField.id, event)
                }
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
                name = "correctAnswer"
                type="text"
                placeholder="Correct Option"
                borderColor='green'
                value={inputField.correctAnswer}
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
                name = "point"
                type="text"
                placeholder="Marks"
                borderColor='black'
                value={inputField.point}
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
        <Button W='700px' color='white' bgColor = "orange.400" _hover={{bg:"black",color:"orange.400"}} 
        onClick={() => handleAdd()}> + ADD QUESTION</Button>

        <Center>
        <Button W='700px' color='white' bg ='black'_hover={{bg:"black",color:"orange.400"}} 
        onClick={() =>  {toast({
          title: "Quiz created.",
          description: "We've created the quiz for you.",
          status: "success",
          variant: 'left-accent',
          position: "top-right",
          duration: 2000,
          isClosable: true,
        });handleSubmit();}}>SUBMIT AND CREATE QUIZ</Button>
        </Center>
      </Stack>    
    </form>  
    </Center>
    </Box> 
    </Box>
    </div>
  );
}; 
export default Form;