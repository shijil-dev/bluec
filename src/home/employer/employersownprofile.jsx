import { SettingsIcon, StarIcon } from "@chakra-ui/icons"
import { Avatar, Badge, Box, Button, Center, Flex, Heading, HStack, LinkBox, SimpleGrid, Stack} from "@chakra-ui/react"
import { Header } from "../components/header"
import { useNavigate, useParams} from "react-router-dom"
import { authContext } from "../../App"
import {useContext} from 'react';


export const EmployersOwnProfile = (props) =>    {
   console.log(props)
    const navigate=useNavigate();
    const {authData,updateData} = useContext(authContext);
    const emp={
        name:"karnan",
        phone:"9876543210"
    }
    const testprofiles = [
        {
            key:'1',
            id:"id1",
            name : "Ram",
            place : "Calicut",
            skill: ["Painting","plumbing"],
            sts:"Active",
            rate:'4.5'
    
        },
        {
            key:'2',
            id:"id2",
            name : "Kiran",
            place : "Tanur",
            tag: "Plumber",
            sts:"Busy",
            rate:"5"
    
        }
    
    ];
    const WorkerReq = testprofiles.map((testprofiles) =>{

        return (
        <>
     
         <LinkBox
         as='button'
          border='2px' 
          borderColor='gray.200' 
          borderRadius='md'
          padding={'.5em'}
          bgColor='blue.200'
          boxSize={'-webkit-fit-content'}
          >
             
    
              <Stack >
                 <Stack direction='row'  alignItems='center'   justifyContent={'space-between'}>
                     <Stack direction={'row'}>
                     <Avatar/>
                  
                     <Heading key="name" color={'blue.800'} fontSize='3xl' fontWeight={'bold'}>
                      {testprofiles.name}
                     </Heading>
                     </Stack>
                     <Stack direction={'row'} alignItems="center" >
                     <h1>{testprofiles.tag}</h1>
                      <h1>{testprofiles.place}</h1>
                 
                     </Stack>
                 </Stack>
                 <Stack direction={"row"} alignItems='center'  justifyContent={'space-between'} >
                 <Badge key="status">{testprofiles.sts}</Badge>
                 <Stack direction='row' spacing='10px'> <h1 key="rating">{testprofiles.rate}</h1>
                 <StarIcon /></Stack>
                 </Stack>
                 </Stack>
                
         </LinkBox>
         </>
        )
    })

return(
        <>
        <Header/>
        <Flex justifyContent={'space-around'}>
        <Stack direction={'row'}>
            <Box bg={'red.100'} height='8xl' width={'20em'}>
            <Center mt='4'><HStack>
                <Avatar size={'md'}/>
                <Center fontWeight={'bold'} fontSize={'2xl'}>{emp.name}</Center>
                </HStack>
                <Center>{emp.phone}</Center></Center>
                <Stack padding={'1em'}  mt='4'>
                      <Button  columnGap={'0.5em'}><SettingsIcon/>Edit Profile</Button>
                  </Stack>
                
                  <Stack padding='1em'>
                <Button  colorScheme={'blue'} onClick={() => {
                    navigate("/login")
                    updateData({...authData,isLoggedIn:false})
                }}>Logout</Button>
                </Stack>
            </Box>
            <Box bg={'green.200'} height='100%' width={'50em'}>
            
                <SimpleGrid>
                    {WorkerReq}
                </SimpleGrid>
            </Box>
        </Stack>
        </Flex>
        </>
    )
            }