import React from "react";

import APP_CONSTANT from "../constant";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import Inventory from "./Inventory/Inventory";
import "./css/style.css";

const App = () => {
  return (
    <div id="container_div" className="container">
      <h1>{APP_CONSTANT.SHOPPING_SITE_HEADING}</h1>
      <hr />
      <div id="row_div" className="row">
        <div id="product_list_div" className="col-md-4">
          <Product />
        </div>
        <div id="shopping_cart_div" className="col-md-4">
          <Cart />
        </div>
        <div id="inventory_div" className="col-md-4">
          <Inventory />
        </div>
      </div>
    </div>
  );
};

export default App;
