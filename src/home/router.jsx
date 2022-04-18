
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Start } from '../login/start';
import { Register } from '../login/register';
import React,{ useState } from 'react';
import { Login } from '../login/loginpage';
import { WorkerProfile } from './worker/workersprofile';
import { MainHome } from './mainhome';
import { Profile } from './profile';
import { PostWork } from './employer/postwork';
import { WorkerExtra } from './worker/workerextra';

  export const authContext =React.createContext() ;
function Main() {
  
  const [workerSearchDet,setSearchDet]=useState({
    id:"",
    name:"",
    skill:[""],
    exp:"",
    rate:"",
    sts:""
}) ;

  return (
   <Router>
     <Routes>
        <Route exact path={'/'} element={<Start />}/>
        <Route exact path={'/login'} element={<Login/>}/>
        <Route exact path={'/register'} element={<Register/>}/>
        <Route exact path={'/home/workerprofile/:uid'} element={
                             <WorkerProfile/>}/>
        {/* <Route exact path={'/home/employerprofile'} element={
                             <WorkContract/>}/> */}
        <Route exact path={'/mainhome'} element={<MainHome/>}/>
        <Route exact path={'/profile/:uid'} element={<Profile/>}/>
        <Route exact path={'/home/post'} element={<PostWork/>}/>
        <Route exact path={'/workerdet'} element={<WorkerExtra/>}/>
     </Routes>
   </Router>

  );
}

export default Main;
