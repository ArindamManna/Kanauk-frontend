import React, { Fragment, useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { ApiHelperFunction } from "../../Api/ApiHelperfunction";
import Loader from "../../components/Loader";
import { toFormData } from "axios";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Upload from "../../components/upload";
import Select from "react-select";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import { listning_ststus_list } from "../../asset/staticLists";

function AddProject() {
    const navigate = useNavigate();
    let location = useLocation()
    console.log(location, "location");
    const [searchParams, setSearchParams] = useSearchParams();
    let project_id = searchParams.get("project_id")
    const [builderList, setBuilderList] = useState([]);
    const [loader, setLoader] = useState(false);
    const inhitialFormdata = {
        name: "",
        location: {
            url: "",
        },
        price: {
            from: "",
            to: "",
        },
        images: [
            {
                url: "",
            },
        ],
    };
    const [formdata, setFormdata] = useState(inhitialFormdata);
    async function fetchBuilderlist(e) {
        // e.preventDefault();
        setLoader(true);
        let res = await ApiHelperFunction({
            urlPath: "users/builder/all",
            method: "get",
        });
        //console.log(res);
        if (res.data) {
            setBuilderList(res.data);
            setLoader(false);
        } else {
            alert(res.error.message);
            setLoader(false);
        }
    }

    useEffect(() => {
        if (project_id) {
            setFormdata(location?.state)
        }
    }, [location])
    useEffect(() => {
        fetchBuilderlist();
    }, []);
    async function createProject(e) {
        e.preventDefault();
        console.log(formdata);
        setLoader(true);
        let res = await ApiHelperFunction({
            // urlPath: `admin/project/add/${formdata.builderId}`,
            urlPath: `admin/project/update/?project_id=${formdata._id}&builderId=${formdata.builderId}`,
            method: "post",
            formData: formdata,
        });
        if (res.data) {
            alert("Project Created Successfully");
            navigate("/admin/addproperties", { state: res.data });
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
    function deleteImage(index) {
        setFormdata(prev => ({
            ...prev,
            images: prev?.images?.filter((item, i) => i != index)
        }))
    }
    function addImage() {
        setFormdata(prev => ({
            ...prev,
            images: [...prev.images, inhitialFormdata?.images[0]]
        }))
    }
    return (
        <AdminLayout>
            {loader ? <Loader /> : ""}
            <div class="page-name">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-4">
                        <h2>
                            <i class="ri-arrow-left-line"></i> Add Project
                        </h2>
                    </div>
                </div>
            </div>
            <div class="card add-new-location mt-2">
                <div class="card-body">
                    <form
                        onSubmit={(e) => {
                            createProject(e);
                        }}>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Project Name :</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="name"
                                        value={formdata?.name}
                                        onChange={(e) =>
                                            updateFormdata({
                                                e,
                                                position: {
                                                    name: "name",
                                                },
                                                value: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Location :</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="location"
                                        value={formdata?.location?.label}
                                        onChange={(e) =>
                                            updateFormdata({
                                                e,
                                                position: {
                                                    name: "location",
                                                    sub: {
                                                        name: "label",
                                                    },
                                                },
                                                value: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Price From:</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="pricefrom"
                                        value={formdata?.price?.from}
                                        onChange={(e) =>
                                            updateFormdata({
                                                e,
                                                position: {
                                                    name: "price",
                                                    sub: {
                                                        name: "from",
                                                    },
                                                },
                                                value: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Price To:</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="priceto"
                                        value={formdata?.price?.to}
                                        onChange={(e) =>
                                            updateFormdata({
                                                e,
                                                position: {
                                                    name: "price",
                                                    sub: {
                                                        name: "to",
                                                    },
                                                },
                                                value: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Listing status:</label>
                                    {/* <input type="text" class="form-control" name='listingStatus' onChange={(e) => updateFormdata({
                                        e, position: {
                                            name: "listingStatus",

                                        }, value: e.target.value
                                    })} /> */}
                                    <select
                                        class="form-select"
                                        aria-label="Default select example"
                                        name="listingStatus"
                                        onChange={(e) =>
                                            updateFormdata({
                                                e,
                                                position: {
                                                    name: "listingStatus",
                                                },
                                                value: e.target.value,
                                            })
                                        }>
                                        <option >Open this select menu</option>
                                        {listning_ststus_list?.map((item, i) => {
                                            return <option value={item.value} key={i} selected={item.value == formdata?.listingStatus}>{item.label}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Choose Builder :</label>
                                    <select
                                        class="form-select"
                                        aria-label="Default select example"
                                        name="builderId"
                                        onChange={(e) =>
                                            updateFormdata({
                                                e,
                                                position: {
                                                    name: "builderId",
                                                },
                                                value: e.target.value,
                                            })
                                        }>
                                        <option selected>Open this select menu</option>
                                        {builderList?.map((item, index) => {
                                            return (
                                                <option value={item._id} key={index} defaultChecked={formdata?.builderId == item._id}>
                                                    {item?.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Description:</label>
                                    <textarea
                                        type="text"
                                        class="form-control"
                                        name="priceto"
                                        value={formdata?.description}
                                        onChange={(e) =>
                                            updateFormdata({
                                                e,
                                                position: {
                                                    name: "description",
                                                },
                                                value: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label class="form-label">Tags:</label>
                                    <Select
                                        className=""
                                        isMulti={toBeRequired}
                                        value={formdata?.tags}
                                        options={[
                                            { value: "featured", label: "Featured" },
                                            { value: "assignment_sales", label: "Assignment Sales" },
                                            { value: "most_viewed", label: "Most Viewed" },
                                        ]}
                                        onChange={(value) => {
                                            updateFormdata({
                                                position: {
                                                    name: "tags",
                                                },
                                                value,
                                            });
                                        }}
                                    />
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

                            <div className="col-12">
                                <div className="row">
                                    {formdata?.images?.map((item, i, arr) => {
                                        return <div className="col-md-4" key={i}>
                                            <div className="mb-3">

                                                <Upload
                                                    currentImage={formdata?.images?.[i]}
                                                    updateFormdata={(value) => {
                                                        updateFormdata({
                                                            position: {
                                                                name: "images",
                                                                index: i,
                                                                sub: {
                                                                    name: "url",
                                                                },
                                                            },
                                                            value,
                                                        });
                                                    }}
                                                    deleteImage={() => { deleteImage(i) }}
                                                />
                                            </div>
                                        </div>
                                    })}

                                    <div className="col-auto">
                                        <button type="button" class="btn black-btn" onClick={(e) => { addImage() }}>Add Image</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-end flex gap-2 justify-end">
                            <button type="submit" class="btn grey-primary">
                                Cancle
                            </button>
                            <button type="submit" class="btn black-btn">
                                Save & Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AddProject;
