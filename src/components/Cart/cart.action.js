import { SET_CART_ITEMS, UPDATE_CART_ITEMS } from "./types";
import {
  addedToCartItems,
  removedFromCartItems,
  updateCart,
} from "../../utils/util";

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

export const editCartItem = (cartItemList, productEdited) => (dispatch) => {
  const inventoryItem = updateCart(cartItemList, productEdited);
  dispatch({
    type: UPDATE_CART_ITEMS,
    payload: inventoryItem,
  });
};
