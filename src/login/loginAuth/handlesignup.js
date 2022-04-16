export const handlSignup = async (state) => {
  const { name, email, phone_number, password, isworker} = state;
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

  if ((isCreated.status === 201)) {
    return [true];
  }
  return [false];
};
