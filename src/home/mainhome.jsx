import { authContext } from '../App';
import React,{ useState,useContext} from 'react';
import { Bar } from "./components/navbar";
import { Avatar, Button, Center, Flex, IconButton, Input, InputGroup, InputRightElement, SimpleGrid, Spacer, Stack } from "@chakra-ui/react";
import { WorkSearch } from "./worker/workresults";
import { SearchResults } from "./employer/searchresult";
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons';
import { Locate } from './components/locate';


export const MainHome = () => {
const {authData}=useContext(authContext);

return(
(authData.isWorker)? ( <WorkerHome/>):
<EmployerHome/>

)
} 
const EmployerHome = () =>{
  const [query,setQuery]=useState({
    isQuery:"",
    queryText:"",
  })
  let navigate=useNavigate();
  const id="tempid";//this id shouldbe current users id
      return (
       <>   
      <Flex direction='row'
            bg='blue.700'
            h={['6em','3em']}
            align='center' 
            justifyContent='space-between'
            padding={'1'}
            >
        <Center 
            paddingLeft='.5em'
            color='white'
            fontFamily='monospace'
            fontSize='3xl' 
            fontWeight='bold'>
          BlueCollar
        </Center>
        <Stack direction={["column","row"]}>
            <Flex>
                <form >
                <InputGroup paddingLeft='10'>
                <Input
                    variant='solid' 
                   width={['10em','20em','30em','40em']}
                    size='sm'
                    placeholder="Search..." 
                    type="search"
                    value={query.queryText}
                    onChange={e=>{setQuery((prevquery)=>({...prevquery,queryText:e.target.value}))
                     }
                    }
                    />
                    <InputRightElement paddingBottom='2'>
                    <IconButton size='xs' icon={<SearchIcon/> } 
                    type='submit'
                    onClick={(e)=>{
                      e.preventDefault();
                      setQuery((preQuery)=>({...preQuery,isQuery:true}))}}
                    /> 
                    </InputRightElement>
      
                </InputGroup>
                </form>
            </Flex>
        <Spacer/>
         <Center paddingLeft='5em'>
         <Locate/>
        </Center>
        </Stack>
        <Spacer/>
        <IconButton borderRadius='full' bg='transparent'  
       onClick={() => navigate("/profile/"+id)}
    icon={<Avatar bg='gray.400' size='sm'/>} />
    </Flex>
       <Button
      size='md'
      height='48px'
      width='200px'
      border='2px'
      borderColor='green.500'
      onClick={() => {navigate('/home/post')}}
    >
    Post A Work
    </Button>
       <SimpleGrid>
         {query.isQuery?
               <SearchResults props={query}/>:<Center>Nothing Here!</Center>}
               </SimpleGrid>
        </>
       
      );
    }

    const WorkerHome = () => {
       
        return (
         <>
      <Bar/>
         <SimpleGrid>
                 <WorkSearch />
                 </SimpleGrid>
          </>
         
        );
      }