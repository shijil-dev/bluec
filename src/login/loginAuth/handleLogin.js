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
        .then((res) =>{console.log(res)})

} 