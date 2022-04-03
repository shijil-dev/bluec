export const handlSignup = async(state) =>{

    const {name,email,phone,confirmpassword,isworker}=state
    const user={
        name:name,
        email:email,
        phone_number:phone,
        password:confirmpassword,
        isworker:isworker
    }

    const isCreated = await fetch('/users',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    if (await(isCreated.status === 201)){
        return [true,'successfully created ']
    }
    return [false,'try again']
}
