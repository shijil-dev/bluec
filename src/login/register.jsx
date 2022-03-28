import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, } from "@chakra-ui/react";
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
            <FormLabel>Select Your Role</FormLabel>
          <Select bg={'teal'} 
          color='white' 
          variant={'outline'} 
          >
          <option value="Worker" onClick={e =>updateData({...authData,...{isWorker:true}})}>
              Worker
              </option>
            <option value="Employer" onClick={e =>updateData({...authData,...{isWorker:false}})}>
              Employer
              </option>
          </Select>
        </FormControl>

          <FormControl mt={4} isRequired>
        
              <Input variant={'flushed'} type='text' placeholder="Enter Your Name"
               onChange={e => setUser({...noUser,name:e.target.value})}
               value={noUser.name} />
            </FormControl>
            <FormControl mt={4} isRequired>
            
            <Input variant={'flushed'} type='number' placeholder="Phone" 
            onChange={e => setUser({...noUser,phone:e.target.value})}
            value={noUser.phone}/>
            </FormControl>
    
    
            <FormControl mt={4} isRequired>
             
              <Input variant={'flushed'} type='email' name='email'
              placeholder='Enter your email address'
              onChange={e => setUser({...noUser,email:e.target.value})}
               value={noUser.email} />
            </FormControl>
    
            <FormControl mt={4} isRequired>
              <Input variant={'flushed'} type='password' placeholder='password'
              onChange={e => setUser({...noUser,password:e.target.value})}
              value={noUser.password} />
            </FormControl>
            <FormControl mt={4} isRequired>
              <Input variant={'flushed'} type='password' placeholder='confirm-password' 
              nChange={e => setUser({...noUser,confirmpassword:e.target.value})}
              value={noUser.confirmpassword}/>
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