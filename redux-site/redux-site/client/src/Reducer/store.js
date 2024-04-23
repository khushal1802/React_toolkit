import { configureStore } from "@reduxjs/toolkit";
import { addCartSlice } from "./addCartSlice";
import { allCategorySlice } from "./allCategorySlice";

export const store = configureStore({
    reducer:{
        cart:addCartSlice.reducer,
        alldata:allCategorySlice.reducer,
    }
})