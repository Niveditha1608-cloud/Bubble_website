import { createSlice } from "@reduxjs/toolkit";

let cartslice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        additem:(state,action)=>{
           state.items.push(action.payload)
        },
        clearcart:(state,action)=>{
         state.items=[]
        }
    }

})
//state={ items:[]}
//

export default cartslice.reducer

export const {additem,clearcart}=cartslice.actions
/*
{
        additem:(state,action)=>{
           state.items.push(action.payload)
        },
        clearcart:(state,action)=>{
         state.items=[]
        }
    }
*/