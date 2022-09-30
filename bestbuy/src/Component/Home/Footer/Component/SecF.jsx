import { Box, Divider ,Image} from "@chakra-ui/react"
import style from "./Footercss/SecondF.module.css"

import FirstBox from "./Second/FirstBox"
import SecBox from "./Second/SecBox"

import Buttom from "./last/bottom"
export default function footer(){

    
        
     
    return(
        <>
        <Box className={style.box}>
           <FirstBox/>
           <SecBox/>
        </Box>

        <Buttom/>

        
        </>

    )
}