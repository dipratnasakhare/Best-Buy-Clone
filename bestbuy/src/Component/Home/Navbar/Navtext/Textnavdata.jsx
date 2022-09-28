
import { MenuButton, Menu, MenuList, MenuItem, Text, Box  } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function MenuButon(menu){
    return(
        <Box>
        <Menu>
          <MenuButton position="relative">
           {menu} <ChevronDownIcon />
          </MenuButton>
          <MenuList color="black" position="relative">
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>

    )
}