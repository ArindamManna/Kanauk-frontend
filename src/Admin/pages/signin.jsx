import React from "react";
import "../sass/style.css";
import { svg1, svg2, svg3, svg4 } from "../images/staticData";

const SigninAdmin = () => {
    return (
        <div classNameName="admin" style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <form className="form_container">
                <div className="logo_container"></div>
                <div className="title_container">
                    <p className="title">Login to your Account</p>
                    <span className="subtitle">Get started with our app, just create an account and enjoy the experience.</span>
                </div>
                <br />
                <div className="input_container">
                    <label className="input_label" for="email_field">
                        Email
                    </label>
                    {svg1}
                    <input placeholder="name@mail.com" title="Inpit title" name="input-name" type="text" className="input_field" id="email_field" />
                </div>
                <div className="input_container">
                    <label className="input_label" for="password_field">
                        Password
                    </label>
                    {svg2}
                    <input placeholder="Password" title="Inpit title" name="input-name" type="password" className="input_field" id="password_field" />
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
