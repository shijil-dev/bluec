import { EditIcon, StarIcon} from "@chakra-ui/icons"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Stack, VStack } from "@chakra-ui/react"
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
    rate:5,
    phone:"9876756452"
    }
    const req=[
        {
            name:"name",
            phone:"987654321",
            distance:1.5,
            date:1,
        },
        {
            name:"name",
            phone:"987654321",
            distance:1.5,
            date:2,
        },
        {
            name:"name",
            phone:"987654321",
            distance:1.5,
            date:3
        },
    ]
    const Requests = req.map((reqs)=>{
        return(  <Box 
    border='2px' 
    borderColor='gray.200' 
    borderRadius='md'
    padding={'.5em'}
    bgColor='blue.200'
    boxSize={'-webkit-fit-content'}
    onClick={() => navigate("/home/workerprofile")}
    d
    >
        <Stack direction={'row'} justifyContent='space-between'>
            <VStack justifyContent={'space-between'} >
           <Stack direction='row'  alignItems='center' justifyContent={'space-between'}>
               <Avatar/>
               <Heading key="name" color={'blue.800'} fontSize='3xl' fontWeight={'bold'}>
                   {reqs.name}
               </Heading>
             
                <h1>{reqs.distance} kms</h1>
                </Stack>

           <Stack direction={"row"} alignItems='center' 
           padding={'.5em'}
           justifyContent={'space-between'} >
             <h1>{reqs.date} days</h1>
             <h1>{reqs.phone}</h1>
           </Stack>
           </VStack>
           <Center>
           <Button>Accept</Button>
           </Center>
           </Stack>
   </Box>
        )})
    return(
        <>
        <Header/>
        <Flex justifyContent={'space-around'}>
        <Stack direction={'row'}>
            <Box bg={'red.100'} width='20em' height={'8xl'} borderRadius='md'>
                <Stack direction={'column'} padding='1em' alignItems={'center'} >
                    <HStack m='2' >
            <Avatar/>
            <Center fontWeight={'bold'} fontSize={'2xl'} >{worker.name}</Center>
            </HStack>
                <Stack alignItems={'center'} >
                    
                    <HStack>
                    <h1>{worker.rate}</h1>
                    <StarIcon/>
                    </HStack>
                    <h1>{worker.phone}</h1>
                </Stack> 
                </Stack>
                <Stack padding={'1em'}>
                      <Button columnGap={'0.5em'}><EditIcon/>Edit Profile</Button>
                  </Stack>
                  <Stack padding='1em'>
                <Button colorScheme={'blue'} onClick={() => {
                    navigate("/login")
                    updateData({...authData,...{isLoggedIn:false,isWorker:false}})
                }}>Logout</Button>
                </Stack>
            </Box>
            <Box bg={'green.200'} height='100%' width={'50em'} alignItems={'center'}>
            <Center fontWeight={'bold'} fontSize='md'>Contract Requests</Center>
                <Stack m="2">
                {Requests}
                </Stack>
                
            </Box>
        </Stack>
        </Flex>
        </>
    )
    }
