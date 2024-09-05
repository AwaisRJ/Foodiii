import { configureStore } from "@reduxjs/toolkit";
import itemQuantitySlice from "./ItemQuantity";
import CartSlice from "./cart-slice";
import SignInSlice from "./login-slice";
const store = configureStore({
  reducer: {
    quantity: itemQuantitySlice.reducer,
    cart: CartSlice.reducer,
    signin: SignInSlice.reducer,
  },
});
export default store;

// export const addtoCarItemsReducer = (state = { quantity: 0 }, action) => {
//   if (action.type === "increment") {
//     return {
//       quantity: state.quantity + 1,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       quantity: state.quantity - 1,
//     };
//   }
//   return state;
// };
// export const FoodListReducer = () => {
//   food_list;
// };
