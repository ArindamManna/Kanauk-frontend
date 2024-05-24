import React, { useEffect, useState } from 'react'
import AdminLayout from '../components/AdminLayout'
import { ApiHelperFunction } from '../../Api/ApiHelperfunction';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import Upload from "../../components/upload";
import { update } from '../../asset/commonFuntions';
import { updateGlobalState } from '../../Redux/GlobalSlice';
import { useDispatch } from 'react-redux';

function AdminAddBuilder() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();
    let builderId = searchParams.get("builderId")
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
    useEffect(() => {
        if (builderId) {
            setFormdata(prev => ({ ...prev, ...location?.state }))
        }
    }, [location])

    function updateFormdata({ e, position, value }) {
        let result = update({ position, value, form: formdata });
        setFormdata(prev => ({ ...prev, ...result }));
    }


    async function createBuilder(e) {
        e.preventDefault();
        console.log(formdata);
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: builderId ? `admin/builder/update/${builderId}` : "admin/builder/add",
            method: builderId ? "put" : "post",
            formData: formdata
        });
        if (res.data) {


            setLoader(false);
            dispatch(updateGlobalState({
                swalDetails: {
                    isSwalOpen: true,
                    type: "success",
                    title: "Success",
                    text: builderId ? "Builder updated successfully" : "Builder Created successfully",
                    okBtnOnclick: () => { navigate("/admin/builder"); }
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
                                    <input type="text" className="form-control" name='name'
                                        value={formdata?.name}
                                        onChange={(e) => {
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
                                    <input type="text" className="form-control" name='location'
                                        value={formdata?.location?.label}
                                        onChange={(e) => {
                                            updateFormdata({
                                                e,
                                                position: {
                                                    name: "location",
                                                    sub: {
                                                        name: "label"
                                                    }
                                                },
                                                value: e.target.value,
                                            })
                                        }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Email:</label>
                                    <input type="text" className="form-control" name='email'
                                        value={formdata?.email}
                                        onChange={(e) => {
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
                                    <input type="text" className="form-control" name="phone"
                                        value={formdata?.phone}
                                        onChange={(e) => {
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

                                    <Upload
                                        currentImage={formdata?.image}
                                        updateFormdata={(value) => {
                                            updateFormdata({
                                                position: {
                                                    name: "image",
                                                    sub: {
                                                        name: "url",
                                                    },
                                                },
                                                value,
                                            });
                                        }}
                                    // deleteImage={() => {
                                    //     add_remove_elem_fromdata({
                                    //         position: {
                                    //             name: "image",
                                    //         },
                                    //         doAdd: false,
                                    //     })
                                    // }}
                                    />

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