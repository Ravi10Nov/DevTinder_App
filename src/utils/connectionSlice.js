import { createSlice } from "@reduxjs/toolkit";


const connectionSlice = createSlice({
    name:"connections",
    initialState:[],
    reducers:{
        addConnection:(state,action)=>{
            return action.payload;
        },
        removeConnection:(state,action)=> {
            const newConnectionFeed = state.filter((connection)=> connection.id !== action.payload);
            return newConnectionFeed;
        }
    }
})

export const {addConnection, removeConnection} = connectionSlice.actions;

export default connectionSlice.reducer;