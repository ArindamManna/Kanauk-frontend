import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";




export const AdminGlobalSlice = createSlice({
    name: "counter",
    initialState: {

        count: 1

    },

    reducers: {
        updateAdminGlobalSlice: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },


});

// Action creators are generated for each case reducer function
export const { updateAdminGlobalSlice } = AdminGlobalSlice.actions;

export default AdminGlobalSlice.reducer;
