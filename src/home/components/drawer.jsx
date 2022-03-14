import { InfoIcon, SettingsIcon } from "@chakra-ui/icons";
import { Avatar, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HStack, IconButton, Stack, useDisclosure } from "@chakra-ui/react";
import React from "react";

export const Pdrawer = () => {
    const { isOpen , onClose , onOpen} = useDisclosure()
    const btnRef = React.useRef()

   return (
    <Flex paddingLeft='2em' paddingRight='2em'>
    <IconButton borderRadius='full' bg='transparent'  onClick={onOpen} ref={btnRef} 
    icon={<Avatar bg='gray.400' size='sm'/>} />
    <Drawer isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}>
             <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
              <Flex direction='column'>
              <Stack direction='row' alignItems='center'>
                  <Avatar />
                  <h1>john doe</h1>
                  </Stack>
                  <Stack padding={'1em'}>
                      <Button columnGap={'0.5em'}><SettingsIcon/>Settings</Button>
                  </Stack>
                  <Stack padding={'1em'}>
                      <Button columnGap={'0.5em'}><InfoIcon/>About</Button>
                  </Stack>
                  <Stack padding='1em'>
                <Button colorScheme={'blue'}>Logout</Button>
                </Stack>
              </Flex>




          </DrawerBody>
          </DrawerContent>
    </Drawer>
    </Flex>

)
    }