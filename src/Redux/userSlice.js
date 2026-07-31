import { createSlice } from "@reduxjs/toolkit";
export const  userSlice = createSlice({
    name : 'user',
    initialState :{
currentUser : JSON.parse(localStorage.getItem ('user')) || null
 },
    reducers:{
        login: (state,action) =>{
            state.currentUser=action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));

        },
        logout: state=>{
            state.currentUser= null;
            localStorage.removeItem('user');

        }
    }
})
export const {login, logout}= userSlice.actions;
export default userSlice.reducer;