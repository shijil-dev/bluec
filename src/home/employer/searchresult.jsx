import { StarIcon } from "@chakra-ui/icons";
import { Avatar,Stack ,SimpleGrid, Badge, Heading, Link, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const testprofiles = [
    {
        key:'1',
        id:"id1",
        name : "Ram",
        dist:3,
        tag: ["Painting","plumbing"],
        sts:"Active",
        rate:"4.5"

    },
    {
        key:'2',
        id:"id2",
        name : "Kiran",
        dist:2,
        tag: ["Plumbing"],
        sts:"Busy",
        rate:"5"

    }

];
export const SearchResults = (props) =>{
    const navigate=useNavigate();
    
    //    const getWorkers = fetch("/users", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(props.query),
    //       }) this api for the workers search
  
      
          const Rsearch = testprofiles.map((testprofile) => {
            return (
            <>
         
             <Box
             as='button'
              border='2px' 
              borderColor='gray.200' 
              borderRadius='md'
              padding={'.5em'}
              bgColor='blue.200'
              boxSize={'-webkit-fit-content'}
              onClick={()=>navigate('/home/workerprofile/'+testprofile.id)}
              >
                 
                  <Link></Link>
                  <Stack >
                     <Stack direction='row'  alignItems='center'   justifyContent={'space-between'}>
                         <Stack direction={'row'}>
                         <Avatar/>
                      
                         <Heading key="name" color={'blue.800'} fontSize='3xl' fontWeight={'bold'}>
                          {testprofile.name}
                         </Heading>
                         </Stack>
                         <Stack direction={'row'} alignItems="center" >
                         <div>{testprofile.tag.map(tag=><Badge marginLeft={'0.5'}>{tag}</Badge>)}</div>
                         <h1>{testprofile.dist} kms</h1>
                         </Stack>
                     </Stack>
                     <Stack direction={"row"} alignItems='center'  justifyContent={'space-between'} >
                     <Badge>{testprofile.sts}</Badge>
                     <Stack direction='row' spacing='10px'> <h1 key="rating">{testprofile.rate}</h1>
                     <StarIcon /></Stack>
                     </Stack>
                     </Stack>
                    
             </Box>
             
                 </>
             );
         });

   return(
   <SimpleGrid alignItems={'center'} columns={[1, null, 2]} spacing='10px'>
   {Rsearch}
   </SimpleGrid>
)
};
