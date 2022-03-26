
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Home from './homepage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Begin } from './login/begin';
import { Register } from './login/register';
import React from 'react';
import { Login } from './login/loginpage';
const initialAuthData={
  isLoggedIn:false,
  isWorker:false
}

  export const authContext =React.createContext() ;
function App() {
  
  const [authData, updateData] = React.useState(initialAuthData) ;
  return (
    
    <ChakraProvider>
     <authContext.Provider value={{authData,updateData}}>
   <Router>
     <Routes>
     <Route exact path={'/'} element={<Begin />}/>
     <Route exact path={'/login'} element={<Login/>}/>
       <Route exact path={'/register'} element={<Register/>}/>
       <Route exact path={'/home'} element={<Home/>}/>
     </Routes>
   </Router>
   </authContext.Provider> 
    </ChakraProvider>
   
  );
}

export default App;
