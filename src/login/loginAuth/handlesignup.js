import { validateForm } from "../../home/components/hooks/formvalidator";

export const handlSignup = async (state) => {
  if(validateForm(state !== true )){
    const resMessage = validateForm(state);
    return [false,resMessage]
  }
  const { name, email, phone_number, password, isworker} = state;
  const user = {
    name,
    email,
    phone_number,
    password,
    isworker,
  };

  const isCreated= await fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })

  if (await isCreated.status === 201) {
    const temp = await isCreated.json()
    localStorage.setItem("userId", temp.id)
    return [true,"success"];
  }
  return [false,"failed"];
};
