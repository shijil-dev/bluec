import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Input, Link, Stack } from "@chakra-ui/react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
export const Login = () =>{
  const [login,setLogin] = useState({username:'',password:''});
const setLoginDetails = ()=>{
}
let navigate=useNavigate();
function handleClick(){
navigate("/register");
}
return (
    <div>
<Flex justifyContent={'center'}>
<Box my={8} textAlign='left'>
      <form >

        <FormControl >
          <FormLabel>Email address</FormLabel>
          <Input variant={'flushed'} type='email' name='email'
          placeholder='Enter your email address' 
        
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input variant={'flushed'} type='password' placeholder='Enter your password' />
        </FormControl>

        <Stack isInline justifyContent='space-between' mt={4}>
            <Box>
              <Checkbox>Remember Me</Checkbox>
            </Box>
            <Box>
              <Link color={'blue.600'}>Forgot your password?</Link>
            </Box>
        </Stack>

        <Button colorScheme={'green'}  width='full' mt={4}>Log In</Button>
      </form>
      <Button colorScheme={'red'}  width='full' mt={4} onClick={handleClick}>Register</Button>
    </Box>
    </Flex>
</div>
)
}