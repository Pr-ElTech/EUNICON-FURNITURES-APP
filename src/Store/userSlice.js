// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   userDetails: null,
//   token: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     // Updates both user records and auth tokens in a single dispatch
//     login(state, action) {
//       const { user, token } = action.payload;
//       state.userDetails = user;
//       state.token = token;
//     },
//     logout(state) {
//       state.userDetails = null;
//       state.token = null;
//     },
//     setToken(state, action) {
//       state.token = action.payload;
//     },
//   },
// });

// export const { login, logout, setToken } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetail: null,
  token: localStorage.getItem("authToken") || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userDetail = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.userDetail = null;
      state.token = null;
      localStorage.removeItem("authToken");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
