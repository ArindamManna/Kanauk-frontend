import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Builder from "../pages/Builder";
import ProjectDetails from "../pages/ProjectDetails";
import ProjectListing from "../pages/ProjectListing";
import AdminDashboard from "../Admin/pages/AdminDashboard";
import AddProject from "../Admin/pages/AddProject";
import AdminLogin from "../Admin/pages/AdminLogin";

function AppRouter() {
    let location = useLocation();
    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route exact={true} path="/" element={<Home />} />
                <Route exact={true} path="/projectdetails" element={<ProjectDetails />} />
                <Route exact={true} path="/projectlisting" element={<ProjectListing />} />
                <Route exact={true} path="/builder" element={<Builder />} />






                {/* admin routes */}
                <Route exact={true} path="/admin"  >
                    <Route index element={<AdminDashboard />} />
                    <Route exact={true} path="addproject" element={<AddProject />} />
                    <Route exact={true} path="login" element={<AdminLogin />} />
                </Route>
            </Routes>
        </>
    );
}

export default AppRouter;
