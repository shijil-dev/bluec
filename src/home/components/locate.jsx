import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";

import useGeoLocation from "./hooks/useGeolocation";

export const Locate = () =>{
    const location=useGeoLocation();
  
   return(
        <Popover >
        <PopoverTrigger>
        <Button w='8em' size='sm' as={Button} rightIcon={<ChevronDownIcon />}>
            Location
        </Button>
        </PopoverTrigger>
        <PopoverContent>
            <PopoverArrow/>
            <PopoverCloseButton/>
                <PopoverHeader>
                    <Button>Find My Location</Button>
                </PopoverHeader>
            <PopoverBody>
              
               <Input value=
        {(location.loaded)?JSON.stringify(location.coordinates):"loaction is not supported"}/>
    
           </PopoverBody>
           

        </PopoverContent>
           
   </Popover>

)
    }