import {
  Box,
  Text,
  Image,
  Flex,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "./stylebox/SecBox.module.css";

export default function Footer() {

    const [bool, setbool] = useState(true)
















  let social = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/665/665209.png",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/665/665228.png",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1362/1362857.png",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/665/665213.png",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/665/665232.png",
    },
  ];

  return (
    <Box className={styled.boxdata}>
      <Box className={styled.Login}>
        <Box>
          {" "}
          <NavLink to="/login">
            <Text>Sign in or Create Account</Text>
          </NavLink>
        </Box>

        <Box>
          <Heading size="md" mb="3">
            Get the latest deals and more.
          </Heading>

          {!bool ? (
            <Box style={{ margin: "auto" }}>
              <Image
                w="20%"
                src="https://cdn-icons-png.flaticon.com/512/2279/2279398.png"
              />
            </Box>
          ) : (
            <Box className={styled.flexbox}>
              <Box >
                <Input  pos="s" type="email" placeholder="Enter email address" />
              </Box>

              <Box>
                <Button
                  _hover="none"
                  ml="10rem"
                  pos="s"
                  bg="blue"
                  color="white"
                  position="absolute"
                  onClick={()=>setbool(!bool)}
                >
                  Sign Up
                </Button>
              </Box>

            </Box>
          )}
          {/* */}
        </Box>

        <Box className={styled.imgphone}>
          <Box>
            <Image src="https://cdn-icons-png.flaticon.com/512/4073/4073501.png" />
          </Box>
          <Box>
            <Box>
              <Heading>Best Buy app</Heading>
            </Box>
            <Box>
              <Text onClick={()=>setbool(!bool)}>Learn more</Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box className={styled.social}>
            {social.map((ele) => {
              return (
                <Box>
                  <Image src={ele.img} />
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box ml={1}>
          <Text>Forums, blogs & more</Text>
        </Box>
      </Box>
    </Box>
  );
}
