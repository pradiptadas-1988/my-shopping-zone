import React from "react";

import { formatCurrency } from "../../utils/util";
import APP_CONSTANT from "../../constant";

const CartList = ({ cartItemList, handleRemoveFromCart }) => {
  const cartItems =
    cartItemList &&
    cartItemList.length > 0 &&
    cartItemList.map((item) => (
      <div key={item.productId}>
        <div className="col-sm-10 col-md-10 col-lg-10">
          <h5>
            {item.productTitle}
            <span className="price">{formatCurrency(item.productPrice)}</span>
          </h5>
          <h5>
            {APP_CONSTANT.QUANTITY} :{" "}
            <span className="price">{item.count}</span>
          </h5>
        </div>
        <div className="col-sm-1 col-md-1 col-lg-1 cancelItem">
          <button onClick={() => handleRemoveFromCart(item)}>X</button>
        </div>
        <hr />
      </div>
    ));

  const totalCartValue = (
    <div className="col-sm-10 col-md-10 col-lg-10">
      Total:{" "}
      <span className="price">
        {formatCurrency(
          cartItemList.reduce(
            (total, item) => total + item.productPrice * item.count,
            0
          )
        )}
      </span>
    </div>
  );

  return (
    <>
      {cartItems}
      {totalCartValue}
    </>
  );
};
export { CartList };
