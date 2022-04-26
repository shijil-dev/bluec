
import { Avatar, Center, Flex,   IconButton,   Spacer,} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Locate } from "./locate";


export const Bar = () => {
    const navigate=useNavigate();
    const id="tempid";//this id shouldbe current users id
    console.log(true)
    return(
   
    <Flex direction='row'
            bg='blue.700'
            h={['6em','3em']}
            align='center' 
            justifyContent='space-between'
            >
        <Center 
            paddingLeft='.5em'
            color='white'
            fontFamily='monospace'
            fontSize='3xl' 
            fontWeight='bold'>
          BlueCollar
        </Center>
        {/* <Stack direction={["column","row"]}>
            <Flex>
                {console.log(authData.isWorker)}
                {(!authData.isWorker)?
                (<form>
                <InputGroup paddingLeft='10'>
                <Input
                    variant='solid' 
                   width={['10em','20em','30em','40em']}
                    size='sm'
                    placeholder="Search..." 
                    type="search"
                    id="search"
                    />
                    <InputRightElement paddingBottom='2'>
                    <IconButton size='xs' icon={<SearchIcon/> } 
                    type='submit'
                    /> 
                    </InputRightElement>
      
                </InputGroup>
                </form>):(<></>)}
            </Flex>
        <Spacer/> */}
         <Center paddingLeft='5em'>
         <Locate/>
        </Center>
        {/* </Stack> */}
        <Spacer/>
   
        <IconButton borderRadius='full' bg='transparent'  
       onClick={() => navigate("/profile/"+id)}
    icon={<Avatar bg='gray.400' size='sm'/>} />
    </Flex>
) 
 }