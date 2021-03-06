import {
  FETCH_PRODUCTS,
  REMOVE_PRODUCT,
  ADD_NEW_PRODUCT,
  EDIT_PRODUCT_TITLE,
} from "./types";

const initialState = {
  productList: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productList: action.payload.items,
      };
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        productList: action.payload,
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        productList: action.payload,
      };
    case EDIT_PRODUCT_TITLE:
      return {
        ...state,
        productList: action.payload,
      };
    default:
      return state;
  }
};
export default productsReducer;
