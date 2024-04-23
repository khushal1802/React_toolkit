import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  BASE_URL,
  DELETE_API_DATA,
  GET_API_DATA,
  POST_API_DATA,
  UPDATE_API_DATA,
} from "../constant";
import axios from "axios";

export const getData = createAsyncThunk("getData", async () => {
  return await axios.get(BASE_URL + GET_API_DATA).then((res) => {
    const data = res.data;
    if(res.status ===200){
      return { data };
    }else{
      console.log(res.err);
    }
  }).catch((err)=>{
      console.log(err);
  })
});

export const postData = createAsyncThunk("postData", async (payload) => {
  return await axios
    .post(BASE_URL + POST_API_DATA, payload)
    .then((res) => {
      console.log(res);
      const data = res.data;
      if(res.status ===200 || res.status ===201){
        return { data };
      }else{
        console.log(res.err);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

export const deleteData = createAsyncThunk("deleteData", async (payload) => {
  const DELETE_ID = payload.id;
  return await axios
    .delete(BASE_URL + DELETE_API_DATA + DELETE_ID)
    .then((res) => {
      console.log(res);
      const data = res.data;
      if(res.status ===200){
        return { data };
      }else{
        console.log(res.err);
      }
    }).catch((err) => {
        console.log(err);
      });
});

export const updateData = createAsyncThunk("updateDate",async(payload)=>{
    const UPDATE_ID = payload.id;
    return await axios.put(BASE_URL + UPDATE_API_DATA + UPDATE_ID ,payload).then((res)=>{
      console.log(res);
        const data = res.data
        if(res.status ===200){
          return { data };
        }else{
          console.log(res.err);
        }
    }).catch((err) => {
        console.log(err);
      });
  })