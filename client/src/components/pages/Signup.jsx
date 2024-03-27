import { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import profile from "../../assets/birbtopiaLogo.png";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../../utils/mutations";
import "../../components/pages/Signup.css";

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
    return (
        <>
            <div className="main">
                <div className="sub-main">
                    <div>
                        <div>
                            <img src={profile} alt="profile" className="loginLogo" />
                            <h1 className="title">Signup</h1>
                            <div className="signup-form">
                                <div>
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
                                        placeholder="Enter your email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                    ></input>

                                </div>
                                <div className="third-input">
                                    <label className="label" id="emailLabel">
                                        Password:
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Enter a password"
                                        name="password"
                                        value={formState.password}
                                        onChange={handleChange}
                                    ></input>
                                </div>
                            </div>
                            <div className="login-button">
                                <button onClick={handleSignup}>Sign Up</button>
                            </div>
                            <p className="link">
                                <Link to="/login">Already have an account?</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
