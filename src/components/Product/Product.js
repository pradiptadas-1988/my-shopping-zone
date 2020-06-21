import { connect } from "react-redux";

import { ProductContainer } from "./ProductContainer";
import { fetchProductData } from "./product.actions";
import { addCartItemData } from "../Cart/cart.action";
import { getProductList, getCartItems } from "../../selectors/selector";

const mapStateToProps = (state) => ({
  productList: getProductList(state),
  cartItemList: getCartItems(state),
});

const Product = connect(mapStateToProps, {
  fetchProductData,
  addCartItemData,
})(ProductContainer);

export default Product;
