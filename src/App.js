
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { Bar } from './home/navbar';
function App() {
  return (
    <ChakraProvider>
    <Bar/>
    </ChakraProvider>
   
  );
}

export default App;
