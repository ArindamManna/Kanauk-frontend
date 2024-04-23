import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Builder from "../pages/Builder";
import Property from "../pages/Property";

function AppRouter() {
    let location = useLocation();
    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route exact={true} path="/" element={<Home />} />
                <Route exact={true} path="/builder" element={<Builder />} />
                <Route exact={true} path="/property" element={<Property />} />
            </Routes>
        </>
    );
}

export default AppRouter;
