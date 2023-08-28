import { configureStore } from "@reduxjs/toolkit";
import nameUserSlice from "./slices/nameUser.slice";

export default configureStore({
    reducer:{
        userName: nameUserSlice

    }
})