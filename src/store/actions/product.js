import { ADD_PRODUCT } from "../types";

export const addProduct = (name, sku, brand) => async (dispatch) => {
  console.log("data action:", name, sku, brand);

  try {
    dispatch({ type: ADD_PRODUCT, payload: { name, sku, brand } });
  } catch (error) {
    console.log(error);
  }
};
