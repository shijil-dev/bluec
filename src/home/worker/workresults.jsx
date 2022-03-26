import { StarIcon } from "@chakra-ui/icons";
import { Avatar,Stack ,SimpleGrid, Badge, Heading} from "@chakra-ui/react";


export const WorkSearch = (props) =>{
    console.log(props);
    const Rsearch = props.workLists.map((workLists) => {
       return (
       
        <SimpleGrid 
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
                        {workLists.name}
                    </Heading>
                    </Stack>
                    <Stack direction={'row'} alignItems="center" >
                    <h1>{workLists.tag}</h1>
                     <h1>{workLists.place}</h1>
                
                    </Stack>
                </Stack>
                <Stack direction={"row"} alignItems='center'  justifyContent={'space-between'} >
                <Badge key="status">{workLists.date}</Badge>
                <Stack direction='row' spacing='10px'> <h1 key="rating">{workLists.rate}</h1>
                <StarIcon /></Stack>
                </Stack>
                </Stack>
               
        </SimpleGrid>
        );
    });
   return(
   <SimpleGrid alignItems={'center'} columns={[1, null, 2]} spacing='10px'>
   {Rsearch}
   </SimpleGrid>
)
};