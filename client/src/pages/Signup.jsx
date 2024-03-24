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
    <section className="section" id="signUpSection">
        <form className="form" id="signupForm">
            <h1 className="">Signup for Birbtopia!</h1>
            <ul>
                <li>
                    <label className="label" id="usernameLabel">Username:</label>
                    <input placeholder="Enter a username"></input>
                </li>
                <li>
                    <label className="label" id="emailLabel">Email:</label>
                    <input placeholder="Enter a email"></input>
                </li>
                <li>
                    <label className="label" id="passLabel">Password:</label>
                    <input placeholder="Enter a password"></input>
                </li>
                <li>
                    <button className="button" id="signupBtn">Signup</button>
                </li>
            </ul>
        </form>
    </section>
);
};

export default Signup;
