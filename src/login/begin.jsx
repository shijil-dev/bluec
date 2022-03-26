import { useNavigate } from "react-router-dom";
import {useEffect,useContext} from "react";
import { authContext } from "../App";

export const Begin = () =>{
 
    const {authData} = useContext(authContext);
    let navigate=useNavigate();
    useEffect(() => {
        if(authData.isLoggedIn && !authData.isWorker)
        navigate("/home");
        else
        navigate("/login");
    
      return null
      
    }, [authData,navigate])
    
    return(
        <div style={{backgroundImage:"url(/blu.jpg)" , 
        backgroundSize:'cover',
         height:'100vh', 
         backgroundPosition:'center' } }/>
    )
}