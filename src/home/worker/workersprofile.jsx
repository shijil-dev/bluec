
import { Box, Flex, Image, Stack } from "@chakra-ui/react"
import { Header } from "../../login/header"
import logo from "./logo192.png"
;


export const WorkerProfile = () =>    {
    
    return(
        <>
        <Header/>
        <Flex justifyContent={'space-around'} alignItems='center'>
        <Stack direction={'row'}>
            <Box bg={'red.100'}>
                <Image src={logo}/>
                <h1>name</h1>
                <h1>worktag</h1>
                <h1>experience</h1>
                <h1>overall rating</h1>
            </Box>
            <Box bg={'blue.200'} justifyContent='space-around'>
                <Stack direction={"column"}>
                <Box bg={'teal.200'}>
                <Stack direction={'row'}>
                    <h1>worktype</h1>
                    <h1>worklocation</h1>
                    </Stack>
                    <h1>work rating and reviews</h1>
                    <h1>workphotos</h1>
                </Box>
                <Box bg={'green.200'} >
                    <Stack direction={'row'}>
                    <h1>worktype</h1>
                    <h1>worklocation</h1>
                    </Stack>
                    <h1>work rating and reviews</h1>
                    <h1>workphotos</h1>
                    </Box>
                </Stack>
                
            </Box>
        </Stack>
        </Flex>
        </>
    )
    }
