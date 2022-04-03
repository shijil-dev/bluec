import { StarIcon } from "@chakra-ui/icons";
import { Avatar,Stack ,SimpleGrid, Badge, Heading, Box} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export const WorkSearch = (props) =>{
  //  const workLists=props.workLists; //send props to individual profile
    console.log(props);
    let navigate = useNavigate();
    const Rsearch = props.workLists.map((workLists) => {
       return (
       
        <Box 
         border='2px' 
         borderColor='gray.200' 
         borderRadius='md'
         padding={'.5em'}
         bgColor='blue.200'
         boxSize={'-webkit-fit-content'}
         onClick={() => navigate("/home/workerprofile")}
         >
             
             <Stack >
                <Stack direction='row'  alignItems='center'   justifyContent={'space-between'}>
                    <Stack direction={'row'}>
                    <Avatar/>
                 
                    <Heading key="name" color={'blue.800'} fontSize='3xl' fontWeight={'bold'}>
                        {workLists.name}
                    </Heading>
                    </Stack>
                    <Stack direction={'row'} alignItems="center" >
                    <h1>{workLists.tag}</h1>
                     <h1>{workLists.place}</h1>
                     </Stack>
                
                    </Stack>
                </Stack>
                <Stack direction={"row"} alignItems='center' 
                padding={'.5em'}
                justifyContent={'space-between'} >
                <Badge key="status">{workLists.date}</Badge>
                <Stack direction='row' spacing='10px'>
                </Stack>
                </Stack>
               
        </Box>
        );
    });
   return(
   <SimpleGrid alignItems={'center'} columns={[2, null, 3]} spacing='10px'>
   {Rsearch}
   </SimpleGrid>
)
};