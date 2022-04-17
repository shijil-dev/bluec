import { StarIcon } from "@chakra-ui/icons";
import { Avatar,Stack ,SimpleGrid, Badge, Heading, LinkBox, Link } from "@chakra-ui/react";

const testprofiles = [
    {
        key:'1',
        id:"id1",
        name : "Ram",
        place : "Calicut",
        tag: ["Painting","plumbing"],
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
    
    //    const getWorkers = fetch("/users", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(props.query),
    //       }) this api for the workers search
  
      
          const Rsearch = testprofiles.map((testprofiles) => {
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
                         <h1>{testprofiles.tag.map}</h1>
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

   return(
   <SimpleGrid alignItems={'center'} columns={[1, null, 2]} spacing='10px'>
   {Rsearch}
   </SimpleGrid>
)
};
