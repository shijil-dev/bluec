import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { Avatar, Button, Heading, Input, InputGroup, Menu, MenuButton, Stack, Wrap } from "@chakra-ui/react";
import { Pdrawer } from "./components/drawer";

export const Bar = () => (
    <Stack direction='row' spacing='1' bg='blue.700' h='20' align='center'>
    <Heading color='white' p='2'>BlueCollar</Heading>
        <InputGroup w='100%'>
         <Input id='search' variant='solid'  w='60%' placeholder="Search..." type="text" name='tag'/>
       <Button variant='outline' bg='white' id='click'> 
       <SearchIcon/>
       </Button>
       </InputGroup>
       <Menu>
       <MenuButton w='40' as={Button} rightIcon={<ChevronDownIcon />}>
        Location
        </MenuButton>
       </Menu>
        <Pdrawer/>
        </Stack>
) 