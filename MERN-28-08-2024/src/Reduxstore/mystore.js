import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./cartslice"
import counterreducer from "./counterslice"

export let mystore=configureStore({
    reducer:{
        cart:cartreducer,
        counter:counterreducer
    }
})