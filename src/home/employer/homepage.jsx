

import { Bar } from '../components/navbar';
import { Button, SimpleGrid } from '@chakra-ui/react';
import { SearchResults } from './searchresult';
function Home() {
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

export default Home;
