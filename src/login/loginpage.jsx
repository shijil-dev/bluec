import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Input, Link, Select, Stack } from "@chakra-ui/react";
import {useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../App";
import { Header } from "../home/components/header";
import { HandleLogin } from "./loginAuth/handleLogin";

export const Login = () =>{
  
  const {authData,updateData} = useContext(authContext);
  console.log(authData.isWorker)
 {/*const testuser={
    username:"test@test.com",
    password:"password"

  }*/}
  const [login,setLogin] = useState({username:'',password:''});
  console.log(login.username)
let navigate=useNavigate();

{/*function handleSubmit(){
  console.log(authData.isWorker);

  
  if((login.username === testuser.username) && (login.password === testuser.password)){
    

    console.log("testlogin success")
    updateData({...authData, ...{ isLoggedIn:true }});
    navigate("/mainhome")

  }
  else{
    updateData({...authData, ...{ isLoggedIn:false }});
    console.log("error");
  }

}

*/}
return (
  <>
  <Header />
    <div>
<Flex justifyContent={'center'}>
<Box my={8} textAlign='left'>
  <Heading>Log In to your Account</Heading>
      <form onSubmit={async(e) =>{
        e.preventDefault()
        if(await HandleLogin(login.username,login.password)){
          updateData((prevAuth)=>{
            return({...prevAuth,...{isLoggedIn:true}})
          })
            return(navigate('/mainhome'))
        }
            console.log("incorrect credentials")
        }
      }
        >

      <FormControl mt={4} >
      <FormLabel>Select Your Role</FormLabel>
          <Select bg={'tomato'}
           color='white' 
           variant={'outline'}>
             <option value="Employer" onClick={e =>updateData({...authData,isWorker:false})}>
              Employer
              </option>
            <option value="Worker" onClick={e =>updateData({...authData,isWorker:true})}>
              Worker
              </option>
            
          </Select>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Email address</FormLabel>
          <Input variant={'flushed'} 
          type='email'
           name='email'
          placeholder='Enter your email address' 
          onChange={e => setLogin({...login,username:e.target.value})}
          value={login.username} 
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input variant={'flushed'} 
          type='password' 
          placeholder='Enter your password' 
          onChange={e => setLogin({...login,password:e.target.value})}
          value={login.password} 
          />
        </FormControl>

        <Stack isInline justifyContent='space-between' mt={4}>
           
            
              <Link color={'blue.600'}>Forgot your password?</Link>
          
        </Stack>

        <Button type='submit' colorScheme={'green'}  width='full' mt={4} >Log In</Button>
      </form>
      <Stack mt={4}>
      <Center>Don't have an Account?</Center>
      <Button colorScheme={'red'}  width='full' mt={4} onClick={() => navigate("/register")}>Sign Up</Button>
      </Stack>
    </Box>
    </Flex>
</div>
</>
)
}