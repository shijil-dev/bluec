import { authContext } from '../App';
import { useContext } from 'react';
import { Bar } from "./components/navbar";
import { Button, SimpleGrid } from "@chakra-ui/react";
import { WorkSearch } from "./worker/workresults";
import { SearchResults } from "./employer/searchresult";

export const MainHome = () => {
const {authData}=useContext(authContext);
return(
(authData.isWorker)? ( <WorkerHome/>):<EmployerHome/>

)
} 
const EmployerHome = () =>{
    const testprofiles = [
        {
            id:"id1",
            name : "Ram",
            place : "Calicut",
            tag: "Painter",
            sts:"Active",
            rate:'4.5'
    
        },
        {
            id:"id2",
            name : "Kiran",
            place : "Tanur",
            tag: "Plumber",
            sts:"Busy",
            rate:"5"
    
        }
    
    ];
      return (
       <>
      <Bar/>
       <Button
      size='md'
      height='48px'
      width='200px'
      border='2px'
      borderColor='green.500'
    >
    Post A Work
    </Button>
       <SimpleGrid>
               <SearchResults testprofiles={ testprofiles } />
               </SimpleGrid>
        </>
       
      );
    }

    const WorkerHome = () => {
        const workLists = [
          {
              id:"id1",
              name : "Ram",
              place : "Calicut",
              tag: "Painting",
              date:"2days ago",
              rate:'4.5'
      
          },
          {
              id:"id2",
              name : "Kiran",
              place : "Tanur",
              tag: "Plumber",
              date:"today",
              rate:"5"
      
          }
      
      ];
        return (
         <>
      <Bar/>
         <SimpleGrid>
                 <WorkSearch workLists={ workLists } />
                 </SimpleGrid>
          </>
         
        );
      }