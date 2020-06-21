import React, { Component } from "react";

import APP_CONSTANT from "../../constant";

class AddNewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productTitle: "",
      productPrice: "",
      productImageUrl: "",
      productDesc: "",
    };
  }
  _priceValidator = () => {
    
  };

  _checkDataFilled = () => {
    return this.state.productTitle !== "" &&
      this.state.productPrice !== "" &&
      this.state.productImageUrl.trim() !== "" &&
      this.state.productDesc.trim() !== ""
      ? true
      : false;
  };

  _addNewProduct = (e) => {
    e.preventDefault();
    let isDataFilled = this._checkDataFilled();
    isDataFilled ? this._addProduct() : alert(APP_CONSTANT.DATA_WARNING);
  };

  _addProduct = () => {
    const { productList, addNewProduct } = this.props;
    addNewProduct(productList, this.state);
    this.setState(
      {
        productTitle: "",
        productPrice: "",
        productImageUrl: "",
        productDesc: "",
      },
      () => {}
    );
  };

  render() {
    return (
      <>
        <div className="row border">
          <form id="new_prod_add" onSubmit={this._addNewProduct}>
            <div className="padding0">
              <div className="col-sm-12 col-md-12 col-lg-12 padding0 margin5">
                <div className="col-sm-12 col-md-6 col-lg-6 padding0 margin5">
                  <input
                    type="text"
                    placeholder="Title Of Item"
                    value={this.state.productTitle}
                    onChange={(e) => {
                      this.setState({ productTitle: e.target.value }, () => {});
                    }}
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 padding0 margin5">
                  <input
                    type="number"
                    placeholder="Price"
                    value={this.state.productPrice}
                    onChange={(e) => {
                      this.setState(
                        { productPrice: parseFloat(e.target.value) },
                        () => {}
                      );
                    }}
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 padding0 margin5">
                  <input
                    type="text"
                    placeholder="Image Url"
                    value={this.state.productImageUrl}
                    onChange={(e) => {
                      this.setState(
                        { productImageUrl: e.target.value },
                        () => {}
                      );
                    }}
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 padding0 margin5">
                  <textarea
                    rows="4"
                    cols="30"
                    placeholder="Product Description"
                    value={this.state.productDesc}
                    onChange={(e) => {
                      this.setState({ productDesc: e.target.value }, () => {});
                    }}
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 padding0 margin5">
                  <button className="btn btn-primary removeProd" type="submit">
                    {APP_CONSTANT.ADD_PRODUCT}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export { AddNewProduct };
