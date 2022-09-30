import Login from "../../../Login/Login";
import Cart from "../../../Cart/Cart";
import NavbarText from "../NavbarText";
import NavListdata from "./NavbarMenu";
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

import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { HamburgerIcon, SearchIcon, CloseIcon } from "@chakra-ui/icons";

let ListMenu1 = ["Deals", "Support & Services", "Brand", "Featured"];

let ListMenu2 = [
  "Appliances",
  "TV & Home Theater",
  "Computer & Tablets",
  "Cameras, Camcorders & Drones",
  "Audio",
  "Video Games",
  "Movies & Music",
  "Car Electronics & GPS",
  "Sports, Fitness & Recreation",
];

function Navbar() {
  return (
    <>
      <Flex
        bg="#0046be"
        bgOpacity="25%"
        h={79}
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
        <Image
          w={20}
          src="https://cdn.iconscout.com/icon/free/png-256/best-27-226587.png"
          alt="Dan Abramov"
        />

        {/* </Box> */}

        {/* manu serction  */}

        <Menu>
          <MenuButton
            _hover="none"
            w={50}
            bg="none"
            as={Button}
            leftIcon={<HamburgerIcon />}
            size="lg"
          >
            <Box>Menu</Box>
          </MenuButton>

          <MenuList h={700} color="black" overflow="scroll" pl="1rem" pr="1rem">
            {ListMenu1.map((ele) => {
              return NavListdata(ele);
            })}

            <Heading bordertop="1px solid">Shop by Department</Heading>

            {ListMenu2.map((ele) => {
              return NavListdata(ele);
            })}
          </MenuList>
        </Menu>

        
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
          <NavbarText />
        </ButtonGroup>
      </Flex>

      {/* <NavbarText/> */}
    </>
  );
}

export default Navbar;
