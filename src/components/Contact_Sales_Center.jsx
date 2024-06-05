import React, { useState } from 'react'
import { MailSolid, phoneIcon, } from '../asset/staticData'

import agents1 from "../asset/images/agents1.png"
import { useDispatch } from 'react-redux';
import { update } from '../asset/commonFuntions';
import { ApiHelperFunction } from '../Api/ApiHelperfunction';
import { updateGlobalState } from '../Redux/GlobalSlice';
import Loader from './Loader';

function Contact_Sales_Center() {
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false)
    const inhitialFormdata = {
        fname: "",
        lname: "",
        pnone: "",
        email: "",
        message: "",


    };
    const [formdata, setFormdata] = useState(inhitialFormdata);


    function updateFormdata({ e, position, value }) {
        let result = update({ position, value, form: formdata });
        setFormdata(prev => ({ ...prev, ...result }));
    }
    async function contactSalesCenter(e) {
        e.preventDefault();
        console.log(formdata);
        setLoader(true);
        let res = await ApiHelperFunction({
            urlPath: "users/contactus",
            method: "post",
            formData: formdata,
        });
        if (res.data) {
            setLoader(false);
            dispatch(updateGlobalState({
                swalDetails: {
                    isSwalOpen: true,
                    type: "success",
                    title: "Success",
                    text: "Request is sent successfully",
                    okBtnOnclick: () => { }
                }
            }))




        } else {
            console.log(res);
            // alert(res.error.message);
            setLoader(false);
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
    return (
        <>
            {loader ? <Loader /> : ""}
            <div className="contact-sales-center">
                <div className="top">
                    <div className="img">
                        <img src={agents1} alt="" />
                    </div>
                    <p className="name hidden">
                        Jhon Trawres
                    </p>
                    <p className="designation">
                        Sales Reprenststive
                    </p>
                    <a href="#" className='view-profile-link'>View Profile</a>
                    <button className='call-now-btn btn'>
                        <span>
                            {phoneIcon}
                        </span>
                        Call Now
                    </button>
                    <button className='msg-btn btn'>
                        <span>
                            {MailSolid}
                        </span>
                        Send A Message
                    </button>
                    <div className='hr bg-white'></div>
                </div>
                <div className="form">
                    <p className="title">
                        Contact sales center
                    </p>
                    <form action="" onSubmit={(e) => { contactSalesCenter(e) }}>
                        <div className="inputBox">
                            <input type="text" placeholder='First Name'

                                onChange={(e) => {
                                    updateFormdata({
                                        position: {

                                            name: "fname",
                                        },
                                        value: e.target.value
                                    })
                                }}
                            />
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder='Last Name'
                                onChange={(e) => {
                                    updateFormdata({
                                        position: {

                                            name: "lname",
                                        },
                                        value: e.target.value
                                    })
                                }} />
                        </div>
                        <div className="inputBox col-span-2">
                            <input type="text" placeholder='Phone Number'
                                onChange={(e) => {
                                    updateFormdata({
                                        position: {

                                            name: "phone",
                                        },
                                        value: e.target.value
                                    })
                                }}

                            />
                        </div>
                        <div className="inputBox col-span-2">
                            <input type="text" placeholder='Email'

                                onChange={(e) => {
                                    updateFormdata({
                                        position: {

                                            name: "email",
                                        },
                                        value: e.target.value
                                    })
                                }}
                            />
                        </div>
                        <div className="inputBox col-span-2">
                            <textarea name="" id="" rows="3" placeholder='Messege...'
                                onChange={(e) => {
                                    updateFormdata({
                                        position: {

                                            name: "message",
                                        },
                                        value: e.target.value
                                    })
                                }}
                            ></textarea>
                        </div>
                        <p className='note-para col-span-2'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <div className='col-span-2 px-10'>

                            <button type='submit' className='req-btn btn '>

                                Request Info
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact_Sales_Center