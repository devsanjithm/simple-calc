import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../style.css';
import { toast } from "react-toastify";
import Loading from "./Loading";
import validator from 'validator';
import { UserContext } from "../context";
import { auth, signInWithEmailAndPassword } from "../firebase";

function Login() {

    const Input = {
        email: "",
        password: "",
    }

    const [LoginData, setLoginData] = useState(Input);
    const { user, setloadscreen, loadscreen } = useContext(UserContext);
    const navigate = useNavigate();

    function handleInputChange(e) {
        const { name, value } = e.target;
        setLoginData({
            ...LoginData,
            [name]: value,
        });
    }

    // if (user) {
    //     navigate("/Home")
    // }

    function handleSubmit(e) {
        e.preventDefault();
        if (LoginData.email.length === 0 ||
            LoginData.password.length === 0) {
            toast.error("All Fileds Are Required   :(")
            return;
        }
        if (!(validator.isEmail(LoginData.email))) {
            toast.error("Not a valid Email ID");
            setLoginData({
                ...LoginData,
                ["email"]: "",
            });
            return;
        }

        if (LoginData.password.length < 6) {
            toast.error("Password must contain more than 6 letters")
            return;
        }
        setloadscreen(true);
        signInWithEmailAndPassword(auth, LoginData.email, LoginData.password)
            .then((userCredential) => {
                toast("Logged in Successfully");
                setloadscreen(false);
                navigate("/Home")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setloadscreen(false);
                if (errorCode === "auth/user-not-found") {
                    toast.error("Email not found. Create new account");
                } else {
                    toast.error("Invalid Credentials");
                }
            });
    }

    return (
        <div className="signcontainer">
            {
                loadscreen ? <Loading /> : null
            }
            <div style={{ display: "flex", height: "100vh" }}>
                <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", width: "75%", }}>
                    <h1 style={{ color: "black", fontSize: "60px", }} ><strong>Remote Hire</strong></h1>
                </div>
                <center style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", width: "50%", }}>
                    <div className="colors" style={{ display: "flex", flexDirection: "column", padding: "50px", borderRadius: "10px" }}>

                        <h2 style={{ color: "black", fontSize: "25px" }}>Login</h2><br></br>
                        <div class="text">
                            <p>Please sign in to continue</p>
                        </div>

                        <form method="post">
                            <div class="txt_field" id='email'>
                                <input
                                    onChange={handleInputChange}
                                    value={LoginData.email}
                                    name="email"
                                    type="text" required></input>
                                <span></span>
                                <label>Email or username</label>
                            </div>
                            <div class="txt_field" id='password'>
                                <input type="password"
                                    onChange={handleInputChange}
                                    name="password"
                                    value={LoginData.password}
                                    required></input>
                                <span></span>
                                <label>Password</label>
                            </div>
                            < input
                                onClick={handleSubmit}
                                type="submit" value="Login" classname="login"></input>
                            <div class="signup_link">
                                New here?<Link to="/signup">Click to signup</Link>
                            </div>
                        </form>
                    </div>
                </center>
            </div>
        </div>
    );
}

export default Login;
