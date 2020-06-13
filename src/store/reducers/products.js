import { actionTypes } from "../action-types/action-types";

const initialState = {};

export default function index(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS: {
      return {
        ...state,
        products: {
          ...state.products,
          ...action.payload,
        },
      };
    }

    case actionTypes.GET_PRODUCT: {
      return {
        ...state,
        product: {
          ...action.payload,
        },
      };
    }
    default:
      return { ...state };
  }
}
