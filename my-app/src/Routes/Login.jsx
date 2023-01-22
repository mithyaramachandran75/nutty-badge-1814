import React,{useState} from 'react'
import { FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Input, Box, Button} from '@chakra-ui/react';
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {authState, handleLogin} = useContext(AuthContext)
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const navigate = useNavigate()
    const handleSubmit = async ()=>{
         try{let res = await fetch(`https://reqres.in/api/login`,{
            method:'POST',
            body:JSON.stringify({email, password}),
            headers:{'Content-Type':'application/json'}
         })
         let data = await res.json();
         if(data.token){
             handleLogin(data.token)
             navigate('/')
         }
    }catch(e){
        console.log(e)
    }
}
    const isError = email === ''
  return (
    <Box w='50%' m='auto'>    
    <FormControl w='50%' m='auto' isInvalid={isError}>
    <FormLabel>Email</FormLabel>
    <Input type='email' id='email' value={email} onChange={handleEmailChange} />
    {!isError ? (
      <FormHelperText>
        Enter the email you'd like to receive the newsletter on.
      </FormHelperText>
    ) : (
      <FormErrorMessage>Email is required.</FormErrorMessage>
    )}
<FormLabel>Password</FormLabel>
<Input type='password' id='password' value={password} onChange={handlePasswordChange} />
<Button
            mt={4}
            colorScheme='teal'
            type='submit'
            onClick={handleSubmit}
          >
            Submit
          </Button>
  </FormControl>
  </Box>

)
}

export default Login