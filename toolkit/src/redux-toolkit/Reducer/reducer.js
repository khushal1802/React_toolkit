import { createSlice } from "@reduxjs/toolkit";
import { deleteData, getData, postData, updateData } from "../Api/api";

const initialState = {
  isLoading: false,
  users: [],
  isError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Get data
      .addCase(getData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.data;
      })
      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })

      // Post
      .addCase(postData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = [...state.users, action.payload];
      })
      .addCase(postData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })

      // Delete
      .addCase(deleteData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.users = state.users.filter((user) => user.id !== action.payload.data);
        state.users = state.users.splice(action.payload, 1)
        // state.users = []
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      
      // Update
      .addCase(updateData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        );
      })
      .addCase(updateData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default userSlice.reducer;
