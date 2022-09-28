import {Box,MenuDivider, Text, MenuItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function MenuListdata(menu){
    return(
        <>
        <MenuDivider />
        <MenuItem>
          <Box>
            <Text>{menu}</Text>
          </Box>
          <ChevronRightIcon />
        </MenuItem>
    
        </>
    )
}