import React, { PureComponent } from "react";

import { AddNewProduct } from "./AddNewProduct";
import { InventoryList } from "./InventoryList";
import APP_CONSTANT from "../../constant";
import { updateProduct } from "../../utils/util";

class InventoryContainer extends PureComponent {
  _removeItemFromInventory = (productRemoved) => {
    const {
      productList,
      removeProductFromInventory,
      removeCartItemData,
      cartItemList,
    } = this.props;
    removeCartItemData(cartItemList, productRemoved);
    removeProductFromInventory(productList, productRemoved);
  };

  _editProductDetail = (productEdited, e, editedKey) => {
    const { editProducts, productList } = this.props;
    const newProduct = updateProduct(productEdited, editedKey, e.target.value);
    editProducts(productList, newProduct);
  };

  render() {
    return (
      <div id="inventory_container_div">
        <h5>{APP_CONSTANT.INVENTORY_HEADING}</h5>
        <hr />
        <InventoryList
          {...this.props}
          removeItemFromInventory={this._removeItemFromInventory}
          editProductDetail={this._editProductDetail}
        />
        <AddNewProduct {...this.props} />
      </div>
    );
  }
}
export { InventoryContainer };
