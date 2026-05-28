import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Updates both user records and auth tokens in a single dispatch
    login(state, action) {
      const { user, token } = action.payload;
      state.userDetails = user;
      state.token = token;
    },
    logout(state) {
      state.userDetails = null;
      state.token = null;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { login, logout, setToken } = userSlice.actions;
export default userSlice.reducer;
