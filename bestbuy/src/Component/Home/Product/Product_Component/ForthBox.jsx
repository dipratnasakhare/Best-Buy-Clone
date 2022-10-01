import { Button,Box, Text, Heading, Image, Divider} from "@chakra-ui/react";
import {ChevronRightIcon ,ChevronLeftIcon}from "@chakra-ui/icons" 

import Slider from "./productslider/Slider"
import ViewStyle from "./CSS Box/ForthBox.module.css"


export default function ViewPage(){
   
    return(

        <Box mt="3rem">
        <Box>
         
          <Heading borderBottom="2px" width="30rem" ml="8px" as="h3" size="lg"  >
          Deals inspired by your shopping
          </Heading>
     
        </Box>
  
        <Divider border="2px" style={{opacity:"100%"}} />
  
        <Box className={ViewStyle.boxview}>

          <Slider/>
        </Box>
      </Box>
      
    )
}