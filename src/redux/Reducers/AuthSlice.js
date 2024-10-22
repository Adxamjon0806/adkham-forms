import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
