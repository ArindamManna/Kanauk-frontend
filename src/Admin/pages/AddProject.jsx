import React, { useEffect, useState } from 'react'
import AdminLayout from '../components/AdminLayout'
import { ApiHelperFunction } from '../../Api/ApiHelperfunction';
import Loader from '../../components/Loader';
import { toFormData } from 'axios';
import { useNavigate } from 'react-router-dom';
import Upload from '../../components/upload';
import Select from 'react-select'
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';

function AddProject() {
    const navigate = useNavigate()
    const [builderList, setBuilderList] = useState([])
    const [loader, setLoader] = useState(false)
    const inhitialFormdata = {
        name: "",
        location: {
            url: ""
        },
        price: {
            from: "",
            to: "",
        },
        images: [
            {
                url: ""
            }
        ]

    };
    const [formdata, setFormdata] = useState(inhitialFormdata)
    async function fetchBuilderlist(e) {
        // e.preventDefault();
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: "users/builder/all",
            method: "get",
        });
        console.log(res);
        if (res.data) {
            setBuilderList(res.data)
            setLoader(false)
        } else {
            alert(res.error.message)
            setLoader(false)
        }
    }
    useEffect(() => {
        fetchBuilderlist()
    }, [])
    async function createProject(e) {
        e.preventDefault();
        console.log(formdata);
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: `admin/project/add/${formdata.builderId}`,
            method: "post",
            formData: formdata
        });
        if (res.data) {
            // localStorage.setItem("usertoken", res.data.token);
            alert("Project Created Successfully");
            navigate("/admin/addproperties", { state: res.data })
            setLoader(false)
        } else {
            alert(res.error.message)
            setLoader(false)
        }
    }



    function updateFormdata({ e, position, value }) {
        let result = update({ position, value, form: formdata })
        setFormdata(result);

    }


    function update({ e, position, value, form }) {
        // let { name, value } = e.target;
        let { name, index } = position;
        if (position?.sub == undefined) {
            form[name] = value;
        } else {
            if (index !== undefined) {
                let result = update({ position: position.sub, value, form: form[name][index] })
                form[name][index] = result;
            } else {

                let result = update({ position: position.sub, value, form: form[name] })
                form[name] = result;
            }
        }
        return form;
    }

    return (
        <AdminLayout>
            {loader ? <Loader /> : ""}
            <div class="page-name">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-4">
                        <h2><i class="ri-arrow-left-line"></i> Add Project</h2>
                    </div>

                </div>
            </div>
            <div class="card add-new-location mt-2">
                <div class="card-body">
                    <form onSubmit={(e) => { createProject(e) }}>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Project Name :</label>
                                    <input type="text" class="form-control" name='name'
                                        onChange={(e) => updateFormdata({
                                            e, position: {
                                                name: "name"
                                            }, value: e.target.value
                                        })} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Location :</label>
                                    <input type="text" class="form-control" name='location' onChange={(e) => updateFormdata({
                                        e, position: {
                                            name: "location",
                                            sub: {
                                                name: "label"
                                            }
                                        }, value: e.target.value
                                    })} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Price From:</label>
                                    <input type="text" class="form-control" name='pricefrom' onChange={(e) => updateFormdata({
                                        e, position: {
                                            name: "price",
                                            sub: {
                                                name: "from"
                                            }
                                        }, value: e.target.value
                                    })} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Price To:</label>
                                    <input type="text" class="form-control" name='priceto' onChange={(e) => updateFormdata({
                                        e, position: {
                                            name: "price",
                                            sub: {
                                                name: "to"
                                            }
                                        }, value: e.target.value
                                    })} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Listing status:</label>
                                    <input type="text" class="form-control" name='listingStatus' onChange={(e) => updateFormdata({
                                        e, position: {
                                            name: "listingStatus",

                                        }, value: e.target.value
                                    })} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Choose Builder :</label>
                                    <select class="form-select" aria-label="Default select example" name='builderId' onChange={(e) => updateFormdata({
                                        e, position: {
                                            name: "builderId",
                                        }, value: e.target.value
                                    })} >
                                        <option selected>Open this select menu</option>
                                        {builderList?.map((item, index) => {
                                            return <option value={item._id} key={index}>{item?.name}</option>
                                        })}

                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Description:</label>
                                    <textarea type="text" class="form-control" name='priceto' onChange={(e) => updateFormdata({
                                        e, position: {
                                            name: "description",
                                        }, value: e.target.value
                                    })} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label class="form-label">Tags:</label>
                                    <Select className="" isMulti={toBeRequired} options={[
                                        { value: 'featured', label: 'Featured' },
                                        { value: 'assignment_sales', label: 'Assignment Sales' },
                                        { value: 'most_viewed', label: 'Most Viewed' }
                                    ]} onChange={(value) => {
                                        updateFormdata({
                                            position: {
                                                name: "tags",
                                            },
                                            value
                                        })
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    {/* <label class="form-label">upload Images one by one :</label> */}
                                    {/* <Select className="" isMulti={toBeRequired} options={[
                                        { value: 'chocolate', label: 'Chocolate' },
                                        { value: 'strawberry', label: 'Strawberry' },
                                        { value: 'vanilla', label: 'Vanilla' }
                                    ]} /> */}
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



                        <div class="text-end flex gap-2 justify-end">
                            <button type="submit" class="btn grey-primary">Cancle</button>
                            <button type="submit" class="btn black-btn">Save & Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AddProject