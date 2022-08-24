import { createSlice } from "@reduxjs/toolkit"

export const classSlice = createSlice({
  name: "className",
  initialState: { darkMode: JSON.parse(localStorage.getItem('darkMode'))},
  reducers: {
    handleDarkMode: (state, { payload }) => {
      state.darkMode = payload
      localStorage.setItem("darkMode", payload)
    }
  }
})

export const { handleDarkMode } = classSlice.actions
export default classSlice.reducer