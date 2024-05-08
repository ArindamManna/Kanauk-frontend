import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Auth = () => {
    const handelSubmit = (e) => {};
    return (
        <>
            <Navbar />
            <div className="authentication">
                <div className="left">
                    <div className="head">
                        <div className="content">
                            <div className="title">Sign In</div>
                            <div className="border"></div>
                        </div>
                        <div className="content">
                            <div className="title">Register</div>
                            <div className="border"></div>
                        </div>
                    </div>
                    <form className="formContainer" handelSubmit={handelSubmit}>
                        <input placeholder="Frist Name" name="fname" type="text" className="inputField" />
                        <input placeholder="Last Name" name="lname" type="text" className="inputField" />
                        <select className="contryCode">
                            <option value="+91">+91</option>
                            <option value="+44">+44</option>
                        </select>
                        <input placeholder="Pnone Number | " name="pno" type="tel" className="inputField" />
                        <input placeholder="Email | " name="email" type="email" className="inputField" />
                        <span className="pchecker">6 + Charecter</span>
                        <input placeholder="Password" name="password" type="password" className="inputField" />
                        <input placeholder="Confirm Password" name="cpassword" type="password" className="inputField" />
                        <div className="tcchecker">
                            <input name="" type="checkbox" className="" />
                            <p>
                                Creating account means you’re okay with our<span> terms of service, privacy policy</span>, and our default <span>notification settings.</span>
                            </p>
                        </div>
                        <button className="btn">Create an account</button>
                        <div className="orborder">Or</div>
                    </form>
                </div>
                <div className="right">
                    <img src={require("../asset/images/auth.png")} alt="" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Auth;
