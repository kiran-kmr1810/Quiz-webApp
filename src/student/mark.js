import { Text } from "@chakra-ui/layout";
import React , { Component } from "react";

class Mark extends Component{

constructor(props)
{
    super(props)
    this.state = { 
        data: [],
        loading: true
    };
}

render()
{
return(
    <div>
        <Text>MARK PAGE</Text>
    </div>           
);}}

export default Mark;
