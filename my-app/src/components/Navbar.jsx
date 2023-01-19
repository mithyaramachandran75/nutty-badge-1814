import {Box, Image,Input,Text} from "@chakra-ui/react"
import { BsFillPersonFill ,BsFillCartCheckFill,BsHeart } from "react-icons/bs";
const Navbar=()=>{
    return(
        <Box h="4.2rem" w="100%"  display="flex" background={"white"}>
       <Box marginLeft="3.5rem" marginTop="-2.5rem" h="9rem" w="12rem">
            <Image boxSize="100%" src="https://appreviewsbusiness.files.wordpress.com/2020/02/craftsvilla-logo-01-1024x683-1.png"/>
       </Box>
      <Box  marginTop="1rem" marginLeft="3rem" >
      <Input  borderRadius="4"  height="2.5rem"  width="23rem" placeholder='SEARCH : 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐬𝐞𝐚𝐫𝐜𝐡𝐢𝐧𝐠 𝐟𝐨𝐫' size='xlg' />
      </Box>
     <Box marginLeft="200px" marginTop=".6rem">
       <Text><BsFillPersonFill size="1.4rem"/> 𝐒𝐢𝐠𝐧 𝐈𝐧 / 𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿</Text>   
     </Box>
     <Box marginTop=".7rem" marginLeft="2.3rem">
        <Text><BsHeart /> 𝐖𝐢𝐬𝐡𝐥𝐢𝐬𝐭</Text>
     </Box>
     <Box marginTop=".8rem" marginLeft="3.3rem">
        <Text><BsFillCartCheckFill /> 𝗖𝗮𝗿𝘁</Text>
     </Box>
       </Box>
    )
}
export default Navbar