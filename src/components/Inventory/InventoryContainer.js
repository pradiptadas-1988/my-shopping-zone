import React, { PureComponent } from "react";

import { AddNewProduct } from "./AddNewProduct";
import { InventoryList } from "./InventoryList";
import APP_CONSTANT from "../../constant";

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

  render() {
    return (
      <div id="inventory_container_div">
        <h5>{APP_CONSTANT.INVENTORY_HEADING}</h5>
        <hr />
        <header>
          <AddNewProduct {...this.props} />
        </header>
        <InventoryList
          {...this.props}
          removeItemFromInventory={this._removeItemFromInventory}
        />
      </div>
    );
  }
}
export { InventoryContainer };
