

import Home from './employer/homepage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Start } from '../login/start';
import { Register } from '../login/register';
import React from 'react';
import { Login } from '../login/loginpage';
import WorkerHome from './worker/workerhome';
import { WorkerProfile } from './worker/workersprofile';


  export const authContext =React.createContext() ;
function Main() {

  return (
    
    
   <Router>
     <Routes>
     <Route exact path={'/'} element={<Start />}/>
     <Route exact path={'/login'} element={<Login/>}/>
       <Route exact path={'/register'} element={<Register/>}/>
       <Route exact path={'/home'} element={<Home/>}/>
       <Route exact path={'/workerhome'} element={<WorkerHome/>}/>
       <Route exact path={'/home/workerprofile'} element={<WorkerProfile/>}/>
     </Routes>
   </Router>

  );
}

export default Main;
