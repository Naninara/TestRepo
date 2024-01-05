import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./LoginReducer";

export const store = configureStore({
  reducer: { login: loginSlice },
});
