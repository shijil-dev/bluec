import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";
import { useState} from 'react';
import { ShowLoc } from "./hooks/useGeolocation";

export const Locate = () =>{
    const [click,setClick]=useState(false);
   
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
                    <Button onClick={()=>{setClick(true)}} >Find My Location</Button>
                </PopoverHeader>
            <PopoverBody>
               {click?<ShowLoc/>:"Click here to find your location"}
              {/* <Input value=
        {(location.loaded)?JSON.stringify(location.coordinates):"loaction is not supported"}
        />*/}
           </PopoverBody>
           

        </PopoverContent>
           
   </Popover>

)
    }