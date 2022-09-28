import { Flex, Spacer, Text, Box } from "@chakra-ui/react";


import MenuButon from "./Textnavdata";

let MenuData = ["Account", "Recently Viewed", "Order Status", "Saved Items"];

export default function Textnav() {
  return (
    <Flex
      bg="blue.00"
      h={120}
      //   alignItems="center"
      gap="2"
      borderTop="0.3px solid white"
      color="white"
      pl={30}
      pr={22}
      alignItems="end"
      pb={2}
    >
      <Box display="flex" gap={7} w={650}>
        <Box>
          <Text>Top Deals</Text>
        </Box>
        <Box>
          <Text>Deal of the Day</Text>
        </Box>
        <Box>
          <Text>Totaltech Membership</Text>
        </Box>

        {MenuButon("more")}
      </Box>

      <Spacer />

      <Box w={550} gap={7} display="flex">
        {MenuData.map((ele) => MenuButon(ele))}
      </Box>
    </Flex>
  );
}
