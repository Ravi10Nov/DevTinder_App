import { createSlice } from "@reduxjs/toolkit";


const feedSlice = createSlice({
    name:"feedUsers",
    initialState:null,
    reducers:{
        addFeed:(state,action) =>{
            return action.payload;
        },
        removeFeed:(state,action)=>{
            return null;
        }
    }
});

export const {addFeed,removeFeed} = feedSlice.actions;

export default feedSlice.reducer;