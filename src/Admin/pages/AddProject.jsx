import React, { Fragment, useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { ApiHelperFunction } from "../../Api/ApiHelperfunction";
import Loader from "../../components/Loader";
import { toFormData } from "axios";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Upload from "../../components/upload";
import Select from "react-select";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import { Selling_ststus_list, buildingType_list, highlights_type_list, listning_ststus_list } from "../../asset/staticLists";
import { add_remove_elem_fromdata_recursion, update } from '../../asset/commonFuntions';
import { useDispatch } from "react-redux";
import { updateGlobalState } from "../../Redux/GlobalSlice";


function AddProject() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let location = useLocation()
    // console.log(location, "location");
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
        floorPlans: {
            heading: "",
            text: ""
        },
        description: "",
        overview: "",
        details: {
            buildingType: "",
            ownership: {
                ownerName: ""
            },
            sellingStatus: "",
            interiorDesigner: {
                name: ""
            },
            architect: {
                name: ""
            },
            marketingCompany: {
                name: "",
                marketingSummery: ""
            },
            salesCompany: {
                name: ""
            },

        },
        amenitiesList: [
            {
                label: ""
            }
        ],
        highlights: [
            {
                label: "",
                quantity: "",
                type: "condo"
            }
        ],

        features_finises: {
            title: "",
            subTitle: "",
            description: "",
        },

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
            setLoader(false);
            dispatch(updateGlobalState({
                swalDetails: {
                    isSwalOpen: true,
                    type: "success",
                    title: "Success",
                    text: project_id ? "Project updated successfully" : "Project Created successfully",
                    okBtnOnclick: () => { navigate(project_id ? `/admin/addproperties/?project_id=${project_id}` : "/admin/addproperties", { state: formdata }); }
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

    function updateFormdata({ e, position, value }) {
        let result = update({ position, value, form: formdata });
        setFormdata(prev => ({ ...prev, ...result }));
    }

    function add_remove_elem_fromdata({ position, doAdd, indexToremove }) {
        let result = add_remove_elem_fromdata_recursion({ position, form: formdata, doAdd, indexToremove, inhitialFormdata });
        setFormdata(prev => ({ ...prev, ...result }));
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
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Location :</label>
                                    <input
                                        type="text"
                                        className="form-control"
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
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Price From:</label>
                                    <input
                                        type="text"
                                        className="form-control"
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
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Price To:</label>
                                    <input
                                        type="text"
                                        className="form-control"

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
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Floor Plans Heading:</label>
                                    <input
                                        type="text"
                                        className="form-control"

                                        value={formdata?.floorPlans?.heading}
                                        onChange={(e) =>
                                            updateFormdata({
                                                e,
                                                position: {
                                                    name: "floorPlans",
                                                    sub: {
                                                        name: "heading",
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
                                    <label className="form-label">FloorPlans Text:</label>
                                    <textarea
                                        type="text"
                                        className="form-control"

                                        value={formdata?.floorPlans?.text}
                                        onChange={(e) =>
                                            updateFormdata({
                                                e,
                                                position: {
                                                    name: "floorPlans",
                                                    sub: {
                                                        name: "text",
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
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label">Overview:</label>
                                    <textarea
                                        type="text"
                                        className="form-control"

                                        value={formdata?.overview}
                                        onChange={(e) =>
                                            updateFormdata({
                                                e,
                                                position: {
                                                    name: "overview",
                                                },
                                                value: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>















                            <div className="form-group border py-3 mb-3">
                                <div className="row items-end">
                                    {formdata?.highlights?.map((item, i, arr) => {
                                        return <React.Fragment key={i} >

                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label className="form-label">HighLights Type:</label>
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={(e) =>
                                                            updateFormdata({
                                                                e,
                                                                position: {
                                                                    name: "highlights",
                                                                    index: i,
                                                                    sub: {
                                                                        name: "type",
                                                                    }
                                                                },
                                                                value: e.target.value,
                                                            })
                                                        }>
                                                        <option >Open this select menu</option>
                                                        {highlights_type_list?.map((option, i) => {
                                                            return <option value={option.value} key={i} selected={option.value == item?.type}>{option.label}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Quantity:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"

                                                        value={item?.quantity}
                                                        onChange={(e) =>
                                                            updateFormdata({
                                                                e,
                                                                position: {

                                                                    name: "highlights",
                                                                    index: i,
                                                                    sub: {
                                                                        name: "quantity",
                                                                    }

                                                                },
                                                                value: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                {i + 1 === arr.length ? <button type="button" className="btn black-btn mb-3" onClick={(e) => {
                                                    // addImage()
                                                    add_remove_elem_fromdata({
                                                        position: {
                                                            name: "highlights",
                                                        },
                                                        doAdd: true
                                                    })
                                                }}>Add New</button> :
                                                    <button type="button" className="btn btn-danger mb-3" onClick={(e) => {
                                                        // addImage()
                                                        add_remove_elem_fromdata({
                                                            position: {
                                                                name: "highlights",
                                                            },
                                                            indexToremove: i,
                                                            doAdd: false
                                                        })
                                                    }}>Remove</button>
                                                }

                                            </div>
                                        </React.Fragment>
                                    })}
                                </div>

                            </div>
                            <div className="form-group border py-3 mb-3">
                                <div className="row items-end">
                                    {formdata?.amenitiesList?.map((item, i, arr) => {
                                        return <React.Fragment key={i} >


                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Amenities Point {i + 1}:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"

                                                        value={item?.label}
                                                        onChange={(e) =>
                                                            updateFormdata({
                                                                e,
                                                                position: {

                                                                    name: "amenitiesList",
                                                                    index: i,
                                                                    sub: {
                                                                        name: "label",
                                                                    }

                                                                },
                                                                value: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                {i + 1 === arr.length ? <button type="button" className="btn black-btn mb-3" onClick={(e) => {
                                                    // addImage()
                                                    add_remove_elem_fromdata({
                                                        position: {
                                                            name: "amenitiesList",
                                                        },
                                                        doAdd: true
                                                    })
                                                }}>Add New</button> :
                                                    <button type="button" className="btn btn-danger mb-3" onClick={(e) => {
                                                        // addImage()
                                                        add_remove_elem_fromdata({
                                                            position: {
                                                                name: "amenitiesList",
                                                            },
                                                            indexToremove: i,
                                                            doAdd: false
                                                        })
                                                    }}>Remove</button>
                                                }

                                            </div>
                                        </React.Fragment>
                                    })}
                                </div>

                            </div>




                            {/*  */}
                            <div className="form-group border py-3 mb-3">


                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Features Finishes Subtitle:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formdata?.features_finises?.subTitle}
                                            onChange={(e) =>
                                                updateFormdata({
                                                    e,
                                                    position: {
                                                        name: "features_finises",
                                                        sub: {
                                                            name: "subTitle",
                                                        },
                                                    },
                                                    value: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Features Finishes Description:</label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            value={formdata?.features_finises?.description}
                                            onChange={(e) =>
                                                updateFormdata({
                                                    e,
                                                    position: {
                                                        name: "features_finises",
                                                        sub: {
                                                            name: "description",
                                                        },
                                                    },
                                                    value: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* small details details */}

                            <div className="form-group border py-3 mb-3">
                                {/* <h3>Project Details</h3> */}
                                <div className="row">


                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Building Type:</label>
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                name="buildingType"
                                                onChange={(e) =>
                                                    updateFormdata({
                                                        e,
                                                        position: {
                                                            name: "details",
                                                            sub: {
                                                                name: "buildingType",
                                                            },
                                                        },
                                                        value: e.target.value,
                                                    })
                                                }>
                                                <option >Open this select menu</option>
                                                {buildingType_list?.map((item, i) => {
                                                    return <option value={item.value} key={i} selected={item.value == formdata?.details?.buildingType}>{item.label}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Selling status:</label>
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                name="sellingStatus"
                                                onChange={(e) =>
                                                    updateFormdata({
                                                        e,
                                                        position: {
                                                            name: "details",
                                                            sub: {
                                                                name: "sellingStatus",
                                                            },
                                                        },
                                                        value: e.target.value,
                                                    })
                                                }>
                                                <option >Open this select menu</option>
                                                {Selling_ststus_list?.map((item, i) => {
                                                    return <option value={item.value} key={i} selected={item.value == formdata?.details?.sellingStatus}>{item.label}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Owner Name:</label>
                                            <input
                                                type="text"
                                                className="form-control"

                                                value={formdata?.details?.ownership?.ownerName}
                                                onChange={(e) =>
                                                    updateFormdata({
                                                        e,
                                                        position: {
                                                            name: "details",
                                                            sub: {
                                                                name: "ownership",
                                                                sub: {
                                                                    name: "ownerName",
                                                                }
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
                                            <label className="form-label">Interior Designer:</label>
                                            <input
                                                type="text"
                                                className="form-control"

                                                value={formdata?.details?.interiorDesigner?.name}
                                                onChange={(e) =>
                                                    updateFormdata({
                                                        e,
                                                        position: {
                                                            name: "details",
                                                            sub: {
                                                                name: "interiorDesigner",
                                                                sub: {
                                                                    name: "name",
                                                                }
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
                                            <label className="form-label">Architect:</label>
                                            <input
                                                type="text"
                                                className="form-control"

                                                value={formdata?.details?.architect?.name}
                                                onChange={(e) =>
                                                    updateFormdata({
                                                        e,
                                                        position: {
                                                            name: "details",
                                                            sub: {
                                                                name: "architect",
                                                                sub: {
                                                                    name: "name",
                                                                }
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
                                            <label className="form-label">Marketing Company Name:</label>
                                            <input
                                                type="text"
                                                className="form-control"

                                                value={formdata?.details?.marketingCompany?.name}
                                                onChange={(e) =>
                                                    updateFormdata({
                                                        e,
                                                        position: {
                                                            name: "details",
                                                            sub: {
                                                                name: "marketingCompany",
                                                                sub: {
                                                                    name: "name",
                                                                }
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
                                            <label className="form-label">Marketing Summery:</label>
                                            <textarea
                                                type="text"
                                                className="form-control"

                                                value={formdata?.details?.marketingCompany?.marketingSummery}
                                                onChange={(e) =>
                                                    updateFormdata({
                                                        e,
                                                        position: {
                                                            name: "details",
                                                            sub: {
                                                                name: "marketingCompany",
                                                                sub: {
                                                                    name: "marketingSummery",
                                                                }
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
                                            <label className="form-label">Sales Company:</label>
                                            <input
                                                type="text"
                                                className="form-control"

                                                value={formdata?.details?.salesCompany?.name}
                                                onChange={(e) =>
                                                    updateFormdata({
                                                        e,
                                                        position: {
                                                            name: "details",
                                                            sub: {
                                                                name: "salesCompany",
                                                                sub: {
                                                                    name: "name",
                                                                }
                                                            },
                                                        },
                                                        value: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Tags:</label>
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
                                    {formdata.images.map((item, i, arr) => {
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
                                                    deleteImage={() => {
                                                        add_remove_elem_fromdata({
                                                            position: {
                                                                name: "images",
                                                            },
                                                            doAdd: false,
                                                            indexToremove: i
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    })}

                                    <div className="col-auto">
                                        <button type="button" className="btn black-btn" onClick={(e) => {
                                            // addImage()
                                            add_remove_elem_fromdata({
                                                position: {
                                                    name: "images",
                                                },
                                                doAdd: true
                                            })
                                        }}>Add Image</button>
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
            </div >
        </AdminLayout >
    );
}

export default AddProject;
