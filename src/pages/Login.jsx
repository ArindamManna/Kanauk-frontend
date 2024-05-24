import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ApiHelperFunction } from '../Api/ApiHelperfunction';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { updateGlobalState } from '../Redux/GlobalSlice';
import { useDispatch } from 'react-redux';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const [currentTab, setCurrentTab] = useState("login");
    const inhitialFormdata = {
        fname: "",
        lname: "",
        pno: "",
        email: "",
        password: "",
        cpassword: "",
        isTermsChecked: false
    };
    const [formdata, setFormdata] = useState(inhitialFormdata);
    async function signUp(e) {
        e.preventDefault();
        console.log(formdata);

        if (!formdata?.isTermsChecked && currentTab !== "login") {
            alert("Please Accept Terms and Conditions");
            return;
        }
        setLoader(true);
        let res = await ApiHelperFunction({
            urlPath: (currentTab === "login") ? "users/login" : "users/signup",
            method: "post",
            formData: formdata,
        });
        if (res.data) {
            localStorage.setItem("usertoken", res.data.token);

            setLoader(false);

            dispatch(updateGlobalState({
                swalDetails: {
                    isSwalOpen: true,
                    type: "success",
                    title: "Success",
                    text: (currentTab === "login") ? "You Logged In successfully" : "Account Created successfully",
                    okBtnOnclick: () => { navigate("/", { state: res.data }); }
                }
            }))
        } else {
            setLoader(false)
            dispatch(updateGlobalState({
                swalDetails: {
                    isSwalOpen: true,
                    type: "error",
                    title: "Something went wrong",
                    text: res.error.message
                }
            }))
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
            {loader ? <Loader /> : ""}
            <Navbar />
            <section className="Login-page padding-l">
                <div className="left">
                    <div className="head">
                        <div className={`tab-btn  ${currentTab === "login" ? "active" : ""}`} onClick={(e) => { setCurrentTab(prev => (prev === "login" ? "register" : "login")) }} >
                            Sign In
                        </div>
                        <div className={`tab-btn  ${currentTab !== "login" ? "active" : ""}`} onClick={(e) => { setCurrentTab(prev => (prev === "login" ? "register" : "login")) }} >
                            Register
                        </div>

                    </div>
                    {currentTab === "login" ?

                        <form action="" onSubmit={(e) => signUp(e)}>

                            <input type="text" placeholder='Email' onChange={(e) =>
                                updateFormdata({
                                    e,
                                    position: {
                                        name: "email",
                                    },
                                    value: e.target.value,
                                })
                            } />
                            <input type="password" placeholder='Password' onChange={(e) =>
                                updateFormdata({
                                    e,
                                    position: {
                                        name: "password",
                                    },
                                    value: e.target.value,
                                })
                            } />


                            <button className='submit-btn'>
                                Login
                            </button>
                        </form> :
                        <form action="" onSubmit={(e) => signUp(e)}>
                            <input type="text" placeholder='First Name' onChange={(e) =>
                                updateFormdata({
                                    e,
                                    position: {
                                        name: "fname",
                                    },
                                    value: e.target.value,
                                })
                            } />
                            <input type="text" placeholder='Last Name' onChange={(e) =>
                                updateFormdata({
                                    e,
                                    position: {
                                        name: "lname",
                                    },
                                    value: e.target.value,
                                })
                            } />
                            <input type="text" placeholder='Phone No ' onChange={(e) =>
                                updateFormdata({
                                    e,
                                    position: {
                                        name: "pno",
                                    },
                                    value: e.target.value,
                                })
                            } />
                            <input type="text" placeholder='Email' onChange={(e) =>
                                updateFormdata({
                                    e,
                                    position: {
                                        name: "email",
                                    },
                                    value: e.target.value,
                                })
                            } />
                            <input type="password" placeholder='Password' onChange={(e) =>
                                updateFormdata({
                                    e,
                                    position: {
                                        name: "password",
                                    },
                                    value: e.target.value,
                                })
                            } />
                            <input type="password" placeholder='Confirm Password' onChange={(e) =>
                                updateFormdata({
                                    e,
                                    position: {
                                        name: "cpassword",
                                    },
                                    value: e.target.value,
                                })
                            } />

                            <div className='flex gap-3 terms-conditon items-start'>
                                <input type="checkbox" name="" id="" onChange={(e) =>
                                    updateFormdata({
                                        e,
                                        position: {
                                            name: "isTermsChecked",
                                        },
                                        value: e.target.checked,
                                    })
                                } />
                                <p>
                                    Creating account means you're okay with our <a href="#">terms of service</a>, <a href="#">privacy policy</a>, and our default <a href="#">notification settings</a>.
                                </p>

                            </div>
                            <button className='submit-btn'>
                                Create an account
                            </button>
                        </form>

                    }
                    <div className="hr">
                        <div className="or">
                            Or
                        </div>
                    </div>
                    <p className='register-social-para'>
                        Register with social
                    </p>
                    <div className="flex justify-center gap-4 items-center">
                        <button className="social-login-btn">
                            <img src={require("../asset/images/logo/google.png")} alt="" srcset="" />
                            Continue With Google

                        </button>
                        <button className="social-login-btn">
                            <img src={require("../asset/images/logo/facebook.png")} alt="" srcset="" />
                            Continue With Facebook

                        </button>

                    </div>

                </div>
                <div className="right">
                    <div className="pic">
                        <img src={require("../asset/images/loginBanner.png")} alt="" />
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Login