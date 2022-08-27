import { ADD_PRODUCT } from "../types";

const initialState = [];

function productReducer(products = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT:
      return [...products, payload];

    default:
      return products;
  }
}

export default productReducer;
