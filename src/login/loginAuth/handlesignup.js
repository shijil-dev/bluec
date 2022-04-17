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

  if (await isCreated.status === 201) {
    const temp = await isCreated.json()
    localStorage.setItem("userId", temp.id)
    return [true];
  }
  return [false];
};
