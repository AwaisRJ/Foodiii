import React from "react";
import { uiActions } from "./ui-slice";
import { cartAction } from "./cart-slice";
export const FetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = fetch(
        "https://food-ba60e-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Data Failed to load.");
      }
      const data = response.json;
      console.log(data);
      return data;
    };
    try {
     const cartData = await fetchData();
     dispatch(cartAction.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Oooops Fetching Cart Data Failed",
        })
      );
    }
  };
};
export const SendCartData = (cart) => {
  return async (dispatch) => {
    const SendRequest = async () => {
      const response = await fetch(
        "https://food-ba60e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Ooooops Data Sending Failed..");
      }
    };
    try {
      await SendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent Cart Data Successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Oooops Sending Cart Data Failed",
        })
      );
    }
  };
};
