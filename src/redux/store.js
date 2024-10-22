import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Reducers/UserSlice";
import AuthSlice from "./Reducers/AuthSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    auth: AuthSlice,
  },
});
