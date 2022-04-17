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

   await fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
  .then((res)=>res.json())
   .then((data)=>{
    localStorage.setItem("userid",data.id)})
  if (true) {
    return [true,"Success"];
  }
  return [false,"failed"];
};
