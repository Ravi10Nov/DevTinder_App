import { createSlice } from "@reduxjs/toolkit";


const requestSlice = createSlice({
    name:'requests',
    initialState:[],
    reducers:{
        addRequests:(state,action)=> action.payload,
        removeRequests: (state,action)=>{
            const newRequestArray = state.filter((request)=> request.id !== action.payload);
            return newRequestArray;
        },
    }
})

export const {addRequests,removeRequests} = requestSlice.actions;

export default requestSlice.reducer;