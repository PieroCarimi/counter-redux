import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices";

export const store = configureStore<any>({
    reducer: {
        counter: counterSlice.reducer,
    },
});