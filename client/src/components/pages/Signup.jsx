import { useState } from "react";
// import profile from "../../assets/birbtopiaLogo.png";
// import email from "../../assets/email.jpg";
import pass from "../../assets/pass.png";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import profile from "../../assets/birbtopiaLogo.png";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../../utils/mutations";

const Signup = (props) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [signUp] = useMutation(SIGNUP);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(formState);
    try {
      const { data } = await signUp({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
      username: "",
    });
  };
  //   };
  return (
    <>
      <div className="main">
        <div className="sub-main">
          <div>
            <div>
              <img src={profile} alt="profile" className="loginLogo" />
              <h1 className="title">Signup for Birbtopia!</h1>
              <div>
                {/* <input
                  type="text"
                  placeholder="Type username here"
                  className="name"
                  name="email"
                  value={formState.email}
                  onChange={() => {}}
                /> */}
                <label className="label" id="usernameLabel">
                  Username:
                </label>
                <input
                  placeholder="Enter a username"
                  name="username"
                  value={formState.username}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="second-input">
                <label className="label" id="emailLabel">
                  Email:
                </label>
                <input
                  placeholder="Enter an email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                ></input>
                <img src={pass} alt="pass" className="email" />
              </div>
              <div className="third-input?">
                {/* //!FIX THIS */}
                <label className="label" id="emailLabel">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                ></input>
                <img src={pass} alt="pass" className="email" />
              </div>
              <div className="login-button">
                <button onClick={handleSignup}>SignUp</button>
              </div>
              <p className="link">
                {/* <a href="#Forgotpassword">Forgot password?</a> Or */}
                <Link to="/login">Already have an account?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <section className="section" id="signUpSection">
        <form className="form" id="signupForm">
          <ul>
            <li></li>
            <li>
              <input placeholder="Enter a email"></input>
            </li>
            <li>
              <label className="label" id="passLabel">
                Password:
              </label>
              <input placeholder="Enter a password"></input>
            </li>
            <li>
              <button className="button" id="signupBtn">
                Signup
              </button>
            </li>
          </ul>
        </form>
      </section> */}
    </>
  );
};

export default Signup;
