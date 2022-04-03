import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react"

export const WorkerReg = () =>{
    return(
        <>
        <FormControl mt={4} >
            <FormLabel>Select Your Skill</FormLabel>
                <Select bg={'teal'}
                 color='white' 
                 variant={'outline'}>
                   <option >
                  Painter
                    </option>
                  <option value="Plumbing">
                  Plumber
                    </option>
                    <option>
                        Other
                    </option>
                  
                </Select>
              </FormControl>
      
              <FormControl mt={4}>
                <FormLabel>Location</FormLabel>
                <Input variant={'flushed'} 
                />
              </FormControl>
      
              <FormControl mt={4}>
                <FormLabel>Work Experience</FormLabel>
                <Select 
                 variant={'outline'}>
                   <option >
                  Less Than 5 Year
                    </option>
                  <option >
                  5 Years
                    </option>
                    <option >
                  5+ Years
                    </option>
                    <option >
                  10 Years
                    </option>
                    <option >
                  10+ Years
                    </option>
                    </Select>
              </FormControl>
              </>
    )
}