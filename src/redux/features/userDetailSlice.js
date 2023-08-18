import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

 export const userDetail = createSlice({
    name:"userdetail",
    initialState:{
        users:[],
        loading:false,
        error:null
    }
    
})

export default userDetail.reducer