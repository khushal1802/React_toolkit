import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Reducer/reducer";

const store = configureStore({
    reducer:{
        userSlice: userSlice
    }
});

export default store;


