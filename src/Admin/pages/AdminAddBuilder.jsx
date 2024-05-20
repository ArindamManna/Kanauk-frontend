import React, { useState } from 'react'
import AdminLayout from '../components/AdminLayout'
import { ApiHelperFunction } from '../../Api/ApiHelperfunction';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import Upload from "../../components/upload";

function AdminAddBuilder() {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false)
    const [formdata, setFormdata] = useState({
        name: "",
        phone: "",
        email: "",
        location: {
            label: ""
        },
        image: {
            url: ""
        }
    })

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
    async function createBuilder(e) {
        e.preventDefault();
        console.log(formdata);
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: "admin/builder/add",
            method: "post",
            formData: formdata
        });
        if (res.data) {
            alert("Builder Created Successfully");
            navigate("/admin/builder")
            setLoader(false)
        } else {
            alert(res.error.message)
            setLoader(false)
        }
    }
    return (
        <AdminLayout>
            {loader ? <Loader /> : ""}
            <div className="page-name">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-4">
                        <h2><i className="ri-arrow-left-line"></i> Add Bilder</h2>
                    </div>

                </div>
            </div>
            <div className="card add-new-location mt-2">
                <div className="card-body">
                    <form onSubmit={(e) => createBuilder(e)}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Builder Name :</label>
                                    <input type="text" className="form-control" name='name' onChange={(e) => {
                                        updateFormdata({
                                            e,
                                            position: {
                                                name: "name",
                                            },
                                            value: e.target.value,
                                        })
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Location :</label>
                                    <input type="text" className="form-control" name='location' onChange={(e) => {
                                        updateFormdata({
                                            e,
                                            position: {
                                                name: "location",
                                            },
                                            value: e.target.value,
                                        })
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Email:</label>
                                    <input type="text" className="form-control" name='email' onChange={(e) => {
                                        updateFormdata({
                                            e,
                                            position: {
                                                name: "email",
                                            },
                                            value: e.target.value,
                                        })
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Mobile No:</label>
                                    <input type="text" className="form-control" name="phone" onChange={(e) => {
                                        updateFormdata({
                                            e,
                                            position: {
                                                name: "phone",
                                            },
                                            value: e.target.value,
                                        })
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label className="form-label">upload Images one by one :</label>
                                    {formdata?.image?.url == "" ? <Upload images={formdata?.image} updateFormdata={(value) => {
                                        console.log(value)
                                        updateFormdata({
                                            position: {
                                                name: "image",
                                                sub: {
                                                    name: "url"


                                                }
                                            },
                                            value
                                        })
                                    }} /> :
                                        <img src={formdata?.image?.url} alt="" />
                                    }

                                </div>
                            </div>


                        </div>



                        <div className="flex gap-2 justify-end text-end">
                            <button type="button" className="btn grey-primary">Cancle</button>
                            <button type="submit" className="btn black-btn">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminAddBuilder