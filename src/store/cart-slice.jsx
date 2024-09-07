import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    itemQuantity: 0,
    cartIsVisible: false,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    addItemsToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.itemQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.name,
          image: newItem.image,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = state.items.totalPrice + existingItem.price;
      }
    },
    removeItemsFromCart(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      state.itemQuantity--;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        state.totalPrice = state.totalPrice - existingItem.price;
      }
    },
  },
});
export const cartAction = CartSlice.actions;

export default CartSlice;
