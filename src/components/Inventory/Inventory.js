import { connect } from "react-redux";

import { InventoryContainer } from "./InventoryContainer";
import {
  addNewProduct,
  removeProductFromInventory,
  editProducts,
} from "./inventory.actions";
import { removeCartItemData } from "../Cart/cart.action";
import { getProductList, getCartItems } from "../../selectors/selector";

const mapStateToProps = (state) => ({
  productList: getProductList(state),
  cartItemList: getCartItems(state),
});

const Inventory = connect(mapStateToProps, {
  addNewProduct,
  removeProductFromInventory,
  removeCartItemData,
  editProducts,
})(InventoryContainer);
export default Inventory;
