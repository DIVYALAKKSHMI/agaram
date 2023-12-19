import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : 'user',
    initialState : {
        loginData : [],
        regData : [],
        allUsers : [],
        singleUser : [],
        getID : 0,
        status : [],
        IsloadActive : true
    },
    reducers : {
        UpdateLogindata : (state,action) => {
            state.loginData = action.payload
        },
        UpdateRegdata : (state,action) => {
            state.regData = action.payload
        },
        Showallusers : (state,action) => {
            state.allUsers = action.payload
        },
        DisplaysingleUser : (state,action) => {
            state.singleUser = action.payload
        },
        SaveID : (state,action) => {
            state.getID = action.payload
        },
        UpdateStatus : (state,action) => {
            state.status = action.payload
        },
        UpdateloadActivestatus : (state,action) => {
            state.IsloadActive = action.payload
        }
    }
})

export const { UpdateLogindata, UpdateRegdata, Showallusers, DisplaysingleUser, SaveID, UpdateStatus,UpdateloadActivestatus } = userSlice.actions
export default userSlice.reducer