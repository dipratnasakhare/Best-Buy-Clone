import Login from "../../../Login/Login";
import Cart from "../../../Cart/Cart";
import NavbarText from "../NavbarText";
import NavListdata from "./NavbarMenu"
import {
  Flex,
  Box,
  Image,
  Spacer,
  ButtonGroup,
  Button,
  Input,
  Text,
  Heading,
  MenuDivider,
  Divider
} from "@chakra-ui/react";

// menu section

import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { HamburgerIcon, SearchIcon, ChevronRightIcon } from "@chakra-ui/icons";


let ListMenu1 = [
  'Deals',
  'Support & Services',
  'Brand',
  'Featured',
]

let ListMenu2 = [
  'Appliances',
  'TV & Home Theater',
  'Computer & Tablets',
  'Cameras, Camcorders & Drones',
  'Audio',
  'Video Games',
  'Movies & Music',
  'Car Electronics & GPS',
  'Sports, Fitness & Recreation'
]















function Navbar() {
  return (
    <>
      <Flex
        bg="#0046be"
        h={75}
        alignItems="center"
        gap={55}
        color="white"
        pr={50}
        pl={50}
      
        w="100%"
        borderBottom="1px solid white"
        
        position="fixed"  
      >
        {/* logo of website */}
        {/* <Box bg="white" boxSize="sm" w={3}> */}
        <Image w={10} src="https://bit.ly/dan-abramov" alt="Dan Abramov" />

        {/* </Box> */}

        {/* manu serction  */}

        <Menu>
          <MenuButton bg="none" as={Button} leftIcon={<HamburgerIcon />}>
            menu
          </MenuButton>

     
          <MenuList h={700} color="black" overflow="scroll">

           {ListMenu1.map((ele)=>{
            return(
              NavListdata(ele)
            )
           })}

            <Heading bordertop="1px solid">Shop by Department</Heading>

           {ListMenu2.map((ele)=>{
            return(
              NavListdata(ele)
            )
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
            placeholder="Outline"
          />
          <Button mb="1" ml={1}>
            <SearchIcon color="blue" />
          </Button>
        </Box>

        {/* Cart an Aiea */}
        <Spacer />
        <ButtonGroup gap="1">
          <Button bg="none">Aiea</Button>
          <Button bg="none">Cart</Button>
        </ButtonGroup>
      </Flex>
    
      {/* <NavbarText/> */}
    </>
  );
}

export default Navbar;
