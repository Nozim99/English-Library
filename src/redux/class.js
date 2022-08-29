import { createSlice } from "@reduxjs/toolkit";

export const classSlice = createSlice({
  name: "className",
  initialState: {
    input:
      localStorage.getItem("book") === null ? "" : localStorage.getItem("book"),
    darkMode:
      JSON.parse(localStorage.getItem("darkMode")) === null
        ? true
        : JSON.parse(localStorage.getItem("darkMode")),
    pagination: JSON.parse(localStorage.getItem("pagination")) === null ? 0 : JSON.parse(localStorage.getItem("pagination")),
    selfLink: "",
    bought:
      JSON.parse(localStorage.getItem("bought")) === null
        ? []
        : JSON.parse(localStorage.getItem("bought")),
    filter: JSON.parse(localStorage.getItem("filter")) === null ? JSON.parse(localStorage.getItem("filter")) : '',
  },
  reducers: {
    filterF: (state, { payload }) => {
      state.filter = payload
      localStorage.setItem("filter", JSON.stringify(payload))
    },
    handleDarkMode: (state, { payload }) => {
      state.darkMode = payload;
      localStorage.setItem("darkMode", payload);
    },
    inputF: (state, { payload }) => {
      state.input = payload;
      localStorage.setItem("book", payload);
    },
    pagination0: (state) => {
      state.pagination = 0;
    },
    changePagination: (state, { payload }) => {
      state.pagination = state.pagination + payload;
      if (state.pagination < 0) {
        state.pagination = 0;
      }
      localStorage.setItem("pagination", JSON.stringify(state.pagination))
    },
    selfLinkF: (state, { payload }) => {
      state.selfLink = payload;
    },
    addBought: (state, { payload }) => {
      let scan = true;
      if (state.bought.includes(payload)) {
        scan = false
      }
      if (scan) {
        state.bought.push(payload);
        localStorage.setItem("bought", JSON.stringify(state.bought))
      }
    },
  },
});

export const {
  handleDarkMode,
  inputF,
  pagination0,
  changePagination,
  selfLinkF,
  addBought,
  filterF
} = classSlice.actions;
export default classSlice.reducer;
