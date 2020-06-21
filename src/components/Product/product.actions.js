import { FETCH_PRODUCTS } from "./types";

export const fetchProductData = () => async (dispatch) => {
  const responseData = await fetch(
    "https://5eea30edb13d0a00164e4530.mockapi.io/myapi/ecomm/v1/itemData"
  );
  const data = await responseData.json();
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};
