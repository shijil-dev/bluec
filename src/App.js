
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Main from './home/router';
let initialAuthData={
  isLoggedIn:false,
  isWorker:false,
}
  export const authContext =React.createContext() ;
function App() {
  const [authData, updateData] = React.useState(initialAuthData) ;
  return (
    
    <ChakraProvider>
     <authContext.Provider value={{authData,updateData}}>
   <>
   <Main/>
   </>
   </authContext.Provider> 
    </ChakraProvider>
   
  );
}

export default App;
