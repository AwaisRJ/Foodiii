import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
name: 'cart',
initialState: { cartIsVisible: false },
reducers: {
    toggle(state){
        state.cartIsVisible = !state.cartIsVisible;
    }
}
});
export const cartAction = CartSlice.actions;

export default CartSlice;
