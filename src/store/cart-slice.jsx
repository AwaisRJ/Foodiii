import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
name: 'cart',
initialState: { cartIsVisible: false, signIn: true },
reducers: {
    toggle(state){
        state.cartIsVisible = !state.cartIsVisible;
    },
    SignInToggle(state){
        state.signIn = !state.signIn;
    }
}
});
export const cartAction = CartSlice.actions;

export default CartSlice;
