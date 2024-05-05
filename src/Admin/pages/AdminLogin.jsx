import React, { useEffect, useState } from 'react'
import { ApiHelperFunction } from '../../Api/ApiHelperfunction';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const navigate = useNavigate()
    useEffect(() => {
        let usertoken = localStorage.getItem("usertoken")
        if (usertoken) {
            navigate("../")

        }
    }, [])

    const [formdata, setFormdata] = useState({
        email: "",
        password: ""
    })
    function updateFormdata(e) {
        let { name, value } = e.target;
        setFormdata({
            ...formdata,
            [name]: value
        })
    }
    async function AdminLogin(e) {
        e.preventDefault();
        console.log(formdata);
        let res = await ApiHelperFunction({
            urlPath: "admin/login",
            method: "post",
            formData: formdata
        });
        console.log(res);
        if (res.data) {
            localStorage.setItem("usertoken", res.data.token);
            navigate("../")
        } else {
            alert(res.error.message)
        }
    }

    return (
        <>
            <div className='h-screen w-screen flex items-center justify-center'>

                <div className="adminLogin-box border-2 rounded-md shadow-md p-6 w-80">
                    <h3 className='text-2xl text-center mb-4'>Admin Login</h3>
                    <form onSubmit={(e) => { AdminLogin(e) }}>
                        <div className="form-group mb-3">
                            <label htmlFor="" className='form-label'>Email</label>
                            <input type="text" className='form-control' name='email' onChange={(e) => updateFormdata(e)} />
                            <span className='text-danger'></span>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="" className='form-label'>Password</label>
                            <input type="password" name='password' onChange={(e) => updateFormdata(e)} className='form-control' />
                            <span className='text-danger'></span>
                        </div>
                        <div className='w-full flex justify-end'>

                            <button className='btn btn-primary ml-auto' type='submit'>
                                Login
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}

export default AdminLogin