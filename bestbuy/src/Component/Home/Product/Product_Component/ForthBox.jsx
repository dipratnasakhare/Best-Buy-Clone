
import {Text, Box} from "@chakra-ui/react"
import proStyle from "./CSS Box/ForthBox.module.css"


export default function ViewPage(){
    return(

        <Box className={proStyle.products} >
           <Text>Deals inspired by your shopping (6 items)
</Text>
        </Box>
    )
}