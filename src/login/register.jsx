import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { EmployerTab } from "./employerreg"
import { Header } from "./header"
import { WorkerTab } from "./workerreg"

export const Register = () =>{
  return(
    <>
    <Header />

    <Tabs size={'md'} isFitted variant={'unstyled'}>
      <TabList>
      <Tab _selected={{color:'white', bg:'teal',fontWeight:'bold'}}>Register As Worker</Tab>
      <Tab _selected={{color:'white', bg:'teal',fontWeight:'bold'}}>Register As Employer</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <WorkerTab/>
          </TabPanel>
          <TabPanel>
            <EmployerTab />
          </TabPanel>
        
        </TabPanels>
    </Tabs>
    </>
  )
}