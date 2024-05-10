import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ApiHelperFunction } from "../Api/ApiHelperfunction";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { contries } from "../middleware/contries";

const Auth = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const inhitialFormdata = {
        fname: "",
        lname: "",
        ccode: "",
        pno: "",
        email: "",
        password: "",
        cpassword: "",
    };
    const [formdata, setFormdata] = useState(inhitialFormdata);
    async function createUser(e) {
        e.preventDefault();
        console.log(formdata);
        setLoader(true);
        let res = await ApiHelperFunction({
            urlPath: "users/signup",
            method: "post",
            formData: formdata,
        });
        if (res.data) {
            // localStorage.setItem("usertoken", res.data.token);
            alert("User Created Successfully");
            navigate("/users", { state: res.data });
            setLoader(false);
        } else {
            alert(res.error.message);
            setLoader(false);
        }
    }
    function updateFormdata({ e, position, value }) {
        let result = update({ position, value, form: formdata });
        setFormdata(result);
    }
    function update({ e, position, value, form }) {
        // let { name, value } = e.target;
        let { name, index } = position;
        if (position?.sub == undefined) {
            form[name] = value;
        } else {
            if (index !== undefined) {
                let result = update({ position: position.sub, value, form: form[name][index] });
                form[name][index] = result;
            } else {
                let result = update({ position: position.sub, value, form: form[name] });
                form[name] = result;
            }
        }
        return form;
    }
    return (
        <>
            <Navbar />
            {loader ? <Loader /> : ""}
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
                    <form
                        className="formContainer"
                        onSubmit={(e) => {
                            createUser(e);
                        }}>
                        <input
                            placeholder="Frist Name"
                            name="fname"
                            type="text"
                            className="inputField"
                            onChange={(e) =>
                                updateFormdata({
                                    e,
                                    position: {
                                        name: "fname",
                                    },
                                    value: e.target.value,
                                })
                            }
                        />
                        <input
                            placeholder="Last Name"
                            name="lname"
                            type="text"
                            className="inputField"
                            onChange={(e) =>
                                updateFormdata({
                                    e,
                                    position: {
                                        name: "lname",
                                    },
                                    value: e.target.value,
                                })
                            }
                        />
                        <select className="contryCode">
                            {contries.map((country, i) => (
                                <option value={country.code} key={i}>
                                    {country.name}({country.code})
                                </option>
                            ))}
                            <option value="+91" selected>
                                India(+91)
                            </option>
                        </select>
                        <input
                            placeholder="Pnone Number | "
                            name="pno"
                            type="tel"
                            className="inputField"
                            onChange={(e) =>
                                updateFormdata({
                                    e,
                                    position: {
                                        name: "pno",
                                    },
                                    value: e.target.value,
                                })
                            }
                        />
                        <input
                            placeholder="Email | "
                            name="email"
                            type="email"
                            className="inputField"
                            onChange={(e) =>
                                updateFormdata({
                                    e,
                                    position: {
                                        name: "email",
                                    },
                                    value: e.target.value,
                                })
                            }
                        />
                        <span className="pchecker">6 + Charecter</span>
                        <input
                            placeholder="Password"
                            name="password"
                            type="password"
                            className="inputField"
                            onChange={(e) =>
                                updateFormdata({
                                    e,
                                    position: {
                                        name: "password",
                                    },
                                    value: e.target.value,
                                })
                            }
                        />
                        <input
                            placeholder="Confirm Password"
                            name="cpassword"
                            type="password"
                            className="inputField"
                            onChange={(e) =>
                                updateFormdata({
                                    e,
                                    position: {
                                        name: "cpassword",
                                    },
                                    value: e.target.value,
                                })
                            }
                        />
                        <div className="tcchecker">
                            <input name="" type="checkbox" className="" />
                            <p>
                                Creating account means you’re okay with our<span> terms of service, privacy policy</span>, and our default <span>notification settings.</span>
                            </p>
                        </div>
                        <button type="submit" className="btn">
                            Create an account
                        </button>
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
