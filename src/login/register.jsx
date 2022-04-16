import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import { Header } from "../home/components/header";
import { useReducer, useContext } from "react";
import { authContext } from "../App";
import { useNavigate } from "react-router-dom";
import { handlSignup } from "./loginAuth/handlesignup";
import { userReducer, initialData } from "./reducer/userReducer";
export const Register = () => {
  let navigate = useNavigate();
  const {authData,updateData} = useContext(authContext);
  const [state, dispatch] = useReducer(userReducer, initialData);
  return (
    <>
      <Header />
      <div>
        <Flex justifyContent={"center"}>
          <Box my={8} textAlign="left">
            <Heading>Create Your Account</Heading>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
               if (await handlSignup(state)){
                (authData.isWorker)?navigate('/workerdet'): navigate('/login')
               }
                
              }}
            >
              <FormControl mt={4}>
                <FormLabel>Select Your Role</FormLabel>
                <Select
                  bg={"teal"}
                  color="white"
                  variant={"outline"}
                  placeholder="Select Your role"
                >
                  <option
                    value="Worker"
                    onClick={(e) =>{
                      dispatch({ type: "SET_ROLE", isworker: true })
                      updateData({...authData,isWorker:true})
                    }
                    }
                  >
                    Worker
                  </option>
                  <option
                    value="Employer"
                    onClick={(e) =>{
                      dispatch({ type: "SET_ROLE", isworker: false })
                      updateData({...authData,isWorker:false})
                    }
                    }
                  >
                    Employer
                  </option>
                </Select>
              </FormControl>

              <FormControl mt={4} isRequired>
                <Input
                  variant={"flushed"}
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={(e) =>
                    dispatch({ type: "SET_NAME", name: e.target.value })
                  }
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <Input
                  variant={"flushed"}
                  type="text"
                  placeholder="Phone"
                  onChange={(e) =>
                    dispatch({
                      type: "SET_PHONE",
                      phone_number: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <Input
                  variant={"flushed"}
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={(e) =>
                    dispatch({ type: "SET_EMAIL", email: e.target.value })
                  }
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <Input
                  variant={"flushed"}
                  type="password"
                  placeholder="password"
                  onChange={(e) =>
                    dispatch({ type: "SET_PASSWORD", password: e.target.value })
                  }
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <Input
                  variant={"flushed"}
                  type="password"
                  placeholder="confirm-password"
                  onChange={(e) =>
                    dispatch({
                      type: "SET_CPASSWORD",
                      confirmpassword: e.target.value,
                    })
                  }
                />
              </FormControl>
              
              {(authData.isWorker)?(<Button 
              type="submit" 
              colorScheme={"red"} 
              width="full" mt={4}>Next</Button>):
              (<Button type="submit" colorScheme={"red"} width="full" mt={4}>
                Register
              </Button>)}
            </form>
          </Box>
        </Flex>
      </div>
      )
    </>
  );
};
