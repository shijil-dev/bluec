import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, } from "@chakra-ui/react";
import { Header } from "./header";
import { useState ,useContext} from "react";
import { authContext } from "../App";


export const Register = () =>{
  const {authData,updateData} = useContext(authContext);
  const initialUser={
    name:'',
    email:'',
    password:'',
    confirmpassword:'',
    phone:''

  }
  
  const [user,setUser]=useState(initialUser);
 const handleChange = (e) =>{
  
   const {name,value} = e.target;
   setUser((prevUser) =>({...prevUser,[name]:value}))
   console.log(user.email);
 }


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
               onChange={handleChange}
               value={user.name}
               name="name" />
            </FormControl>

            <FormControl mt={4} isRequired>
            <Input variant={'flushed'} type='number' placeholder="Phone" 
            onChange={handleChange}
            value={user.phone}
            name="phone"/>
            </FormControl>
    
            <FormControl mt={4} isRequired>
              <Input variant={'flushed'} type='email' name="email"
              placeholder="Enter your email address"
              onChange={handleChange}
               value={user.email} />
            </FormControl>
    
            <FormControl mt={4} isRequired>
              <Input variant={'flushed'} type='password' placeholder="password"
              onChange={handleChange}
              value={user.password} 
              name="password"/>
            </FormControl>
            <FormControl mt={4} isRequired>
              <Input variant={'flushed'} type='password' placeholder="confirm-password" 
              onChange={handleChange}
              value={user.confirmpassword}
              name="comfirmpassword"/>
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