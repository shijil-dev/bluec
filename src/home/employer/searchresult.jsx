import { SpinnerIcon, StarIcon } from "@chakra-ui/icons";
import { Avatar,Stack ,SimpleGrid, Badge, Heading, Box, Center, HStack, LinkBox, LinkOverlay, Link } from "@chakra-ui/react";
import { useNavigate,useParams ,link} from "react-router-dom";
import { WorkerProfile } from "../worker/workersprofile";
import { useState,useContext} from 'react';
import { authContext } from "../../App";
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
export const SearchResults = (props) =>{
    console.log(props)
   return(
       !props.isQuery?
   <SimpleGrid alignItems={'center'} columns={[1, null, 2]} spacing='10px'>
   {Rsearch}
   </SimpleGrid>:<Center>
       <HStack>
           <Center>Search For Workers</Center>
           <SpinnerIcon/>
           </HStack>
           </Center>
)
};
const Rsearch = testprofiles.map((testprofiles) => {
  
    const handleClick = (tempTestprofiles) =>{
    }
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
      onClick={()=>handleClick(testprofiles)}
      >
         
          <Link></Link>
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
     );
 });