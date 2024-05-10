import React, { useState } from 'react'
import AdminLayout from '../components/AdminLayout'
import { ApiHelperFunction } from '../../Api/ApiHelperfunction';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';

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
        images: [
            {
                url: ""
            }
        ]
    })
    function updateFormdata(e) {
        let { name, value } = e.target;
        if (name == "location") {
            setFormdata({
                ...formdata,
                [name]: {
                    label: value
                }
            })
        } else {
            setFormdata({
                ...formdata,
                [name]: value
            })
        }

    }
    async function createBuilder(e) {
        e.preventDefault();
        setLoader(true)
        console.log(formdata);
        let res = await ApiHelperFunction({
            urlPath: "admin/builder/add",
            method: "post",
            formData: formdata
        });
        if (res.data) {
            // localStorage.setItem("usertoken", res.data.token);
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
            <div class="page-name">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-4">
                        <h2><i class="ri-arrow-left-line"></i> Add Bilder</h2>
                    </div>

                </div>
            </div>
            <div class="card add-new-location mt-2">
                <div class="card-body">
                    <form onSubmit={(e) => createBuilder(e)}>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Builder Name :</label>
                                    <input type="text" class="form-control" name='name' onChange={(e) => updateFormdata(e)} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Location :</label>
                                    <input type="text" class="form-control" name='location' onChange={(e) => updateFormdata(e)} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Email:</label>
                                    <input type="text" class="form-control" name='email' onChange={(e) => updateFormdata(e)} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Mobile No:</label>
                                    <input type="text" class="form-control" name="phone" onChange={(e) => updateFormdata(e)} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label class="form-label">upload Images one by one :</label>
                                    <Upload images={formdata?.images} updateFormdata={(value) => {
                                        console.log(value)
                                        updateFormdata({
                                            position: {
                                                name: "images",
                                                index: 0,
                                                sub: {
                                                    name: "url"


                                                }
                                            },
                                            value
                                        })
                                    }} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    {formdata?.images?.map((item, i) => {
                                        return <div className="col-md-4" key={i}> <img src={item.url} alt="" /> </div>
                                    })}



                                </div>
                            </div>

                        </div>



                        <div class="flex gap-2 justify-end text-end">
                            <button type="submit" class="btn grey-primary">Cancle</button>
                            <button type="submit" class="btn black-btn">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminAddBuilder