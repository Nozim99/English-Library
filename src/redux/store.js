import { configureStore } from "@reduxjs/toolkit";
import className from './class'

export const store = configureStore({
  reducer: {
    className
  },
  devTools: process.env.NODE_ENV !== "production"
}, window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())
