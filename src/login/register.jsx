import { Box, Button, Flex, FormControl, Heading, Input, Select, } from "@chakra-ui/react";
import { Header } from "./header";
import { useState ,useContext} from "react";
import { authContext } from "../App";


export const Register = () =>{
  const {authData,updateData} = useContext(authContext);
  const noUser={
    email:'',
    password:'',
    confirmpassword:'',
    phone:'',
    role:''

  }
  const {user,setUser}=useState(noUser);
  return(
    <>
    <Header />
  
        <div>
    <Flex justifyContent={'center'}>
        
    <Box my={8} textAlign='left'>
    <Heading>Create Your Account</Heading>
          <form >
          <FormControl mt={4} >
          <Select bg={'teal'} color='white' variant={'outline'} placeholder="Select your Role">
          <option value="Worker" onClick={e =>updateData({...authData,...{isWorker:"true"}})}>
              Worker
              </option>
            <option value="Employer" onClick={e =>updateData({...authData,...{isWorker:"false"}})}>
              Employer
              </option>
          </Select>
        </FormControl>

          <FormControl mt={4} isRequired>
        
              <Input variant={'flushed'} type='text' placeholder="Enter Your Name" />
            </FormControl>
            <FormControl mt={4} isRequired>
            
            <Input variant={'flushed'} type='number' placeholder="Phone" />
            </FormControl>
    
    
            <FormControl mt={4} isRequired>
             
              <Input variant={'flushed'} type='email' name='email'
              placeholder='Enter your email address' />
            </FormControl>
    
            <FormControl mt={4} isRequired>
              <Input variant={'flushed'} type='password' placeholder='password' />
            </FormControl>
            <FormControl mt={4} isRequired>
              <Input variant={'flushed'} type='password' placeholder='confirm-password' />
            </FormControl>
         
          </form>
          <Button colorScheme={'red'}  width='full' mt={4}>Register</Button>
        </Box>
        </Flex>
    </div>
    )
    

    </>
  )
}