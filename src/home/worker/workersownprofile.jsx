import { InfoIcon, SettingsIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Image, Stack } from "@chakra-ui/react"
import { Header } from "../../login/header"
import logo from "./logo192.png"
import { useNavigate} from "react-router-dom"
import { authContext } from "../../App"
import {useContext} from 'react';


export const WorkerOwnProfile = () =>    {
    const navigate=useNavigate();
    const {authData,updateData} = useContext(authContext);
    return(
        <>
        <Header/>
        <Flex justifyContent={'space-around'} alignItems='center'>
        <Stack direction={'row'}>
            <Box bg={'red.100'}>
                <Image src={logo}/>
                <h1>name</h1>
                <Stack padding={'1em'}>
                      <Button columnGap={'0.5em'}><SettingsIcon/>Settings</Button>
                  </Stack>
                  <Stack padding={'1em'}>
                      <Button columnGap={'0.5em'}><InfoIcon/>About</Button>
                  </Stack>
                  <Stack padding='1em'>
                <Button colorScheme={'blue'} onClick={() => {
                    navigate("/login")
                    updateData({...authData,isLoggedIn:false})
                }}>Logout</Button>
                </Stack>
            </Box>
            <Box bg={'blue.200'}>
                <h1>worktag</h1>
                <h1>experience</h1>
                <h1> rating reviws</h1>
                
            </Box>
        </Stack>
        </Flex>
        </>
    )
    }
