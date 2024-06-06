import React, { useEffect, useState } from 'react'
import AdminLayout from '../components/AdminLayout'
import { ApiHelperFunction } from '../../Api/ApiHelperfunction';
import Loader from '../../components/Loader';
import { toFormData } from 'axios';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Select from "react-select";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import { add_remove_elem_fromdata_recursion, update } from '../../asset/commonFuntions';
import { Selling_ststus_list, highlights_type_list, listning_ststus_list, propertieType_list } from '../../asset/staticLists';
import Upload from '../../components/upload';
import { updateGlobalState } from '../../Redux/GlobalSlice';
import { useDispatch } from 'react-redux';

function AddProperties() {
    let location = useLocation()
    console.log(location, "location");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    let project_id = searchParams.get("project_id")
    const [builderList, setBuilderList] = useState([])
    const [loader, setLoader] = useState(false)
    const inhitialFormdata = {
        properties: [
            {
                name: "",
                location: {
                    url: "",
                    label: "",
                    lat: "",
                    lng: ""
                },
                price: {
                    from: "",
                    to: "",
                },
                listing_status: "",
                highlights: [
                    {
                        label: "",
                        quantity: "",
                        type: ""
                    }
                ],
                details: {
                    propertieType: "",
                    ownership: {
                        ownerName: ""
                    },


                },
                images: [
                    {
                        url: "",
                    },
                ],
            }
        ]
    };
    const [formdata, setFormdata] = useState(inhitialFormdata)
    // console.log(formdata, "formdata");
    useEffect(() => {
        // fetchBuilderlist()
        if (project_id) {
            setFormdata(prev => ({ ...prev, ...location?.state }))

        }
    }, [])
    async function createProperties(e) {
        e.preventDefault();
        setLoader(true)
        let res = await ApiHelperFunction({
            // urlPath: `admin/property/add/${location.state._id}`,
            urlPath: project_id ? `admin/property/update/?project_id=${location.state._id}` : `admin/property/add/${location.state._id}`,
            method: project_id ? "put" : "post",
            formData: formdata.properties
        });
        if (res.data) {
            setLoader(false)
            dispatch(updateGlobalState({
                swalDetails: {
                    isSwalOpen: true,
                    type: "success",
                    title: "Success",
                    text: project_id ? "Properties updated successfully" : "Properties Created successfully",
                    okBtnOnclick: () => {
                        navigate("/admin/project")
                    }
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
        let result = update({ position, value, form: formdata })
        setFormdata(prev => ({ ...prev, ...result }));

    }





    function add_remove_elem_fromdata({ position, doAdd, indexToremove }) {
        // debugger
        let result = add_remove_elem_fromdata_recursion({ position, form: formdata, doAdd, indexToremove, inhitialFormdata });
        setFormdata(prev => ({ ...prev, ...result }));
    }
    return (
        <AdminLayout>
            {loader ? <Loader /> : ""}
            <div className="page-name">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-4">
                        <h2><i className="ri-arrow-left-line"></i> Add Properties</h2>
                    </div>

                </div>
            </div>
            <div className="card add-new-location mt-2">
                <div className="card-body">
                    <form onSubmit={(e) => { createProperties(e) }}>
                        {formdata?.properties?.length == 0 ? <button type="submit" className="btn black-btn" onClick={(e) => {
                            add_remove_elem_fromdata({
                                position: {
                                    name: "properties",
                                },
                                doAdd: true
                            })
                        }}>Add Property</button> : ""}


                        {formdata?.properties.map((item, index, arr) => {
                            return <div className={`row border border-gray-400 rounded-md pt-2 mb-4 ${index % 2 == 0 ? "bg-cyan-100" : "bg-yellow-100"} `} key={index}>
                                <div className="flex justify-between">
                                    <h4>Propery {index + 1}</h4>
                                    <div className="right flex gap-2">
                                        {arr.length == 1 ? "" : <button type="button" className="btn grey-primary" onClick={(e) => {
                                            add_remove_elem_fromdata({
                                                position: {
                                                    name: "properties",
                                                },
                                                indexToremove: index,
                                                doAdd: false
                                            })
                                        }}>delete</button>}

                                        {/* {arr.length - 1 == index ? <button type="button" className="btn black-btn" onClick={(e) => {
                                            add_remove_elem_fromdata({
                                                position: {
                                                    name: "properties",
                                                },
                                                doAdd: true
                                            })
                                        }}>Add Property</button> : ""} */}

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label"> Name :</label>
                                        <input type="text" className="form-control" name='name'
                                            value={item?.name}
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
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Address :</label>
                                        <input type="text" className="form-control" name='location'
                                            value={item?.location?.label}
                                            // value={item?.location?.label}
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
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Location Url :</label>
                                        <input type="text" className="form-control" name='location'
                                            value={item?.location?.url}
                                            // value={item?.location?.label}
                                            onChange={(e) => updateFormdata({
                                                e,
                                                position: {
                                                    name: "properties",
                                                    index,
                                                    sub: {
                                                        name: "location",
                                                        sub: {
                                                            name: "url"
                                                        }
                                                    }
                                                },
                                                value: e.target.value
                                            })}
                                        />
                                    </div>
                                </div>
                                {/* <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Location Latitude :</label>
                                        <input type="text" className="form-control" name='location'
                                            value={item?.location?.lat}
                                            // value={item?.location?.label}
                                            onChange={(e) => updateFormdata({
                                                e,
                                                position: {
                                                    name: "properties",
                                                    index,
                                                    sub: {
                                                        name: "location",
                                                        sub: {
                                                            name: "lat"
                                                        }
                                                    }
                                                },
                                                value: e.target.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Location Longtitude :</label>
                                        <input type="text" className="form-control" name='location'
                                            value={item?.location?.lng}
                                            // value={item?.location?.label}
                                            onChange={(e) => updateFormdata({
                                                e,
                                                position: {
                                                    name: "properties",
                                                    index,
                                                    sub: {
                                                        name: "location",
                                                        sub: {
                                                            name: "lng"
                                                        }
                                                    }
                                                },
                                                value: e.target.value
                                            })}
                                        />
                                    </div>
                                </div> */}
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Price From:</label>
                                        <input type="text" className="form-control" name='pricefrom'
                                            value={item?.price?.from}
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
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Price To:</label>
                                        <input type="text" className="form-control" name='priceto'
                                            value={item?.price?.to}
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
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Listing Status :</label>
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            name="listingStatus"
                                            value={item?.listing_status}
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
                                            {listning_ststus_list?.map((option, i) => {
                                                return <option value={option.value} key={i} selected={option.value == item?.listing_status}>{option.label}</option>
                                            })}
                                        </select>
                                        {/* <input type="text" className="form-control" name='listing_status'
                                            onChange={(e) =>} /> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Selling Status :</label>
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            name="listingStatus"
                                            value={item?.details?.sellingStatus}
                                            onChange={(e) =>
                                                updateFormdata({
                                                    e,
                                                    position: {
                                                        name: "properties",
                                                        index,
                                                        sub: {
                                                            name: "details",
                                                            sub: {
                                                                name: "sellingStatus",
                                                            },

                                                        }
                                                    },
                                                    value: e.target.value
                                                })
                                            }>
                                            <option selected>Open this select menu</option>
                                            {Selling_ststus_list?.map((option, i) => {
                                                return <option value={option.value} key={i} selected={option.value == item?.details?.sellingStatus}>{option.label}</option>
                                            })}
                                        </select>
                                        {/* <input type="text" className="form-control" name='listing_status'
                                            onChange={(e) =>} /> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Description :</label>
                                        <input type="text" className="form-control" name='description' onChange={(e) => updateFormdata({
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
                                        <label className="form-label">Tags:</label>
                                        <Select
                                            className=""
                                            isMulti={toBeRequired}
                                            value={item?.tags}
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



                                <div className="form-group border py-3 mb-3">
                                    <div className="row items-end">
                                        {item?.highlights?.map((item, i, arr) => {
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
                                                                        name: "properties",
                                                                        index,
                                                                        sub: {

                                                                            name: "highlights",
                                                                            index: i,
                                                                            sub: {
                                                                                name: "type",
                                                                            }
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
                                                                        name: "properties",
                                                                        index,
                                                                        sub: {
                                                                            name: "highlights",
                                                                            index: i,
                                                                            sub: {
                                                                                name: "quantity",
                                                                            }
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
                                                                name: "properties",
                                                                index,
                                                                sub: {
                                                                    name: "highlights",
                                                                }
                                                            },
                                                            doAdd: true
                                                        })
                                                    }}>Add New</button> :
                                                        <button type="button" className="btn btn-danger mb-3" onClick={(e) => {
                                                            // addImage()
                                                            add_remove_elem_fromdata({
                                                                position: {
                                                                    name: "properties",
                                                                    index,
                                                                    sub: {
                                                                        name: "highlights",
                                                                    }
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
                                    {/* <h3>Project Details</h3> */}
                                    <div className="row">


                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Propertie Type:</label>
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    name="propertieType"
                                                    onChange={(e) =>
                                                        updateFormdata({
                                                            e,
                                                            position: {
                                                                name: "properties",
                                                                index,
                                                                sub: {
                                                                    name: "details",
                                                                    sub: {
                                                                        name: "propertieType",
                                                                    },
                                                                },
                                                            },
                                                            value: e.target.value,
                                                        })
                                                    }>
                                                    <option >Open this select menu</option>
                                                    {propertieType_list?.map((item, i) => {
                                                        return <option value={item.value} key={i} selected={item.value == formdata?.properties?.[index]?.details?.propertieType}>{item.label}</option>
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

                                                    value={item?.details?.ownership?.ownerName}
                                                    onChange={(e) =>
                                                        updateFormdata({
                                                            e,
                                                            position: {
                                                                name: "properties",
                                                                index,
                                                                sub: {
                                                                    name: "details",
                                                                    sub: {
                                                                        name: "ownership",
                                                                        sub: {
                                                                            name: "ownerName",
                                                                        }
                                                                    },
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


                                <div className="col-12">
                                    <div className="row">
                                        {item?.images?.map((item, i, arr) => {
                                            return <div className="col-md-4" key={i}>
                                                <div className="mb-3">

                                                    <Upload
                                                        currentImage={item}
                                                        updateFormdata={(value) => {
                                                            updateFormdata({
                                                                position: {
                                                                    name: "properties",
                                                                    index,
                                                                    sub: {
                                                                        name: "images",
                                                                        index: i,
                                                                        sub: {
                                                                            name: "url",
                                                                        },
                                                                    },
                                                                },
                                                                value,
                                                            });
                                                        }}
                                                        deleteImage={() => {
                                                            add_remove_elem_fromdata({
                                                                position: {
                                                                    name: "properties",
                                                                    index,
                                                                    sub: {
                                                                        name: "images",
                                                                    },
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
                                                        name: "properties",
                                                        index,
                                                        sub: {
                                                            name: "images",
                                                        },
                                                    },
                                                    doAdd: true
                                                })
                                            }}>Add Image</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}

                        <div className="text-end flex gap-2 justify-end">
                            <button type="button" className=" green-btn" onClick={(e) => {
                                add_remove_elem_fromdata({
                                    position: {
                                        name: "properties",
                                    },
                                    doAdd: true
                                })
                            }}>Add Property</button>
                            <button type="button" className="btn grey-primary">Cancle</button>
                            <button type="submit" className="btn black-btn">  {project_id ? "Update" : "Create"}  </button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AddProperties