import { Bar } from '../components/navbar';
import { SimpleGrid } from '@chakra-ui/react';
import { WorkSearch } from './workresults';
function WorkerHome() {
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

export default WorkerHome;