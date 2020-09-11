import {
  ADD_NEW_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
} from "../types";

const initialState = {
  products: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
