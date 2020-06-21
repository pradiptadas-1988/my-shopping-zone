import React from "react";
import { formatCurrency } from "../../utils/util";
import APP_CONSTANT from "../../constant";

const ProductList = ({ productList, handleAddToCart }) => {
  const productItems =
    productList &&
    productList.length > 0 &&
    productList.map((product) => (
      <div className="row item" key={product.productId}>
        <div className="col-sm-12 col-md-4 col-lg-4 image">
          <img
            src={product.productImageUrl}
            alt={product.productId}
            className="img"
          />
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <h5>
            {product.productTitle}
            <span className="price">
              {formatCurrency(product.productPrice)}
            </span>
          </h5>
          <p className="des">{product.productDesc}</p>
          <button
            id={`add_button_${product.productId}`}
            onClick={() => handleAddToCart(product)}
          >
            {APP_CONSTANT.ADD_TO_CART}
          </button>
        </div>
      </div>
    ));
  return (
    <div className="row item productDiv">
      {productList && productList.length === 0
        ? APP_CONSTANT.LIST_EMPTY
        : productItems}
    </div>
  );
};
export { ProductList };
