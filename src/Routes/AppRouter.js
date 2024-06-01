import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Builder from "../pages/Builder";
import ProjectDetails from "../pages/ProjectDetails";
import ProjectListing from "../pages/ProjectListing";
import AdminDashboard from "../Admin/pages/AdminDashboard";
import AddProject from "../Admin/pages/AddProject";
import AdminLogin from "../Admin/pages/AdminLogin";
import AdminProjectLIst from "../Admin/pages/AdminProjectLIst";
import AdminBuilderList from "../Admin/pages/AdminBuilderList";
import AdminAddBuilder from "../Admin/pages/AdminAddBuilder";
import AddProperties from "../Admin/pages/AddProperties";
import AdminProjectView from "../Admin/pages/AdminProjectView";
import Login from "../pages/Login";
import PropertyDetails from "../pages/PropertyDetails";

function AppRouter() {
    let location = useLocation();
    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route exact={true} path="/" element={<Home />} />
                <Route exact={true} path="/projectdetails" element={<ProjectDetails />} />
                <Route exact={true} path="/propertyDetails" element={<PropertyDetails />} />
                <Route exact={true} path="/projects" element={<ProjectListing />} />
                <Route exact={true} path="/builder" element={<Builder />} />
                <Route exact={true} path="/login" element={<Login />} />

                {/* admin routes */}
                <Route exact={true} path="/admin">
                    <Route index element={<AdminDashboard />} />
                    <Route exact={true} path="project" element={<AdminProjectLIst />} />
                    <Route exact={true} path="addproject" element={<AddProject />} />
                    <Route exact={true} path="projectview" element={<AdminProjectView />} />
                    <Route exact={true} path="addproperties" element={<AddProperties />} />
                    <Route exact={true} path="builder" element={<AdminBuilderList />} />
                    <Route exact={true} path="addbuilder" element={<AdminAddBuilder />} />
                    <Route exact={true} path="login" element={<AdminLogin />} />
                </Route>
            </Routes>
        </>
    );
}

export default AppRouter;
