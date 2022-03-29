import { InfoIcon, SettingsIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Image, Stack } from "@chakra-ui/react"
import { Header } from "../../login/header"
import { useNavigate} from "react-router-dom"
import { authContext } from "../../App"
import {useContext} from 'react';


export const EmployersOwnProfile = () =>    {
    const navigate=useNavigate();
    const {authData,updateData} = useContext(authContext);
    return(
        <>
        <Header/>
        <Flex justifyContent={'space-around'} alignItems='center'>
        <Stack direction={'row'}>
            <Box bg={'red.100'}>
                <Image />
                <h1>empname</h1>
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
               
                <h1>location</h1>
                <h1> phone number</h1>
                <h1>workhistory</h1>
                
            </Box>
        </Stack>
        </Flex>
        </>
    )
            }