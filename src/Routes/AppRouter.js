import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Builder from "../pages/Builder";
import ProjectDetails from "../pages/ProjectDetails";
import ProjectListing from "../pages/ProjectListing";

function AppRouter() {
    let location = useLocation();
    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route exact={true} path="/" element={<Home />} />
                <Route exact={true} path="/projectdetails" element={<ProjectDetails />} />
                <Route exact={true} path="/projectlisting" element={<ProjectListing />} />
                <Route exact={true} path="/builder" element={<Builder />} />
            </Routes>
        </>
    );
}

export default AppRouter;
