import { SettingsIcon } from "@chakra-ui/icons"
import { Avatar, Box, Button, Flex, Stack } from "@chakra-ui/react"
import { Header } from "../components/header"
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
                <Avatar size={'2xl'}/>
                <h1>empname</h1>
                <Stack padding={'1em'}>
                      <Button columnGap={'0.5em'}><SettingsIcon/>Edit Profile</Button>
                  </Stack>
                
                  <Stack padding='1em'>
                <Button colorScheme={'blue'} onClick={() => {
                    navigate("/login")
                    updateData({...authData,isLoggedIn:false})
                }}>Logout</Button>
                </Stack>
            </Box>
            <Box bg={'blue.200'}>
               
            
                
                <h1>workhistory</h1>
                
            </Box>
        </Stack>
        </Flex>
        </>
    )
            }