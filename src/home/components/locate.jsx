import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";
import { GoogleComponent } from "react-google-location";
import { useState } from 'react';
const api_key = "AIzaSyD2Xss1uQHINXGlbzKKIdU8cOVwhOdMaSU";

export const Locate = () =>{
const [place,setPlace]=useState(null);
   return(
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
                    <GoogleComponent
           apiKey={api_key}
           language={'en'}
           country={'country:in'}
           coordinates={true}
           onChange={e => {setPlace({place:e.target.value})}}/>
                </form>
                </PopoverHeader>
            <PopoverBody>
         
           </PopoverBody>
           

        </PopoverContent>
           
   </Popover>

)
    }