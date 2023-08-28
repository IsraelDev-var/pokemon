import { createSlice } from "@reduxjs/toolkit";
const initialState = {
        name:""
}
const nameUserSlice = createSlice({
    initialState,
    name:"nameUser",
    reducers:{
        loginUser: (state, action) => {
            const newUsername = action.payload
            state.name = newUsername
        }

    }
})
export const {loginUser} = nameUserSlice.actions
export default nameUserSlice.reducer