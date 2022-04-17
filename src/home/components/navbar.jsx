import {  SearchIcon } from "@chakra-ui/icons";
import { Center, Flex, IconButton, Input, InputGroup, InputRightElement,  Spacer, Stack,} from "@chakra-ui/react";
import { Pdrawer } from "./drawer";
import { Locate } from "./locate";
import { useContext,useState } from 'react';
import { searchContext } from "../mainhome";

export const Bar = () => {
    return(
   
    <Flex direction='row'
            bg='blue.700'
            h={['6em','3em']}
            align='center' 
            justifyContent='space-between'
            >
        <Center 
            paddingLeft='.5em'
            color='white'
            fontFamily='monospace'
            fontSize='3xl' 
            fontWeight='bold'>
          BlueCollar
        </Center>
        <Stack direction={["column","row"]}>
            <Flex>
                <form>
                <InputGroup paddingLeft='10'>
                <Input
                    variant='solid' 
                   width={['10em','20em','30em','40em']}
                    size='sm'
                    placeholder="Search..." 
                    type="search"
                    id="search"
                    />
                    <InputRightElement paddingBottom='2'>
                    <IconButton size='xs' icon={<SearchIcon/> } 
                    type='submit'
                    /> 
                    </InputRightElement>
      
                </InputGroup>
                </form>
            </Flex>
        <Spacer/>
         <Center paddingLeft='5em'>
         <Locate/>
        </Center>
        </Stack>
        <Spacer/>
   
            <Pdrawer/>
    </Flex>
) 
 }