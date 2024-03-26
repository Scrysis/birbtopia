import { useState } from "react";
// import profile from "../../assets/birbtopiaLogo.png";
import email from "../../assets/email.jpg";
import pass from "../../assets/pass.png";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import profile from "../../assets/birbtopiaLogo.png";

const Signup = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });

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
      const { data } = await Login({
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
                <input placeholder="Enter a username"></input>
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
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

      <section className="section" id="signUpSection">
        <form className="form" id="signupForm">
          <ul>
            <li></li>
            <li>
              <label className="label" id="emailLabel">
                Email:
              </label>
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
      </section>
    </>
  );
};

export default Signup;
