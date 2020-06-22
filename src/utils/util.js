export const addedToCartItems = (cartItemList, addedItem) => {
  let isProductAddedInCart = false;
  cartItemList.forEach((item) => {
    if (item.productId === addedItem.productId) {
      isProductAddedInCart = true;
      item.count++;
    }
  });
  if (!isProductAddedInCart) {
    cartItemList.push({ ...addedItem, count: 1 });
  }
  return [...cartItemList];
};

export const removedFromCartItems = (cartItemList, itemRemoved) => {
  return cartItemList.filter(
    (item) => item.productId !== itemRemoved.productId
  );
};

export const removeFromProductList = (productList, itemRemoved) => {
  return productList.filter((item) => item.productId !== itemRemoved.productId);
};

export const insertNewProduct = (productList, newItemToAdd) => {
  newItemToAdd.productId = generateProductId();
  return [...productList, newItemToAdd];
};

export const updateProductItems = (productList, itemUpdated) => {
  productList.length > 0 &&
    productList.map(
      (product) => itemUpdated.productId === product.productId || product
    );
  return [...productList];
};

export const updateProduct = (productEdited, editedKey, value) => {
  switch (editedKey) {
    case "title": {
      productEdited.productTitle = value;
      return productEdited;
    }

    case "price": {
      productEdited.productPrice = parseFloat(value);
      return productEdited;
    }

    case "url": {
      productEdited.productImageUrl = value;
      return productEdited;
    }

    case "desc": {
      productEdited.productDesc = value;
      return productEdited;
    }

    default:
      return productEdited;
  }
};

export const updateCart = (cartItemList, productEdited) => {
  let updatedCart = [];
  cartItemList.length > 0 &&
    cartItemList.forEach((item) => {
      if (item.productId === productEdited.productId) {
        productEdited.count = item.count;
        updatedCart.push(productEdited);
      } else {
        updatedCart.push(item);
      }
    });
  return updatedCart;
};

const generateProductId = () => {
  return `product_${Math.floor(Math.random() * 100)}`;
};

export const formatCurrency = (currency) => {
  return `${Number(currency.toFixed(2).toLocaleString())}$`;
};
