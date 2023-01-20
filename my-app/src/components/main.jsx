import { Box, Image } from "@chakra-ui/react"

const Main=()=>{
    return(
       <Box width="100%" >
        <Box display="flex" gap="2rem" marginLeft="4.5rem"  marginTop="-2rem">
        <Image w="550px" h="300px" src="https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png" />
        <Image w="550px"  h="300px" src="https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png" />
        </Box>
        <Box display="flex" gap="2rem" marginLeft="4.5rem" marginTop="2rem">
        <Image w="550px"  h="300px" src="https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png" />
        <Image w="550px"  h="300px" src="https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png" />
        </Box>
       </Box>
    )
}
export default Main