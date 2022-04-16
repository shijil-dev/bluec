export const initialData = {
  name: "",
  email: "",
  phone_number: "",
  password: "",
  confirmpassword: "",
  isworker: "",
  skills:[""]
};
export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, ...action };
    case "SET_EMAIL":
      return { ...state, ...action };
    case "SET_PASSWORD":
      return { ...state, ...action };
    case "SET_CPASSWORD":
      return { ...state, ...action };
    case "SET_PHONE":
      return { ...state, ...action };
    case "SET_ROLE":
      return { ...state, ...action };
      case "SET_SKILLS":
        return {...state, ...action};
    default:
      break;
  }
};
