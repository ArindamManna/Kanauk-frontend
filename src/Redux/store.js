import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./GlobalSlice";
import AdminGlobalSlice from "./AdminGlobalSlice";


export const store = configureStore({
  reducer: {
    GlobalSlice: GlobalSlice,
    AdminGlobalSlice: AdminGlobalSlice,
  },
});
