
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
    if(await isLoggedIn.status === 201){
        const user = isLoggedIn.json()
        localStorage.setItem("userId", user.id)
        return [true,"success"];
    }
    return [false,"failed"];

} 