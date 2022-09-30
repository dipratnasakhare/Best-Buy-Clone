import FirstF from "./Component/FirstF"
import SecF from "./Component/SecF" 
import { Divider , Text } from "@chakra-ui/react"
function Footer() {
    return (
      <div  style={{backgroundColor:"#f0f2f4",paddingTop:"5px",paddingBottom:"5rem"}}>
       <FirstF/>
       <Divider style={{opacity:"100%"}}/>
       <SecF/>
      </div>
    );
  }
  
  export default Footer;
  