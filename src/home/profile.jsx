import { authContext } from '../App';
import { useContext } from 'react';
import { WorkerOwnProfile } from './worker/workersownprofile';
import { EmployersOwnProfile } from './employer/employersownprofile';
export const Profile = () =>{
    const {authData}=useContext(authContext);
    console.log(authData.isWorker)
    return(
        
        (!authData.isWorker)?(<WorkerOwnProfile/>):(<EmployersOwnProfile/>)
    )

}