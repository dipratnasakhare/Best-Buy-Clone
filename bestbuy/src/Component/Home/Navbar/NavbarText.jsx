import { Box, Button } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

export default function NavbarText() {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.900");


let [bool , setbool] =  useState(false)


let chand = "🌙"
let mand = "🌞"


  return (
    <>
      <Button size="sm" onClick={toggleColorMode}>
        <div onClick={()=>setbool(!bool)}>
          {bool==false ? chand : mand}
        
        </div>
     
      </Button>
    </>
  );
}
