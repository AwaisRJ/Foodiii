import { createSlice } from "@reduxjs/toolkit";
const initialState = {quantity: 0};
const itemQuantitySlice = createSlice({
  name: 'quantity',
  initialState: initialState,
  reducers: {
    increment(state){
      state.quantity++;
    },
    decrement(state){
      state.quantity--;
    }
  },
});
export const itemQuantityActions = itemQuantitySlice.actions;
export default itemQuantitySlice;