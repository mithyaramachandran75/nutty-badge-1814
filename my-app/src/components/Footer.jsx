import { Box, Image, Text } from "@chakra-ui/react"

const Footer=()=>{
    return(
        <Box w="100%" background="RGB(144, 39, 53)" h="37rem" display="flex" marginTop="-2.5rem">
            <Box>
                <Text marginLeft="5rem" paddingTop="2.5rem" color="white" fontSize="1rem" fontWeight="500">
                  About Us <br /> <br />
                  India's most convenient online<br />
                  grocery channel Buyerapp Fresh and<br />
                  Smart makes your grocery shopping<br />
                  even simpler. No more hassles of <br />
                  sweating it out in crowded markets,<br />
                  grocery shops & supermarkets - now <br />
                  shop from the comfort of your home;<br /> 
                  office, or on the move. We offer you<br />
                  the convenience of shopping for <br />
                  everything that you need for your<br />
                  home - be it fresh fruits & vegetables,<br />
                  rice, dals, oil,packaged food, dairy <br />
                  item, frozen, pet food, household <br />
                  cleaning items & personal care <br />
                  products from a single virtual store.
                </Text>
                <Text  display={"flex"} marginLeft="5rem" paddingTop=".5rem" color="white" fontSize="1rem" fontWeight="500">PAYMENT OPTIONS</Text>
               <Image marginLeft="5rem"  width="40px" h="40px" src="https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-832c4393e481351a175eeb5b931f83f2.svg"/>
            </Box>
            <Box>
                <Text marginLeft="6rem" paddingTop="2.5rem" color="white" fontSize="1rem" fontWeight="500">OUR COMPANY</Text>
                <Text marginLeft="6rem" paddingTop="-1rem" color="white" fontSize="1rem" fontWeight="300">
                    About us <br /> contact us
                </Text>
            </Box>
            <Box>
                <Text marginLeft="6rem" paddingTop="2.5rem" color="white" fontSize="1rem" fontWeight="500">TOP CATEGORIES</Text>
                <Text marginLeft="6rem" paddingTop="-1rem" color="white" fontSize="1rem" fontWeight="300">Grocery</Text>
            </Box>
            <Box>
                <Text marginLeft="6rem" paddingTop="2.5rem" color="white" fontSize="1rem" fontWeight="500">POLICIES & INFO</Text>
                <Text marginLeft="6rem" paddingTop="-1rem" color="white" fontSize="1rem" fontWeight="300">
                Privacy Policy <br />Terms & Condition<br />Shipping Policy <br /> 
                Return & Refund
                </Text>
                <Text marginLeft="6rem" paddingTop="1rem" color="white" fontSize="1rem" fontWeight="500">SUPPORT</Text>
                <Text marginLeft="6rem" paddingTop="-1rem" color="white" fontSize="1rem" fontWeight="500">
                For Help, send an email to<br /> 
                customercare@craftsvilla.com
                </Text>
            </Box>
        </Box>
    )
}
export default Footer