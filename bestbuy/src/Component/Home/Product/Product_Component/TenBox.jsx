import { Button,Box, Text, Heading, Image, Divider} from "@chakra-ui/react";


import ViewStyle from "./CSS Box/TenBox.module.css"
import Slider from "./productslider/Slider"

export default function ViewPage(){
 
    return(

        <Box mt="5rem">
        <Box>
         
          <Heading borderBottom="2px" width="16rem" ml="8px" as="h3" size="lg"  >
           Futurd Porduct
          </Heading>
     
        </Box>
  
        <Divider style={{opacity:"100%"}}/>
  
        <Box className={ViewStyle.boxview}>

           <Slider/>
        </Box>
      </Box>
      
    )
}