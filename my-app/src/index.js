import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import AuthContextProvider from './context/AuthContext';
// import 'react-bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
   <AuthContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   </AuthContextProvider>
  </ChakraProvider>  
);
