import FirstF from "./Component/FirstF"
import SecF from "./Component/SecF" 
import { Divider , Text } from "@chakra-ui/react"
function Footer() {
    return (
      <div  style={{border:"3px solid green",backgroundColor:"#f0f2f4", height:"150rem"}}>
       <FirstF/>
       <Divider/>
       <SecF/>
      </div>
    );
  }
  
  export default Footer;
  