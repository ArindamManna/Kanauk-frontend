import React, { useEffect, useState } from 'react'
import AdminLayout from '../components/AdminLayout'
import { useLocation, useSearchParams } from 'react-router-dom'
import { ApiHelperFunction } from '../../Api/ApiHelperfunction';
import Loader from '../../components/Loader';

function AdminProjectView() {
    let location = useLocation()
    const [projectdetails, setProjectdetails] = useState({})
    const [loader, setLoader] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    let project_id = searchParams.get("project_id")




    useEffect(() => {
        fetchProjectdetails()
    }, []);
    async function fetchProjectdetails() {
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: `users/project/${project_id}`,
            method: "get",
        });
        setLoader(false)
        console.log(res);
        if (res.data) {
            setProjectdetails(res.data)
        }
    }
    return (
        <>
            {loader ? <Loader /> : ""}

            <AdminLayout>
                <div className="customer-details-popup">
                    <div className="popup-content ">
                        <h4>
                            Project Id: {project_id}
                        </h4>
                        {/* <button className="close-popup-btn">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.01562 0.984375L0.984375 8.01562M0.984375 0.984375L8.01562 8.01562" stroke="#18202B"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button> */}
                        <div className="container">

                            <div className=" parent-table">
                                <div className="child-table">
                                    <div className="container">

                                        <div className="row border-gray">
                                            <div className="col-12 child-table-row">
                                                <div>
                                                    <p className="title">
                                                        Project Details
                                                    </p>
                                                </div>
                                            </div>

                                            {/* <!-- table row --> */}
                                            <div className="col-5 child-table-row">
                                                <div>
                                                    Project Name
                                                </div>
                                            </div>
                                            <div className="col-7 child-table-row">
                                                <div>
                                                    {projectdetails.name}

                                                </div>
                                            </div>
                                            {/* <!-- table row end --> */}
                                            {/* <!-- table row --> */}
                                            <div className="col-5 child-table-row">
                                                <div>
                                                    GST No.
                                                </div>
                                            </div>
                                            <div className="col-7 child-table-row">
                                                <div>
                                                    0123456789
                                                </div>
                                            </div>
                                            {/* <!-- table row end --> */}

                                        </div>
                                    </div>
                                </div>
                                <div className="child-table">
                                    <div className="container">

                                        <div className="row border-gray">
                                            <div className="col-12 child-table-row">
                                                <div>
                                                    <p className="title">
                                                        Order Details
                                                    </p>
                                                </div>
                                            </div>

                                            {/* <!-- table row --> */}
                                            <div className="col-5 child-table-row">
                                                <div>
                                                    No. of Orders
                                                </div>
                                            </div>
                                            <div className="col-7 child-table-row">
                                                <div>
                                                    24

                                                </div>
                                            </div>
                                            {/* <!-- table row end --> */}


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </AdminLayout>
        </>
    )
}

export default AdminProjectView