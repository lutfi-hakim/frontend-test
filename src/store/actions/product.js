import { ADD_PRODUCT } from "../types";

export const addProduct =
  (id, name, sku, brand, description, variasi, image) => async (dispatch) => {
    // console.log("data action:", name, sku, brand);
    const items = {
      id: id,
      name: name,
      sku: sku,
      image: image,
      brand: brand,
      description: description,
      variasi: variasi,
    };

    try {
      dispatch({
        type: ADD_PRODUCT,
        payload: items,
      });
    } catch (error) {
      console.log(error);
    }
  };
