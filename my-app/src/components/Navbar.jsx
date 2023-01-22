import {Box, Image,Input,Text} from "@chakra-ui/react"
// import {BsFillCartCheckFill,BsHeart } from "react-icons/bs";
import {Link} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import {useNavigate} from  'react-router-dom'
const Navbar=()=>{
   const {authState,handleLogout} = useContext(AuthContext)
   const navigate = useNavigate()
   function handleClick(){
       handleLogout()
       navigate('/')
   }
    return(
        <Box h="4.2rem" w="100%"  display="flex" background={"white"}>
       <Box marginLeft="3.5rem" marginTop="-2.5rem" h="9rem" w="12rem">
         <Link to='/'>
            <Image boxSize="100%" src="https://appreviewsbusiness.files.wordpress.com/2020/02/craftsvilla-logo-01-1024x683-1.png"/>
         </Link>
       </Box>
      <Box  marginTop="1rem" marginLeft="12rem" >
      <Input  borderRadius="4"  height="2.5rem"  width="23rem" placeholder='SEARCH : 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐬𝐞𝐚𝐫𝐜𝐡𝐢𝐧𝐠 𝐟𝐨𝐫' size='xlg' />
      </Box>
     <Box marginLeft="5rem" marginTop="2rem" fontWeight="650">
     {authState.isAuth?<Text onClick={handleClick}>𝗟𝗼𝗴𝗢𝘂𝘁</Text>:<Link to='/login'>𝐒𝐢𝐠𝐧 𝐈𝐧</Link>}    
     </Box>
     <Box marginTop="2rem" marginLeft="5rem" fontWeight={"650"}>
        <Text> 𝐖𝐢𝐬𝐡𝐥𝐢𝐬𝐭 </Text>
     </Box>
     {/* <Box marginTop="2rem" marginLeft="5rem" fontWeight={"650"}>
        <Text> 𝗖𝗮𝗿𝘁</Text>
     </Box> */}
       </Box>
    )
}
export default Navbar