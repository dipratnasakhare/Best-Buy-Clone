import { Box, Text, Heading, Button, Image, Divider } from "@chakra-ui/react";

import Adverties from "./CSS Box/ThirdBox.module.css";

export default function () {
  return (
    <>
      <Box className={Adverties.boxadvirtise}>
        <div className={Adverties.boxadvirtisefirst}>
          <div>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/total-tech-stacked-reverse-sol86118-059fc768-50d8-43ab-b62a-3bded1b62731.png" />
          </div>
          <div>
            <Button   position="absulute" bg="white" color="blue" p="5px">
              Learn More
            </Button>
          </div>
        </div>

        <div className={Adverties.boxadvirtisescond}>
          <Heading as="h3" size="lg">
            The membership you and your tech deserve.
          </Heading>
          <Text>The membership you and your tech deserve.</Text>
        </div>
      </Box>

      <Box className={Adverties.box}>
        {/* first  */}
        <Box className={Adverties.boxfirst}>
          <Box>
            <Heading as="h3" size="lg">
              MacBook
            </Heading>
          </Box>
          <Box className={Adverties.boxfirsttext}>
            <Box>
              <Text fontSize="xl">Save up to $450 on select models.</Text>
            </Box>
            <Box>
              <Text fontSize="xs">Minimum savings is $50.</Text>
            </Box>
            <Box>
              <Button _hover="none" color="white" bg="blue">
                Shop Now
              </Button>
            </Box>
          </Box>
          <Box>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418601_sd.jpg;maxHeight=640;maxWidth=550" />
          </Box>
        </Box>

        <Box className={Adverties.boxfirst1}>
          <Text></Text>
        </Box>
        <Box className={Adverties.boxfirst1}>
          <Text></Text>
        </Box>
      </Box>
    </>
  );
}
