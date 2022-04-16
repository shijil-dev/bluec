import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select } from "@chakra-ui/react"
import { Header } from "../components/header"

export const PostWork = () =>{
    return (
        <>
        <Header/>
       <div>
      <Flex justifyContent={'center'}>
      <Box my={8} textAlign='left'>
        <Heading>Work Details</Heading>
            <form>
      
            <FormControl mt={4} >
            <FormLabel>Work Type</FormLabel>
                <Select bg={'tomato'}
                 color='white' 
                 variant={'outline'}>
                   <option >
                  Painting
                    </option>
                  <option value="Plumbing">
                  Plumbing
                    </option>
                  
                </Select>
              </FormControl>
      
              <FormControl mt={4}>
                <FormLabel>Location</FormLabel>
                <Input variant={'flushed'} 
                />
              </FormControl>
      
              <FormControl mt={4}>
                <FormLabel>Who Can see the Work</FormLabel>
                <Select bg={'tomato'}
                 color='white' 
                 variant={'outline'}>
                   <option >
                  private
                    </option>
                  <option value="Plumbing">
                  public
                    </option>
                    </Select>
              </FormControl>
           
      
      
              
      
              <Button type='submit' colorScheme={'green'}  width='full' mt={4} >Post</Button>
            </form>
          
          </Box>
          </Flex>
      </div>
      </>
      )
}