export const handlSignup = async (state) => {
  const { name, email, phone_number, password, isworker } = state;
  const user = {
    name,
    email,
    phone_number,
    password,
    isworker,
  };

  const isCreated = await fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
  .then((res) =>{
    if(res.data.token)
    localStorage.setItem("token",JSON.stringify(res.data))
})
  if ((isCreated.status === 201)) {
    return [true];
  }
  return [false];
};
