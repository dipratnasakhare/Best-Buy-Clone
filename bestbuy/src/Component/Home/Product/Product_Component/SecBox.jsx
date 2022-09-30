import { Box, Text, Image, Divider,Heading, Button } from "@chakra-ui/react";
import ViewStyle from "./CSS Box/SecBox.module.css";

export default function ViewPage() {
  let Newproduct = [
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900964_sd.jpg",
      name: "Apple - AirPods Pro (2nd generation) - White",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6518/6518659_sd.jpg;maxHeight=400;maxWidth=400",
      name: "Floortex - Ecotex Enhanced Polymer Rectangular",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6518/6518645_sd.jpg;maxHeight=400;maxWidth=400",
      name: "Floortex - Ecotex Enhanced Polymer Rectangular",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487481_sd.jpg;maxHeight=640;maxWidth=550",
      name: "Apple - iPhone 14 Pro Max 128GB ",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9314/9314126_sd.jpg;maxHeight=272;maxWidth=400",
      name: "WD - Blue 1TB Internal SATA",
    },
  ];

  console.log(Newproduct);

  return (
    <Box mt="5px">
      <Box>
       
        <Heading borderBottom="2px" width="13rem" ml="8px" as="h3" size="lg"  >
          New Arrivals
        </Heading>
   
      </Box>

      <Divider possition={'absolute'} style={{opacity:"100%"}} />
 
      <Box className={ViewStyle.boxview}>
       
        {Newproduct.map((ele) => {
          return (
            <Box>
              <Box className={ViewStyle.boximg}>
                <Image src={ele.img} alt="product" />
              </Box>
              <Box className={ViewStyle.boxText}>
                <Text>{ele.name}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
