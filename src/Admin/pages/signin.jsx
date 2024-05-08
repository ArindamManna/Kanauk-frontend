import React, { useState } from "react";
import "../sass/style.css";
import { svg1, svg2, svg3, svg4 } from "../images/staticData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "../store/slices/authSlice";

const SigninAdmin = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handelInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({ ...user, [name]: value });
    };

    const handelSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/admin/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                const data = await response.json();
                const user = { fname: data.fname, lname: data.lname, email: data.email };
                dispatch(loginSuccess({ user, token: data.token }));
                setUser({ email: "", password: "" });
                navigate("/admin/home");
            } else {
                dispatch(loginFailure({ error: "invalid credentials" }));
            }
        } catch (error) {
            dispatch(loginFailure({ error: error.message }));
        }
    };
    return (
        <div classNameName="admin" style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <form className="form_container" onSubmit={handelSubmit}>
                <div className="logo_container"></div>
                <div className="title_container">
                    <p className="title">Login to your Account</p>
                    <span className="subtitle">Get started with our app, just create an account and enjoy the experience.</span>
                </div>
                <br />
                <div className="input_container">
                    <label className="input_label">Email</label>
                    {svg1}
                    <input placeholder="name@mail.com" name="email" type="text" className="input_field" value={user.email} onChange={handelInput} />
                </div>
                <div className="input_container">
                    <label className="input_label">Password</label>
                    {svg2}
                    <input placeholder="Password" name="password" type="password" className="input_field" value={user.password} onChange={handelInput} />
                </div>
                <button title="Sign In" type="submit" className="sign-in_btn">
                    <span>Sign In</span>
                </button>

                <div className="separator">
                    <hr className="line" />
                    <span>Or</span>
                    <hr className="line" />
                </div>
                <button title="Sign In" type="submit" className="sign-in_ggl">
                    {svg3}
                    <span>Sign In with Google</span>
                </button>
                <button title="Sign In" type="submit" className="sign-in_apl">
                    {svg4}
                    <span>Sign In with Apple</span>
                </button>
                <p className="note">Terms of use &amp; Conditions</p>
            </form>
        </div>
    );
};

export default SigninAdmin;
