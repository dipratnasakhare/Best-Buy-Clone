import { Box, Text} from "@chakra-ui/react";

import ViewStyle from "./CSS Box/SixBox.module.css"


export default function ViewPage(){
    return(

        <Box className={ViewStyle.box} >
           <Text>Manage all your recently viewed items</Text>
        </Box>
    )
}