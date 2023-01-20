import {Box,Image } from "@chakra-ui/react"

const Home=()=>{
    return(
     <Box display="flex" marginLeft="1.6rem" marginRight="1.6rem" gap=".4rem">
      <Box>
        <Image boxSize="100%" src="https://cdn.plotch.io/image/upload/C/V/1671109983_Mi5wbmc=.png" />
      </Box>
      <Box>
        <Image boxSize="100%" src="https://cdn.plotch.io/image/upload/C/V/1671109989_My5wbmc=.png" />
      </Box>
      <Box>
        <Image boxSize="100%" src="https://cdn.plotch.io/image/upload/C/V/1671109994_NC5wbmc=.png" />
      </Box>
      <Box>
        <Image boxSize="100%" src="https://cdn.plotch.io/image/upload/C/V/1671109999_NS5wbmc=.png" />
      </Box>
      <Box>
        <Image boxSize="100%" src="https://cdn.plotch.io/image/upload/C/V/1671110006_Ni5wbmc=.png" />
      </Box>
     </Box>
    )
}
export default Home;