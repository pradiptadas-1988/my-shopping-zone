import { ADD_NEW_PRODUCT, REMOVE_PRODUCT } from "./types";
import { removedFromCartItems, insertNewProduct } from "../../utils/util";

export const addNewProduct = (productList, productAdded) => (dispatch) => {
  const inventoryItem = insertNewProduct(productList, productAdded);
  dispatch({
    type: ADD_NEW_PRODUCT,
    payload: inventoryItem,
  });
};

export const removeProductFromInventory = (productList, productRemoved) => (
  dispatch
) => {
  const inventoryItem = removedFromCartItems(productList, productRemoved);
  dispatch({
    type: REMOVE_PRODUCT,
    payload: inventoryItem,
  });
};
