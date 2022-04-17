export const validateForm = (entries) =>{
    const ispresent = checkPresence (entries) 
        if(!ispresent[0]){
            return(ispresent[1]) 
        }
    
    if( entries.phone_number.length!==10){
        return ("Invalid phone number")
    }
    if(entries.password !== entries.confirmpassword){
        return ("Password does not match")
    }
}

const checkPresence = (state) => {
    if(!state.name){
        return [false,"Enter your name"]
    }
    if(!state.email){
        return [false,"Enter your email"]
    }  
    if(!state.phone_number){
        return [false,"Enter your phone number"]
    }
    if(!state.password){
        return [false,"Enter pasword"]
    }
    if(!state.confirmpassword){
        return [false,"confirm your password"]
    }
    else {
        return [true,"complete"]
    }
}