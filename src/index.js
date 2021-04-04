import React from 'react';
import ReactDOM from 'react-dom';
import Path from './route';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Path />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

