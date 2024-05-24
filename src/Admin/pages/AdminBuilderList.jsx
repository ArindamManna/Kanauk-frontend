import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../components/AdminLayout'

import profileImg from "../asset/images/logo/profile.png"
import { ApiHelperFunction } from '../../Api/ApiHelperfunction';
import Loader from '../../components/Loader';

function AdminBuilderList() {
    const [builderList, setBuilderList] = useState([])
    const [loader, setLoader] = useState(false)
    async function fetchBuilderlist(e) {
        // e.preventDefault();
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: "users/builder/all",
            method: "get",
        });
        console.log(res);
        if (res.data) {
            setBuilderList(res.data);
            setLoader(false)
        } else {
            alert(res.error.message);
            setLoader(false)
        }
    }
    useEffect(() => {
        fetchBuilderlist()
    }, [])
    async function deleteBuilder(id, index) {
        // e.preventDefault();
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: `admin/builder/delete/${id}`,
            method: "delete",
        });
        console.log(res);
        if (res.data) {
            setBuilderList((prev) => prev?.filter((item, i) => i != index));

            setLoader(false);

        } else {
            // alert(res.error.message)
            setLoader(false)
        }
    }
    return (
        <AdminLayout>
            {loader ? <Loader /> : ""}
            <div className="page-name">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-4">
                        <h2><i className="ri-arrow-left-line"></i> Builder List</h2>
                    </div>
                    <div className="col-md-6">
                        <div className="text-end mb-4 flex gap-3 justify-end">
                            <Link to={"../addbuilder"} href="#" className=" primary-btn"><img src={profileImg} /> Add Builder</Link>

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
                                <th>ID</th>
                                <th >Name</th>
                                <th >Location</th>
                                <th >Email</th>
                                <th >Phone</th>
                                <th >No. of Projects</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {builderList?.map((item, index) => {
                                return <tr key={index}>
                                    <td>{index}</td>
                                    <td >{item?.name}</td>
                                    <td >{item?.location?.label}</td>
                                    <td >{item?.email}</td>
                                    <td >{item?.phone}</td>
                                    <td >0</td>
                                    <td className='flex items-center'>
                                        <a href="#"><img src={require("../asset/images/logo/lucide_view.png")} /></a>
                                        <Link to={`/admin/addbuilder/?builderId=${item?._id}`} state={item}><img src={require("../asset/images/logo/akar-icons_edit.png")} /></Link>
                                        <a onClick={() => { deleteBuilder(item?._id, index) }} className='cursor-pointer' ><img src={require("../asset/images/logo/delete.png")} /></a>
                                    </td>
                                </tr>
                            })}



                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminBuilderList