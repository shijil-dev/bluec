import { Input } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
export const ShowLoc = () => {
    const [location,setLocation] = useState([{
        loaded : false,
        coordinates : { lat : "",lng : ""}}]);

        const onSuccess = (location) =>{
            setLocation(
                {
                    loaded:true,
                    coordinates:{
                        lat:location.coords.latitude,
                        lng:location.coords.longitude
                    }
                }
            )
        };
        const onError = (error) =>{
            setLocation(
                {
                    loaded:true,
                    error
                }
            )
        } 
        useEffect(() => {
            if( !("geolocation" in navigator)){

                           onError(
                               {
                                code:0,
                                message:"Geolocation is not supported"
                            })
            }
            navigator.geolocation.getCurrentPosition(onSuccess,onError)
        },[location,setLocation])
        
        return (
            <div>
            <Input value=
            {(location.loaded)?JSON.stringify(location):"loaction is not supported"}
            />
            </div>
        )

}