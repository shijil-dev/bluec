import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

export const Begin = (props) =>{
    
    let navigate=useNavigate();
    useEffect(() => {
        if(props.isLoggedIn)
        navigate("/home");
        else
        navigate("/start");
    
      return null
      
    }, [props,navigate])
    
    return(
        <div style={{backgroundImage:"url(/blu.jpg)" , 
        backgroundSize:'cover',
         height:'100vh', 
         backgroundPosition:'center' } }/>
    )
}