import { StarIcon } from "@chakra-ui/icons";
import { Avatar,Stack ,Image,SimpleGrid, Badge, Text} from "@chakra-ui/react";
import  '../resources/loc.png';

export const Searchitems = (props) =>{
    console.log(props);
    const Rsearch = props.testprofiles.map((testprofiles) => {
       return (
       
        <SimpleGrid 
         border='2px' 
         borderColor='gray.200' 
         borderRadius='md'
         padding={'.5em'}
         bgColor='green.200'
         boxSize={'-webkit-fit-content'}
         >
             
             <Stack>
                <Stack direction='row' padding={'1em'}  alignItems='center' >
                    <Avatar/>
                    <Text color={'blue.800'} fontSize='3xl' fontWeight={'bold'}>{testprofiles.name}</Text>
                    <h1>{testprofiles.tag}</h1>
                    <Stack direction={'row'} alignItems="center">
                    <Image src='loc.png'/>
                     <h1>{testprofiles.place}</h1>
                    </Stack>
                        
                </Stack>
                <Stack direction={"row"} alignItems="center" >
                <Badge>{testprofiles.sts}</Badge>
                <Stack direction='row' spacing='10px'> <text>{testprofiles.rate}</text>
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