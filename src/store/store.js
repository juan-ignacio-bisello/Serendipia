import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, authSlice } from './';



export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        user: authSlice.reducer,
    }
})
