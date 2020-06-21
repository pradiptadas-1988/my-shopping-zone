import { connect } from "react-redux";

import { CartContainer } from "./CartContainer";
import { removeCartItemData } from "./cart.action";
import { getCartItems } from "../../selectors/selector";

const mapStateToProps = (state) => ({
  cartItemList: getCartItems(state),
});

const Cart = connect(mapStateToProps, {
  removeCartItemData,
})(CartContainer);
export default Cart;
