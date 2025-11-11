import { createSlice } from "@reduxjs/toolkit";

let counterslice=createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,action)=>{
           state.value=state.value+1
        },
        decrement:(state,action)=>{
            state.value=state.value-1
        },
        reset:(state,action)=>{
         state.value=0
        }
    }

})
//state={ items:[]}
//

export default counterslice.reducer