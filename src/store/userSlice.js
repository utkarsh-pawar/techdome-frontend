import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isUser: false,
    token: "",
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isUser = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state) {
      state.isUser = false;
      state.token = "";
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
