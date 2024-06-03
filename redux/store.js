import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import {thunk} from "redux-thunk"; // redux-thunk modülünü doğru şekilde içe aktarın

const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false})
});

export default store;
