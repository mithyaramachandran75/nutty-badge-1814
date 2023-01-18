import {Box, Image,Input} from "@chakra-ui/react"

const Navbar=()=>{
    return(
        <Box h="7rem" w="100%"  display="flex" background={"white"}>
       <Box marginLeft="3.5rem" marginTop="-2.5rem" h="9rem" w="12rem">
            <Image boxSize="100%" src="https://appreviewsbusiness.files.wordpress.com/2020/02/craftsvilla-logo-01-1024x683-1.png"/>
       </Box>
      <Box  marginTop="1rem" marginLeft="3rem" >
      <Input  borderRadius="4" height="2.5rem"  width="23rem" placeholder='Search : you are searching for' size='lg' />
      </Box>
     <Box>
        
     </Box>
       </Box>
    )
}
export default Navbar