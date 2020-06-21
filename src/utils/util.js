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
    case "title":
      return (productEdited.productTitle = value);
    case "price":
      return (productEdited.productPrice = parseFloat(value));
    case "url":
      return (productEdited.productImageUrl = value);
    case "desc":
      return (productEdited.productDesc = value);
    default:
      return productEdited;
  }
};

const generateProductId = () => {
  return `product_${Math.floor(Math.random() * 100)}`;
};

export const formatCurrency = (currency) => {
  return `${Number(currency.toFixed(2).toLocaleString())}$`;
};
