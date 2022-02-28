import { Avatar, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
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
              <Flex>
              <h1>john doe</h1>

              </Flex>
              <Flex fle>
                  <Button>Logout</Button>
              </Flex>




          </DrawerBody>
          </DrawerContent>
    </Drawer>
    </Flex>

)
    }