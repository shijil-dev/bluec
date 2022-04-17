
import { StarIcon } from "@chakra-ui/icons"
import { Avatar, Box, Center, Flex, HStack, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Stack, Textarea, VStack } from "@chakra-ui/react"
import {useState} from 'react'
export const WorkerProfile = () => {
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
       
        <Flex justifyContent={'space-around'} alignItems='center'>
        <Stack direction={'row'}>
           
            <Box bg={'red.100'} height={'8xl'} width='20em' > 
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
                </Stack>
            </Box>
   
            <Box bg={'blue.200'} justifyContent='space-around' height={'8xl'} width='30em'>
                <Stack direction={'column'}>
                    <form>
                        <Stack>
                        <label>Review</label>
                       
                        <Textarea bgColor={'white'}/>
                        </Stack>
                    </form>
                </Stack>
                
            </Box>
        </Stack>
        </Flex>
        </>
    )
    }
