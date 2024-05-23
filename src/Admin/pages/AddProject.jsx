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
import { update } from '../../asset/commonFuntions';


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
            urlPath: project_id ? `admin/project/update/?project_id=${formdata._id}` : `admin/project/add/${formdata.builderId}`,
            method: project_id ? "put" : "post",
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
            <div className="page-name" >
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-4">
                        <h2>
                            <i className="ri-arrow-left-line"></i> Add Project
                        </h2>
                    </div>
                </div>
            </div>
            <div className="card add-new-location mt-2">
                <div className="card-body">
                    <form
                        onSubmit={(e) => {
                            createProject(e);
                        }}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Project Name :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        defaultValue={formdata?.name}
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
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Location :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="location"
                                        defaultValue={formdata?.location?.label}
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
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Price From:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="pricefrom"
                                        defaultValue={formdata?.price?.from}
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
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Price To:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="priceto"
                                        defaultValue={formdata?.price?.to}
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
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Listing status:</label>
                                    {/* <input type="text" className="form-control" name='listingStatus' onChange={(e) => updateFormdata({
                                        e, position: {
                                            name: "listingStatus",

                                        }, value: e.target.value
                                    })} /> */}
                                    <select
                                        className="form-select"
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
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Choose Builder :</label>
                                    <select
                                        className="form-select"
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
                                        <option >Open this select menu</option>
                                        {builderList?.map((item, index) => {
                                            return (
                                                <option value={item._id} key={index} selected={formdata?.builderId == item._id}>
                                                    {item?.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label">Description:</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        name="priceto"
                                        defaultValue={formdata?.description}
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
                                    <label className="form-label">Tags:</label>
                                    <Select
                                        className=""
                                        isMulti={toBeRequired}
                                        // defaultInputValue={formdata?.tags}
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
                                    {/* <label className="form-label">upload Images one by one :</label> */}
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
                                        <button type="button" className="btn black-btn" onClick={(e) => { addImage() }}>Add Image</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-end flex gap-2 justify-end">
                            <button type="submit" className="btn grey-primary">
                                Cancle
                            </button>
                            <button type="submit" className="btn black-btn">
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
