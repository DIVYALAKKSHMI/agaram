import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loginSuccessData : {

    }
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        updateLoginSuccess  : (state,action) => {
            // console.log(action)
            state.loginSuccessData = action.payload
        },
        Logout : (state) => {
            state.loginSuccessData = {}
        }
    }
})


export const { updateLoginSuccess,Logout } = userSlice.actions
export default userSlice.reducer