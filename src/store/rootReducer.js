import { combineReducers } from "redux";
import productsReducer from "../components/Product/products.reducer";
import shoppingCartReducer from "../components/Cart/cart.reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: shoppingCartReducer,
});
export default rootReducer;
