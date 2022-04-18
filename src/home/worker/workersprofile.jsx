
import { StarIcon } from "@chakra-ui/icons"
import { Avatar, Box, Button, Center, Flex, HStack, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Stack, Textarea, VStack } from "@chakra-ui/react"
import {useState} from 'react';
import { useParams } from "react-router-dom";
import { Header } from "../components/header";

export const WorkerProfile = () => {
    const {uid}=useParams();
    console.log(uid)
    const worker = {
        name:"name",
        phone:"9887654543",
        rate:4,
        distance:2,
        sts:"status",
        tag:["painter","polisher"]
    }
    const [sliderValue, setSliderValue] = useState(5)
    return(
        <>
       <Header></Header>
        <Flex justifyContent={'space-around'} alignItems='center'>
        <Stack direction={'row'}>
           
            <Box bg={'red.100'} height={'8xl'} width='20em' padding={'1em'} borderRadius='md'> 
            <Stack alignItems={'center'} justifyItems='space-around'>
            
                <HStack><Avatar/> <Center fontWeight={'bold'} fontSize='2xl'>{worker.name}</Center> </HStack>
                <VStack>
                <h1>{worker.tag}</h1>
                <h1>{worker.distance} kms</h1>
                </VStack>
                <HStack>
                    <StarIcon color={'gold'}/>
                    <StarIcon color={'gold'}/>
                    <StarIcon color={'gold'}/>
                    <StarIcon color={'gold'}/>
                    <StarIcon color={'gold'}/>
                </HStack>
                </Stack>
                <Stack mt='4'>
                    <Center>{worker.phone}</Center>
                    <Center>{worker.sts}</Center>
                    <Button colorScheme={'blackAlpha'}>Send Request</Button>
                </Stack>
            </Box>
   
            <Box 
            borderRadius='md'
            bg={'blue.200'} 
            justifyContent='space-around' 
            height={'8xl'} width='30em' 
            padding={'1em'}>
                <Stack direction={'column'}>
                    <form>
                        <Stack>
                        <label>Review</label>
                       
                        <Textarea bgColor={'white'}/>
                        <Button colorScheme={'blackAlpha'} >Post</Button>
                        </Stack>
                    </form>
                    <Box>
                        Reviews
                        <li>review1, rating1</li>
                        <li>review1, rating1</li>
                        <li>review1, rating1</li>
                    </Box>
                </Stack>
                
            </Box>
        </Stack>
        </Flex>
        </>
    )
    }
