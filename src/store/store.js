import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui/uiSlice";
import { authSlice } from "./auth/authSlice";
import { itemSlice } from "./ui/itemSlice";


export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        user: authSlice.reducer,
        item: itemSlice.reducer
    }
})
