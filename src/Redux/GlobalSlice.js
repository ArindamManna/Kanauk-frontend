import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";




export const GlobalSlice = createSlice({
  name: "counter",
  initialState: {

    count: 1

  },

  reducers: {
    updateGlobalState: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },


});

// Action creators are generated for each case reducer function
export const { updateGlobalState } = GlobalSlice.actions;

export default GlobalSlice.reducer;
