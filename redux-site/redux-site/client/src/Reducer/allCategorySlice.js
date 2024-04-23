import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk('fetchData', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
})

export const allCategorySlice = createSlice({
    name: 'alldata',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getProduct.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getProduct.rejected, (state, action) => {
            state.isError = true;
        })
    }
})

export const { getAllData } = allCategorySlice.actions