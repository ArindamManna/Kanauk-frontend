import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: null,
        token: null,
        error: null,
    },
    reducers: {
        loginSuccess(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
        },
        loginFailure(state, action) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.error = action.payload.error;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.error = null;
        },
        verifyTokenSuccess(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
        },
        verifyTokenFailure(state, action) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.error = action.payload.error;
        },
    },
});

export const { loginSuccess, loginFailure, logout, verifyTokenSuccess, verifyTokenFailure } = authSlice.actions;
export default authSlice.reducer;

// Async action to verify token on the backend
export const verifyToken = () => async (dispatch, getState) => {
    const token = getState().auth.token;

    try {
        // Make API request to backend to verify token
        const response = await fetch("http://localhost:5000/api/admin/verify-token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        });
        if (!response.ok) {
            throw new Error("Token verification failed");
        }
        const data = await response.json();
        const { user } = data;
        // Dispatch action to update authentication state with verified token
        dispatch(verifyTokenSuccess({ user, token }));
    } catch (error) {
        // Dispatch action for token verification failure
        dispatch(verifyTokenFailure({ error: error.message }));
    }
};
