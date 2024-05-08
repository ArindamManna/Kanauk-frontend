import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SigninAdmin from "../pages/signin";
import HomeAdmin from "../pages/home";
import { useDispatch, useSelector } from "react-redux";
import { verifyToken } from "../store/slices/authSlice";

function AdminRouter() {
    let location = useLocation();

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch verifyToken action on application startup
        dispatch(verifyToken());
    }, [dispatch]);
    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route exact={true} path="/admin/signin" element={<SigninAdmin />} />
                <Route exact={true} path="/admin/home" element={isAuthenticated ? <HomeAdmin /> : <SigninAdmin />} />
            </Routes>
        </>
    );
}

export default AdminRouter;
