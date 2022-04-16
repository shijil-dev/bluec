
export const HandleLogin = async(email,password) =>{
    
    const user={
        email:email,
        password:password
    }
    const isLoggedIn = await fetch('/login',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
    })
        .then((res) =>{
            if(res.data.token)
            localStorage.setItem("token",JSON.stringify(res.data))
        })
    if(isLoggedIn.status === 201){
        
    }

} 