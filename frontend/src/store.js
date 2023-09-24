import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './slices/apiSlice.js'

const store = configureStore({
    reducer: {
        [apiSlice.reducer]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store