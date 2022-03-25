import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";

export const Locate = () =>
    (
        <Popover >
        <PopoverTrigger>
        <Button w='8em' size='sm' as={Button} rightIcon={<ChevronDownIcon />}>
            <text>Location</text>
        </Button>
        </PopoverTrigger>
        <PopoverContent>
            <PopoverArrow/>
            <PopoverCloseButton/>
            <PopoverHeader>
                select location
                </PopoverHeader>
                <PopoverHeader>
                    <form >
                <Input id="location" type='text' placeholder="Enter your location"/>
                </form>
                </PopoverHeader>
            <PopoverBody>
            
                <h1>Calicut</h1></PopoverBody>

        </PopoverContent>
           
   </Popover>

)