import { ADD_NEW_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT_TITLE } from "./types";
import {
  removedFromCartItems,
  insertNewProduct,
  updateProductItems,
} from "../../utils/util";

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

export const editProducts = (productList, productEdited) => (dispatch) => {
  const inventoryItem = updateProductItems(productList, productEdited);
  dispatch({
    type: EDIT_PRODUCT_TITLE,
    payload: inventoryItem,
  });
};
