import { Box, Button } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function NavbarText() {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.800");

  return (
    <>
      <Button size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </>
  );
}
