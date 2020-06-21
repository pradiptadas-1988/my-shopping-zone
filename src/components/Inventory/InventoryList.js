import React from "react";

import APP_CONSTANT from "../../constant";

const InventoryList = ({ productList, removeItemFromInventory }) => {
  const inventoryItems =
    productList &&
    productList.length > 0 &&
    productList.map((product) => (
      <div key={product.productId}>
        <div className="row border">
          <div className="padding0">
            <div className="col-sm-12 col-md-12 col-lg-12 padding0 margin5">
              <div className="col-sm-12 col-md-6 col-lg-6 padding0 margin5">
                <input
                  type="text"
                  placeholder="Title Of Item"
                  value={product.productTitle}
                  onChange={(e) => {}}
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 padding0 margin5">
                <input
                  type="number"
                  placeholder="Price"
                  value={product.productPrice}
                  onChange={(e) => {}}
                />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 padding0 margin5">
                <input
                  type="text"
                  placeholder="Image Url"
                  value={product.productImageUrl}
                  onChange={(e) => {}}
                />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 padding0 margin5">
                <textarea
                  rows="4"
                  cols="30"
                  placeholder="Product Description"
                  value={product.productDesc}
                  onChange={(e) => {}}
                />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 padding0 margin5">
                <button
                  className="btn btn-danger removeProd"
                  onClick={() => removeItemFromInventory(product)}
                >
                  {APP_CONSTANT.REMOVE_PRODUCT}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

  return <div className="row item mainDiv">{inventoryItems}</div>;
};
export { InventoryList };
