import React, { useEffect, useState } from 'react'
import AdminLayout from '../components/AdminLayout'
import { ApiHelperFunction } from '../../Api/ApiHelperfunction';
import Loader from '../../components/Loader';
import { toFormData } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Select from "react-select";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function AddProperties() {
    let location = useLocation()
    // console.log(location);
    const navigate = useNavigate()
    const [builderList, setBuilderList] = useState([])
    const [loader, setLoader] = useState(false)
    const inhitialFormdata = {
        properties: [
            {
                name: "",
                location: {
                    url: ""
                },
                price: {
                    from: "",
                    to: "",
                },
                listing_status: ""
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
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: `admin/property/add/${location.state._id}`,
            method: "post",
            formData: formdata.properties
        });
        if (res.data) {
            alert("Project Created Successfully");
            navigate("/admin/project")
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

    function deleteProperty(index) {
        setFormdata(prev => ({
            ...prev,
            properties: prev?.properties?.filter((item, i) => i != index)
        }))
    }
    function addProperty() {
        setFormdata(prev => ({
            ...prev,
            properties: [...prev.properties, inhitialFormdata?.properties[0]]
        }))
    }
    return (
        <AdminLayout>
            {loader ? <Loader /> : ""}
            <div class="page-name">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-4">
                        <h2><i class="ri-arrow-left-line"></i> Add Properties</h2>
                    </div>

                </div>
            </div>
            <div class="card add-new-location mt-2">
                <div class="card-body">
                    <form onSubmit={(e) => { createProject(e) }}>


                        {formdata?.properties.map((item, index, arr) => {
                            return <div class="row border border-gray-400 rounded-md pt-2 mb-4" key={index}>
                                <div className="flex justify-between">
                                    <h4>Propery {index + 1}</h4>
                                    <div className="right flex gap-2">
                                        {arr.length == 1 ? "" : <button type="submit" class="btn grey-primary" onClick={(e) => deleteProperty(index)}>delete</button>}

                                        {arr.length - 1 == index ? <button type="submit" class="btn black-btn" onClick={(e) => { addProperty(e) }}>Add New</button> : ""}

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label"> Name :</label>
                                        <input type="text" class="form-control" name='name'
                                            onChange={(e) => updateFormdata({
                                                e,
                                                position: {
                                                    name: "properties",
                                                    index,
                                                    sub: {
                                                        name: "name"
                                                    }
                                                },
                                                value: e.target.value
                                            })}

                                        />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Location :</label>
                                        <input type="text" class="form-control" name='location'

                                            onChange={(e) => updateFormdata({
                                                e,
                                                position: {
                                                    name: "properties",
                                                    index,
                                                    sub: {
                                                        name: "location",
                                                        sub: {
                                                            name: "label"
                                                        }
                                                    }
                                                },
                                                value: e.target.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Price From:</label>
                                        <input type="text" class="form-control" name='pricefrom'

                                            onChange={(e) => updateFormdata({
                                                e,
                                                position: {
                                                    name: "properties",
                                                    index,
                                                    sub: {
                                                        name: "price",
                                                        sub: {
                                                            name: "from",
                                                        }
                                                    }
                                                },
                                                value: e.target.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Price To:</label>
                                        <input type="text" class="form-control" name='priceto'

                                            onChange={(e) => updateFormdata({
                                                e,
                                                position: {
                                                    name: "properties",
                                                    index,
                                                    sub: {
                                                        name: "price",
                                                        sub: {
                                                            name: "to",
                                                        }
                                                    }
                                                },
                                                value: e.target.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Listing Status :</label>
                                        <select
                                            class="form-select"
                                            aria-label="Default select example"
                                            name="listingStatus"
                                            onChange={(e) =>
                                                updateFormdata({
                                                    e,
                                                    position: {
                                                        name: "properties",
                                                        index,
                                                        sub: {
                                                            name: "listing_status",

                                                        }
                                                    },
                                                    value: e.target.value
                                                })
                                            }>
                                            <option selected>Open this select menu</option>
                                            <option value="Selling">Selling</option>
                                            <option value="Under Construction">Under Construction</option>
                                            <option value="Pre Book">Pre Book</option>
                                        </select>
                                        {/* <input type="text" class="form-control" name='listing_status'
                                            onChange={(e) =>} /> */}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Description :</label>
                                        <input type="text" class="form-control" name='description' onChange={(e) => updateFormdata({
                                            e,
                                            position: {
                                                name: "properties",
                                                index,
                                                sub: {
                                                    name: "description",

                                                }
                                            },
                                            value: e.target.value
                                        })} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label class="form-label">Tags:</label>
                                        <Select
                                            className=""
                                            isMulti={toBeRequired}
                                            options={[
                                                { value: "featured", label: "Featured" },
                                                { value: "assignment_sales", label: "Assignment Sales" },
                                                { value: "most_viewed", label: "Most Viewed" },
                                            ]}
                                            onChange={(value) => {
                                                updateFormdata({
                                                    position: {
                                                        name: "properties",
                                                        index,
                                                        sub: {
                                                            name: "tags",

                                                        }
                                                    },
                                                    value,
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        })}

                        <div class="text-end flex gap-2 justify-end">
                            <button type="submit" class="btn grey-primary">Cancle</button>
                            <button type="submit" class="btn black-btn">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AddProperties