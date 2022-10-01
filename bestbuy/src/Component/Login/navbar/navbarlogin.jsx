
import {
  Flex,
  Box,
  Image,
  Spacer,
  ButtonGroup,
  Button,
  Input,
  Heading,
} from "@chakra-ui/react";

// menu section


import {  SearchIcon } from "@chakra-ui/icons";

import {NavLink} from "react-router-dom"

function NavbarLogin() {
  return (
    <>
      <Flex
        bg="#0046be"
        bgOpacity="25%"
        h={90}
        alignItems="center"
        gap={55}
        color="white"
        pr={50}
        pl={50}
        borderBottom="1px solid "
        w="100%"
        position="fixed"
        visibility="none"
      >
        {/* logo of website */}
        {/* <Box bg="white" boxSize="sm" w={3}> */}
        <NavLink to="/"><Image
          w={20}
          src="https://cdn.iconscout.com/icon/free/png-256/best-27-226587.png"
          alt="Dan Abramov"
        /></NavLink>

        {/* </Box> */}

        {/* manu serction  */}

      
        
        {/* search section  */}

        <Box textAlign="center">
          <Input
            color="black"
            bg="white"
            variant="outline"
            w={620}
            placeholder="Search Best Buy"
          />
          <Button mb="1" ml={1}>
            <SearchIcon color="blue" />
          </Button>
        </Box>

        {/* Cart an Aiea */}
        <Spacer />
        <ButtonGroup gap="1">
          <Box display="flex">
            {" "}
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2981/2981314.png"
              width="35px"
            />
            <Button _hover="none" bg="none">
              Aiea
            </Button>
          </Box>
          <Box display="flex">
            {" "}
            <Image
              width="35px"
              src="https://cdn-icons-png.flaticon.com/512/2838/2838694.png"
            />{" "}
            <Button _hover="none" bg="none">
              Cart
            </Button>
          </Box>
        </ButtonGroup>
      </Flex>

    </>
  );
}

export default NavbarLogin;
