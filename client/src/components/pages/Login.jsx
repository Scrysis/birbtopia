import { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { userLogin } from "../";
import Auth from "../../utils/auth";
// import Sky from "../assets/cloud-sky-cartoon-background-blue-sky-with-white-clouds-flat-poster-or-flyer-cloudscape-panorama-pattern-seamless-colored-abstract-fluffy-texture-vector.jpg";
import profile from "../../assets/birbtopiaLogo.png";
import email from "../../assets/email.jpg";
import pass from "../../assets/pass.png";
import "./login.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  //   const [login, { error, data }] = useMutation(userLogin);

  const handelChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
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
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <img src={profile} alt="profile" className="loginLogo" />
            <h1>Login</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input
                type="text"
                placeholder="Type username here"
                className="name"
                name="email"
                value={formState.email}
                onChange={handelChange}
              />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input
                type="password"
                placeholder="Type password here"
                className="name"
                name="password"
                value={formState.password}
                onChange={handelChange}
              />
            </div>
            <div className="login-button">
              <button onClick={handleLogin}>Login</button>
            </div>

            <p className="link">
              {/* <a href="#Forgotpassword">Forgot password?</a> Or */}
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
