import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { admin_authentication } from "../store/slices/authSlice";

const HomeAdmin = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(admin_authentication());
    }, []);
    return (
        <div>
            <button>useDispatch</button>
        </div>
    );
};

export default HomeAdmin;
