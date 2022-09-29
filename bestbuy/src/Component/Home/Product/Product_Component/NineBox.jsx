import { Text, Box,Heading, Image , Button} from "@chakra-ui/react";
import ViewStyle from "./CSS Box/NineBox.module.css";

export default function NineBox() {
  



  return (
    <Box className={ViewStyle.box}>
        <Box>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-66611-cb-fs-211018-6dd3346e-0ef8-458c-b16d-5ff2264fbb11.png"/>
        </Box>
        <Box>
            <Heading>Apply today and get</Heading>
            <Heading mt={1} size='2xl' color="yellow">10% Back</Heading>
        </Box>
        <Box>
            <Text color="white" fontSize="large" size="lg">in rewards on your first day of purchases when you are approved for the Card.</Text>
        </Box>
        <Box>
            <Button position="absulute" bg="yellow">Learn More</Button>
        </Box>
    </Box>
    
  );
  
}
