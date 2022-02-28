
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { Results } from './home/components/search_results';
import { Bar } from './home/navbar';
function App() {
  return (
    <ChakraProvider>
    <Bar/>
    <Results/>
    </ChakraProvider>
   
  );
}

export default App;
