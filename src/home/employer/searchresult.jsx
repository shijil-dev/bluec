import { StarIcon } from "@chakra-ui/icons";
import { Avatar,Stack ,SimpleGrid, Badge, Heading, Box} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export const SearchResults = (props) =>{
    console.log(props);
    let navigate=useNavigate();
    const Rsearch = props.testprofiles.map((testprofiles) => {
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
               
        </Box>
        );
    });
   return(
   <SimpleGrid alignItems={'center'} columns={[1, null, 2]} spacing='10px'>
   {Rsearch}
   </SimpleGrid>
)
};