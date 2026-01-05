import { configureStore } from "@reduxjs/toolkit";
import CountReducer from './counterSlice'

export const store=configureStore({
    reducer:{
        counter:CountReducer
    }
})