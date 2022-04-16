import { Box, Button, Checkbox, CheckboxGroup, Flex, FormControl, FormLabel, Heading, SimpleGrid } from "@chakra-ui/react";
import { initialData, userReducer } from "../../login/reducer/userReducer";
import { Header } from "../components/header";
import { useReducer,useState,useContext,useEffect } from 'react';
import { handlSignup } from "../../login/loginAuth/handlesignup";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../App";

export const WorkerExtra = () =>{
  const {authData,updateData} = useContext(authContext);
  const [state, dispatch] = useReducer(userReducer, initialData);
  const [skills,setSkills]=useState([])
  let navigate = useNavigate();
  let [addSkill,setAddSkill]=useState([])
     
  //   const fetchSkills = ()=>{
  //     const response =fetch('/skills')
  //     .then((res)=>res.json())
  //     console.log(response)
  // //    setSkills()
  //   //  console.log(data)
  //   }
    // useEffect(() => {
    //   fetchSkills()
    // }, [])

    useEffect(() => {
      fetch("/skills")
      .then(response => response.json())
      .then(data => {
        setSkills(data)})
    },[])
    
    const Checkb = skills.map((skill) =>{
      console.log(skill)
      console.log(skill.name)
              return(
        
        <SimpleGrid mt={2}>
        <Checkbox key={skill.id} value={skill.name} padding='1px' 
        onClick={(e)=>{
          if(e.target.checked){
            setAddSkill([
              ...addSkill,{id:skill.id,name:skill.name}
            ])
          }
          setAddSkill(
            addSkill.filter((dskill)=>dskill.id !== skill.id)
          )
        }}
        >
           {skill.name}
        </Checkbox>
        </SimpleGrid>
       
        )
        })
    return(
        <>
        <Header />
        <div>
          <Flex justifyContent={"center"}>
            <Box my={8} textAlign="left">
              <Heading>Add Worker Details</Heading>
              <form onSubmit={async (e) => {
                e.preventDefault();
               if (await handlSignup(state)){
                 navigate('/mainpage');
               }}}
                 
                >
                  <FormControl mt={4} >
                      <FormLabel>Select your Skill</FormLabel>
                     
               <CheckboxGroup >
                {Checkb}
                </CheckboxGroup>
              
                </FormControl>
               
                <Button type="submit" colorScheme={"red"} width="full" mt={4}>
                  Add
                </Button>
              </form>
            </Box>
          </Flex>
        </div> 
      </>
    )
}
