import { Box,
   Button, 
   Checkbox,
    CheckboxGroup,
     Flex,
     FormControl,
     FormLabel,
     Heading, 
     Input, 
     SimpleGrid } from "@chakra-ui/react";
import { Header } from "../components/header";
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { addSkill } from "../components/hooks/addSkill";
import useGeoLocation from "../components/hooks/useGeolocation";

export const WorkerExtra = () =>{
  const [skills,setSkills]=useState([])
  let navigate = useNavigate();
  let [checkedSkills,setCheckedSkills]=useState(new Set())

  useEffect(() => {
    fetch("/skills")
      .then(response => response.json())
      .then(data => {
        setSkills(data)})
  },[])
  const location=useGeoLocation();

  const Checkb = skills.map((skill) =>{
    console.log(skill)
    console.log(skill.name)
    return(

      <SimpleGrid mt={2}>
      <Checkbox key={skill.id} value={skill.name} padding='1px'
      onChange={() => {
        setCheckedSkills(checkedSkills => {
          let temp_state = new Set(checkedSkills)
          if (temp_state.has(skill.id)) {
            temp_state.delete(skill.id)
          } else {
            temp_state.add(skill.id)
          }
          return temp_state
        })
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
      if (await addSkill(skills)){
        navigate('/mainhome');
      }}}

    >
    <FormControl mt={4} >
    <FormLabel>Select your Skill</FormLabel>

    <CheckboxGroup >
    {Checkb}
    </CheckboxGroup>
    <Input value=
        {(location.loaded)?JSON.stringify(location.coordinates):"loaction is not supported refresh"}/>
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
