import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token"),
        admin: null,
        login: false,
    },
    reducers: {
        store_token(state, action) {
            state.token = action.payload;
            localStorage.setItem("token", action.payload);
        },
        async admin_authentication(state, action) {
            if (state.login) return;
            try {
                const response = await fetch(`http://localhost:5000/api/admin/home`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${state.token}`,
                    },
                });
                if (response.statusCode === 200) {
                    const data = await response.json();
                    state.login = true;
                    state.admin = data;
                }
            } catch (error) {
                console.log(error.message);
            }
        },
    },
});

export default authSlice.reducer;
export const { store_token, admin_authentication } = authSlice.actions;
