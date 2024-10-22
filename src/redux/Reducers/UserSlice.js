import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return (state = action.payload);
    },
    removeUser: (state) => {},
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
