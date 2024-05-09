import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AdminLayout from '../components/AdminLayout'

import profileImg from "../asset/images/logo/profile.png"
import { ApiHelperFunction } from '../../Api/ApiHelperfunction'
import Loader from '../../components/Loader'

function AdminProjectLIst() {
    const navigate = useNavigate()
    const [projectList, setProjectList] = useState([])
    const [loader, setLoader] = useState(false)
    async function fetchProjectList(e) {
        // e.preventDefault();
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: "users/project/all",
            method: "get",
        });
        console.log(res);
        if (res.data) {
            setProjectList(res.data);
            setLoader(false)
        } else {
            alert(res.error.message)
            setLoader(false)
        }
    }
    async function deleteProject(id, index) {
        // e.preventDefault();
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: `admin/project/delete/${id}`,
            method: "delete",
        });
        console.log(res);
        if (res.data) {
            setProjectList((prev) => prev?.filter((item, i) => i != index));

            setLoader(false);

        } else {
            // alert(res.error.message)
            setLoader(false)
        }
    }
    useEffect(() => {
        fetchProjectList()
    }, [])
    return (<>

        {loader ? <Loader /> : ""}
        <AdminLayout>
            <div className="page-name">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-4">
                        <h2><i className="ri-arrow-left-line"></i> Project List</h2>
                    </div>
                    <div className="col-md-6">
                        <div className="text-end mb-4 flex gap-3 justify-end">
                            <Link to={"../addproject"} href="#" className=" primary-btn"><img src={profileImg} /> Add Project</Link>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="table-responsive table-sec mb-4">
                    { }
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th >Project Name</th>
                                <th >Price</th>
                                <th >Location</th>
                                <th >Builder Name</th>
                                <th >No. of Properties</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projectList?.map((item, index) => {
                                return <tr key={index}>
                                    <td>{index}</td>
                                    <td >{item?.name}</td>
                                    <td >{item?.price?.from} - <br /> {item?.price?.to}</td>
                                    <td >{item?.location?.label}</td>
                                    <td >{item?.builder?.name}</td>
                                    <td >{item?.properties?.length}</td>
                                    <td >
                                        <div className='flex items-center'>

                                            <Link to={`/admin/projectview/?project_id=${item?._id}`} ><img src={require("../asset/images/logo/lucide_view.png")} /></Link>
                                            <a ><img src={require("../asset/images/logo/akar-icons_edit.png")} /></a>
                                            <a onClick={() => { deleteProject(item?._id, index) }} ><img src={require("../asset/images/logo/delete.png")} /></a>
                                        </div>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    </>
    )
}

export default AdminProjectLIst