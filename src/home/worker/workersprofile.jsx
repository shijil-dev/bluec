
import { StarIcon } from "@chakra-ui/icons"
import { Badge, Box, Flex, HStack, Image, Img, Stack } from "@chakra-ui/react"
import { Header } from "../components/header"

export const WorkerProfile = (props) =>    {
    console.log(props)
    return(
        <>
       
        <Flex justifyContent={'space-around'} alignItems='center'>
        <Stack direction={'row'}>
           
            <Box bg={'red.100'} > 
            <Stack alignItems={'center'} justifyItems='space-around'>
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                <HStack><h1>{props.name}</h1>   <Badge>Active</Badge></HStack>
                <h1>{props.tag}</h1>
                <h1>5 Years</h1>
                <HStack>
                    <StarIcon color={'gold'}/>
                    <StarIcon color={'gold'}/>
                    <StarIcon color={'gold'}/>
                    <StarIcon color={'gold'}/>
                    <StarIcon color={'gold'}/>
                </HStack>
              
                <h1>  </h1>
                </Stack>
            </Box>
   
            <Box bg={'blue.200'} justifyContent='space-around'>
                <Stack direction={'column'}>
                <Box bg={'teal.200'}>
                <HStack>
                    <h1>worktype</h1>
                    <h1>worklocation</h1>
                    </HStack>
                    <Img Src="https://www.caandesign.com/wp-content/uploads/2015/11/Prairie-House-by-Yunakov-Architecture-15.jpg"/>
                    <h1>work rating and reviews</h1>
                    <h1>workphotos</h1>
                </Box>
                <Box bg={'green.200'} >
                    <Stack direction={'row'}>
                    <h1>Employer name</h1> 
                    <h1>worklocation</h1>
                    </Stack>
                   
                    </Box>
                </Stack>
                
            </Box>
        </Stack>
        </Flex>
        </>
    )
    }
