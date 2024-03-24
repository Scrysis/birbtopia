import { useState } from "react";
import profile from "../assets/birbtopiaLogo.png";
import email from "../assets/email.jpg";
import pass from "../assets/pass.png";
import './Signup.css';

// const Login = (props) => {
//   const [formState, setFormState] = useState({ email: "", password: "" });
  

//   const changeState = (e) => {
//     const { name, value } = e.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log(formState);
//     try {
//       const { data } = await Login({
//         variables: { ...formState },
//       });

//       Auth.login(data.login.token);
//     } catch (e) {
//       console.error(e);
//     }

//     setFormState({
//       email: "",
//       password: "",
//     });
//   };
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="images">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Signup for Birbtopia!</h1>
            <section>
                <label>Username:</label>
                <input placeholder="Enter a username"></input>
            </section>
            <section>
                <label>Email:</label>
                <input placeholder="Enter email"></input>
            </section>
            <section>
                <label>Password:</label>
                <input placeholder="Enter a password"></input>
            </section>
            <section>
                <button>Signup</button>
            </section>
        </div>
      </div>
    </div>
  );
};

export default Signup;
