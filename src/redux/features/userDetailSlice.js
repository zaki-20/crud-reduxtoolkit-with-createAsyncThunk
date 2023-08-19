import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//create action
export const createUser = createAsyncThunk(
    "createUser",
    async (data, { rejectWithValue }) => {
        const response = await fetch(
            "https://64dfd26371c3335b258318fb.mockapi.io/crud",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


//read action
export const showUser = createAsyncThunk(
    "showUser",
    async (args, { rejectWithValue }) => {
        const response = await fetch(
            "https://64dfd26371c3335b258318fb.mockapi.io/crud"
        );

        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const userDetail = createSlice({
    name: "userdetail",
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [createUser.pending]: (state) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
            
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [showUser.pending]: (state) => {
            state.loading = true;
        },
        [showUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [showUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }

})

export default userDetail.reducer