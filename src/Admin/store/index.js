import { configureStore } from "@reduxjs/toolkit";
import authSlice, { verifyToken } from "./slices/authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});

// Dispatch verifyToken action on application startup or when user session is initialized
store.dispatch(verifyToken());

export default store;
