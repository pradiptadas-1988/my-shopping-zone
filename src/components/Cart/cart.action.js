import { SET_CART_ITEMS } from "./types";
import { addedToCartItems, removedFromCartItems } from "../../utils/util";

export const addCartItemData = (cartItemList, productAdded) => (dispatch) => {
  const cartItem = addedToCartItems(cartItemList, productAdded);
  dispatch({
    type: SET_CART_ITEMS,
    payload: cartItem,
  });
};

export const removeCartItemData = (cartItemList, itemRemoved) => (dispatch) => {
  const cartItem = removedFromCartItems(cartItemList, itemRemoved);
  dispatch({
    type: SET_CART_ITEMS,
    payload: cartItem,
  });
};
