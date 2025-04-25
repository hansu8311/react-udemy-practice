import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state) {
      //immer 라이브러리를 사용하여 나중에 복사하여 변경처리한다.
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authenticationSlice.actions;

export default authenticationSlice.reducer;
