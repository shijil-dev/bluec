
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Start } from '../login/start';
import { Register } from '../login/register';
import React from 'react';
import { Login } from '../login/loginpage';
import { WorkerProfile } from './worker/workersprofile';
import { MainHome } from './mainhome';
import { Profile } from './profile';
import { PostWork } from './employer/postwork';

  export const authContext =React.createContext() ;
function Main() {

  return (
   <Router>
     <Routes>
        <Route exact path={'/'} element={<Start />}/>
        <Route exact path={'/login'} element={<Login/>}/>
        <Route exact path={'/register'} element={<Register/>}/>
        <Route exact path={'/home/workerprofile'} element={<WorkerProfile/>}/>
        <Route exact path={'/mainhome'} element={<MainHome/>}/>
        <Route exact path={'/profile'} element={<Profile/>}/>
        <Route exact path={'/home/post'} element={<PostWork/>}/>
     </Routes>
   </Router>

  );
}

export default Main;
