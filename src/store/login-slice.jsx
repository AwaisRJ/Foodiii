import { createSlice } from "@reduxjs/toolkit";
const SignInSlice = createSlice({
  name: "signin",
  initialState: {
    signInVisible: false,
    currState: false,
  },
  reducers: {
    SignInToggle(state) {
      state.signInVisible = !state.signInVisible;
    },
    ToggleCurrentState(state) {
      state.currState = !state.currState;
    },
  },
});
export const signInAction = SignInSlice.actions;
export default SignInSlice;
