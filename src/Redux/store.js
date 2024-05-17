import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./GlobalSlice";
import AdminGlobalSlice from "./AdminGlobalSlice";


export const store = configureStore({
  reducer: {
    GlobalSlice: GlobalSlice,
    AdminGlobalSlice: AdminGlobalSlice,
  },
});



// const Dispatch = useDispatch();
// Dispatch(
//   updateGlobalState({
//     isgetapiDone: false,
//     oldApplicationId: 0,
//     isReadOnly: false,
//   })
// );

// const [CurrentStepNo, CurrentSection, doYouHaveDBA, ownershipType] =
// useSelector((state) => {
//   const { CurrentStepNo, CurrentSection } = state?.GlobalSlice;
//   let formdata =
//     state?.SectionSlice?.[CurrentSection]?.[CurrentStepNo - 1]?.formdata;
//   return [
//     CurrentStepNo,
//     CurrentSection,
//     formdata?.doYouHaveDBA,
//     formdata?.ownershipType,
//   ];
// });