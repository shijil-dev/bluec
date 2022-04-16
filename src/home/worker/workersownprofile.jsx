import { EditIcon, InfoIcon, SettingsIcon } from "@chakra-ui/icons"
import { Avatar, Box, Button, Flex, Heading, Stack } from "@chakra-ui/react"
import { Header } from "../components/header"
import { useNavigate} from "react-router-dom"
import { authContext } from "../../App"
import {useContext} from 'react';


export const WorkerOwnProfile = () =>    {
    const navigate=useNavigate();
    const {authData,updateData} = useContext(authContext);
    const worker={
        name:"Murali",
        tag:["painting","construction"
    ],
    exp:4,
    rate:5
    }
    return(
        <>
        <Header/>
        <Flex justifyContent={'space-around'} alignItems='center'>
        <Stack direction={'row'}>
            <Box bg={'red.100'}>
                <Stack direction={'row'} padding='1em'>
            <Avatar/>
                <Heading>workername</Heading> 
                </Stack>
                <Stack padding={'1em'}>
                      <Button columnGap={'0.5em'}><EditIcon/>Edit Profile</Button>
                  </Stack>
                <Stack padding={'1em'}>
                      <Button columnGap={'0.5em'}><SettingsIcon/>Settings</Button>
                  </Stack>
                  <Stack padding={'1em'}>
                      <Button columnGap={'0.5em'}><InfoIcon/>About</Button>
                  </Stack>
                  <Stack padding='1em'>
                <Button colorScheme={'blue'} onClick={() => {
                    navigate("/login")
                    updateData({...authData,...{isLoggedIn:false,isWorker:false}})
                }}>Logout</Button>
                </Stack>
            </Box>
            <Box bg={'blue.200'}>
               { worker.tag.map(<h1>worker.tag</h1>)}
                <h1>experience</h1>
                <h1> rating reviws</h1>
                
            </Box>
        </Stack>
        </Flex>
        </>
    )
    }
