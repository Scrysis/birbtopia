import { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { userLogin } from "../";

// import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  //   const [login, { error, data }] = useMutation(userLogin);

  const changeState = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <h1>login page</h1>
    </div>
  );
};

export default Login;
