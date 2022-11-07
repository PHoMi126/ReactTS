import { createSlice } from "@reduxjs/toolkit";
import userLogin from './userAction';

export const userSlice = createSlice({
    name: "user",
    initialState: { 
        loading: false,
        user: null,
        error: false,
        success: false,
    },
    reducers: {
        /*
        login: (state, action) => {
            state.user = action.payload;
        },
        */
        home: (state) => {
            state.user = null;
            state.error = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state, action) => {
                state.loading = true
                state.error = false
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false
                state.error = true
            })
    }
});

export const { home } = userSlice.actions;

/* 
When configured the store and create the "root reducer" 
the user reducer is named "user", i.e. user: userReducer, 
so from the root state it is state.user.user 
to get to the user object of the user reducer area of state.
*/
//export const selectUser = (state: any) => state.user.user;

export default userSlice.reducer;