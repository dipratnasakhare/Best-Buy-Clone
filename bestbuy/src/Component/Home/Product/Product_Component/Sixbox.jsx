import { Button,Box, Text, Heading, Image, Divider} from "@chakra-ui/react";
import {ChevronRightIcon ,ChevronLeftIcon}from "@chakra-ui/icons" 


import ViewStyle from "./CSS Box/SixBox.module.css"

import Slider from "./productslider/Slider"

export default function ViewPage(){
   
    return(

        <Box>
        <Box>
         
          <Heading borderBottom="2px" width="13rem" ml="8px" as="h3" size="lg"  >
            New Arrivals
          </Heading>
     
        </Box>
  
        <Divider border="2px" style={{opacity:"100%"}}/>

     <Box className={ViewStyle.boxdata}>
  
       
  <Slider/>

     </Box>

      </Box>
      
    )
}