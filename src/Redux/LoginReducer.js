import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
  name: "login",
  initialState: null,
  reducers: {
    signin: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { signin } = loginSlice.actions;

export default loginSlice.reducer;
