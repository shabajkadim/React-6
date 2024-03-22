import rootReducer from "./root.Reducer";
import {configureStore}  from "@reduxjs/toolkit"

const store=configureStore({
    reducer:rootReducer
})

export default store