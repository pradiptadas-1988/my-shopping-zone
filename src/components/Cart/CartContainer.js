import React, { PureComponent } from "react";

import { CartList } from "./CartList";
import APP_CONSTANT from "../../constant";

class CartContainer extends PureComponent {
  _handleRemoveFromCart = (itemRemoved) => {
    const { cartItemList, removeCartItemData } = this.props;
    removeCartItemData(cartItemList, itemRemoved);
  };

  render() {
    const { cartItemList } = this.props;
    return (
      <>
        <h5>{APP_CONSTANT.SHOPPING_CART}</h5>
        <hr />
        <div className="row item">
          {cartItemList &&
            (cartItemList.length === 0 ? (
              <div className="col-sm-10 col-md-10 col-lg-10">
                {APP_CONSTANT.EMPTY_CART}
              </div>
            ) : (
              <div>You have {cartItemList.length} product in cart</div>
            ))}
          <hr />
          <CartList
            {...this.props}
            handleRemoveFromCart={this._handleRemoveFromCart}
          />
        </div>
      </>
    );
  }
}
export { CartContainer };
