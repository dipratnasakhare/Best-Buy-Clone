import {
  Heading,
  Input,
  Switch,
  Text,
  Button,
  Divider,
  Box,
  Image,
} from "@chakra-ui/react";
import styled from "./Logincss/Login.module.css";
import NavbarLogin from "./navbar/navbarlogin"
import FooterLogin from "./footer/footerlogin"

import { useState } from "react";

function Login() {
  let [show, setShow] = useState(true);

  return (
    <>
    <div className={styled.navbar}>
       <NavbarLogin/>
    </div>
    <div className={styled.backgroundgray}>

      <div className={styled.login}>
        <div>
          <Heading>Sign In to Best Buy</Heading>
        </div>

        <div className={styled.input}>
          <div>
            {" "}
            <Input pos="s" focusBorderColor="black" placeholder="Email Address" />
          </div>

          <div>
            <Switch
              pos="s"
              className={styled.change}
              size="lg"
              onChange={() => setShow(!show)}
            />
            <Text ml="10px">Show password</Text>
          </div>

          <div>
            {" "}
            <Input
              pos="s"
              pr="4.5rem"
              type={show ? "password" : "text"}
              placeholder="Enter password"
            />
          </div>

          <div>
            {" "}
            <Text color={"blue"}>Forget your password</Text>
          </div>

          <div>
            {" "}
            <Button>Sign in</Button>
          </div>
        </div>

        <div>
          <Divider color="red" />
          or
          <Divider />
        </div>

        <div className={styled.authbox}>
          <div>
            <div>
              {" "}
              <Image src="https://cdn-icons-png.flaticon.com/512/2604/2604653.png" />
            </div>
            <div>
              <Text> Sign In with WebAuthn</Text>
            </div>
          </div>

          <div>
            <div>
              {" "}
              <Image src="https://cdn-icons-png.flaticon.com/512/15/15476.png" />
            </div>
            <div>
              <Text> Sign In with Apple</Text>
            </div>
          </div>

          <div>
            <div>
              {" "}
              <Image src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png" />
            </div>
            <div> Sign In with Goole</div>
          </div>
        </div>

        <div className={styled.textblue1}>
          <Text color={"blue"} mb="10px">
            By continuing you agree to our Terms and Condition our Privacy
            Policy. and the My Best Buy* Program term
          </Text>
        </div>

        <Divider />

        <div className={styled.textblue}>
          <Text mt="5px">Don't have an account? <Text color={'blue'}>Create an account</Text></Text>
        </div>

      </div>

      </div>








      <FooterLogin/>
    </>
  );
}

export default Login;
