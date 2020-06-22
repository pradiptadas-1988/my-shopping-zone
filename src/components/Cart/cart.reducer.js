import { SET_CART_ITEMS, UPDATE_CART_ITEMS } from "./types";

const initialState = {
  cartItems: [],
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case UPDATE_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};
export default shoppingCartReducer;
