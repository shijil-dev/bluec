
import { StarIcon } from "@chakra-ui/icons"
import { Avatar, Badge, Box, Button, Center, Flex, HStack, SimpleGrid, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Stack, Textarea, VStack } from "@chakra-ui/react"
import {useState} from 'react';
import { useParams } from "react-router-dom";
import { Header } from "../components/header";

export const WorkerProfile = () => {
    const {uid}=useParams();
    console.log(uid)
    const worker = {
        name:"John Doe",
        phone:"9887654543",
        rate:4,
        distance:2,
        sts:"Active",
        tag:["painter","polisher"]
    }
    const reviews = [
        {
            name:"Babu",
            rate:4,
            note:"good work"
        },
        {
            name:"lalu",
            rate:3,
            note:"not bad"
        },
    ]
    return(
        <>
       <Header></Header>
        <Flex justifyContent={'space-around'} alignItems='center'>
        <Stack direction={'row'}>
           
            <Box bg={'red.100'} height={'8xl'} width='20em' padding={'1em'} borderRadius='md'> 
            <Stack alignItems={'center'} justifyItems='space-around'>
            
                <HStack><Avatar/> <Center fontWeight={'bold'} fontSize='2xl'>{worker.name}</Center> </HStack>
                <VStack>
                <h1>{worker.tag.map(tag=><Badge marginLeft={'0.5'}>{tag}</Badge>)}</h1>
                <h1>{worker.distance} kms</h1>
                </VStack>
                <HStack>
                <h1>{worker.rate}</h1>
                    <StarIcon color={'gold'}/>
                    
                </HStack>
                </Stack>
                <Stack mt='4'>
                    <Center>{worker.phone}</Center>
                    <Center color={'teal.600'}>{worker.sts}</Center>
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
                        <label>Write a Review</label>
                       
                        <Textarea bgColor={'white'}/>
                        <Button colorScheme={'blackAlpha'} >Post</Button>
                        </Stack>
                    </form>
                    <Box>
                        <SimpleGrid>
                            {reviews.map(review=>
                        <Stack>
                            {review.name}
                            {review.rate}
                            
                        </Stack>
                                )}
                        </SimpleGrid>
                    </Box>
                </Stack>
                
            </Box>
        </Stack>
        </Flex>
        </>
    )
    }
