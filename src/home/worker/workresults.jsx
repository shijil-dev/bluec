import { Avatar,Stack ,SimpleGrid, Badge, Heading, Box} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export const WorkSearch = (props) =>{
  //  const workLists=props.workLists; //send props to individual profile
    console.log(props);
    let navigate = useNavigate();
    const workLists = [
        {
            id:"id1",
            name : "Ram",
            place : "Calicut",
            tag: "Painting",
            date:"2days ago",
            rate:'4.5',
            dist:2
        },
        {
            id:"id2",
            name : "Kiran",
            place : "Tanur",
            tag: "Plumbing",
            date:"today",
            rate:"5",
            dist:4
    
        }
    
    ];
    const Rsearch = workLists.map((workList) => {
       return (
       
        <Box 
         border='2px' 
         borderColor='gray.200' 
         borderRadius='md'
         padding={'.5em'}
         bgColor='blue.200'
         boxSize={'-webkit-fit-content'}
         onClick={() => navigate("/home/workerprofile/"+workList.id)}
         >
             
             <Stack >
                <Stack direction='row'  alignItems='center'   justifyContent={'space-between'}>
                    <Stack direction={'row'}>
                    <Avatar/>
                 
                    <Heading key="name" color={'blue.800'} fontSize='3xl' fontWeight={'bold'}>
                        {workList.name}
                    </Heading>
                    </Stack>
                    <Stack direction={'row'} alignItems="center" >
                    <h1>{workList.tag}</h1>
                     <h1>{workList.place}</h1>
                     </Stack>
                
                    </Stack>
                </Stack>
                <Stack direction={"row"} alignItems='center' 
                padding={'.5em'}
                justifyContent={'space-between'} >
                
                
                <Badge key="status">{workList.date}</Badge>
                <h1>{workList.dist} kms</h1>
               
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