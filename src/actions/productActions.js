import {
  ADD_NEW_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
} from "../types";

export function createNewProductAction(product) {
  return (dispatch) => {
    dispatch(addProduct());

    try {
      dispatch(addProductSuccess());
    } catch (error) {
      dispatch(addProductError());
    }
  };
}

const addProduct = () => ({
  type: ADD_NEW_PRODUCT,
});

const addProductSuccess = () => ({
  type: ADD_PRODUCT_SUCCESS,
});

const addProductError = () => ({
  type: ADD_PRODUCT_ERROR,
});
