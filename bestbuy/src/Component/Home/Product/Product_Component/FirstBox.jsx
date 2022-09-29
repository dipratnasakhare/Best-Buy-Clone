import {
  Button,
  Heading,
  Text,
  Flex,
  Box,
  Image,
  Center,
  Spacer,
} from "@chakra-ui/react";
import styleBox from "./CSS Box/FirstBox.module.css";
export default function FirstBox() {
  return (
    <Box className={styleBox.mainBox}>
      <Box className={styleBox.textbar}>
        <Box className={styleBox.textbarfirst}>
          <Box>
            <Heading>Save up to $800</Heading>
            <Text>on select samsung, Sony and Lg TVs</Text>
            <Button position="absulute">Shop Now</Button>
          </Box>
        </Box>

        <Box className={styleBox.textbarsecond}>
          <Image
            src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-594285-tv-f1df552c-e7f5-4092-b974-5fae78049ba4.jpg"
            alt="Tv"
          />
        </Box>
      </Box>

      <Box className={styleBox.productbar}>
        <Box className={styleBox.productbarfirst}>
          <Box>
            <Image
              width="50%"
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487481_sd.jpg;maxHeight=640;maxWidth=550"
              alt="iphone"
            />
            <Text>
              Apple - iPhone 14 Pro Max 128GB - Deep Purple (T-Mobile)
            </Text>
          </Box>

          <Box>
            <Image
              width="50%"
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487481_sd.jpg;maxHeight=640;maxWidth=550"
              alt="iphone"
            />
            <Text>
              Apple - iPhone 14 Pro Max 128GB - Deep Purple (T-Mobile)
            </Text>
          </Box>

          <Box>
            <Image
              width="50%"
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487481_sd.jpg;maxHeight=640;maxWidth=550"
              alt="iphone"
            />
            <Text>
              Apple - iPhone 14 Pro Max 128GB - Deep Purple (T-Mobile)
            </Text>
          </Box>

          <Box>
            <Image
              width="50%"
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487481_sd.jpg;maxHeight=640;maxWidth=550"
              alt="iphone"
            />
            <Text>
              Apple - iPhone 14 Pro Max 128GB - Deep Purple (T-Mobile)
            </Text>
          </Box>
        </Box>

        <Box className={styleBox.productbarsecond}>
          <Box className={styleBox.productbarsecond2}>
            <Box>
              <Button
                _hover="none"
                bg="blue"
                color="yellow"
                position="absulute"
              >
                Oute{" "}
                <Button
                  position="absulute"
                  _hover="none"
                  bg="blue"
                  color="white"
                >
                  Deal
                </Button>
              </Button>{" "}
            </Box>

            <Box className={styleBox.boximage}>
              <Image
                width="90%"
                src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/ClearanceOpenBox_White-217158.png;maxHeight=230;maxWidth=330"
              />
            </Box>

            <Box>
              <Text>View outlet deals</Text>
            </Box>
          </Box>

          <Spacer />

          <Box className={styleBox.productbarsecond2}>
            <Box>
              <Button _hover="none" color="white" bg="red" position="absulute">
                Deal{" "}
              </Button>{" "}
              <Button _hover="none" bg="none">
                of the day
              </Button>
            </Box>
            <Box className={styleBox.boximage}>
              <Image
                width="90%"
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6474/6474398_sd.jpg;maxHeight=428;maxWidth=644"
              />
            </Box>
            <Box>
              <Text>WD - BLACK SN850 1TB Internal SSD PCIe Gen 4</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
