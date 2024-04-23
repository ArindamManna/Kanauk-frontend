import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SigninAdmin from "../pages/signin";
import HomeAdmin from "../pages/home";

function AdminRouter() {
    let location = useLocation();
    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route exact={true} path="/admin/signin" element={<SigninAdmin />} />
                <Route exact={true} path="/admin/home" element={<HomeAdmin />} />
            </Routes>
        </>
    );
}

export default AdminRouter;
