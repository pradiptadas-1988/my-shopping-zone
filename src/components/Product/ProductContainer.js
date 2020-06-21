import React, { PureComponent } from "react";

import { ProductList } from "./ProductList";
import APP_CONSTANT from "../../constant";

class ProductContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchProductData();
  }

  _handleAddToCart = (productClicked) => {
    const { cartItemList, addCartItemData } = this.props;
    addCartItemData(cartItemList, productClicked);
  };

  render() {
    return (
      <>
        <h5>{APP_CONSTANT.LIST_OF_PRODUCTS}</h5>
        <hr />
        <ProductList {...this.props} handleAddToCart={this._handleAddToCart} />
      </>
    );
  }
}
export { ProductContainer };
