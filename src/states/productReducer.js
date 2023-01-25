import { productActionTypes } from "./actionTypes";

export const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
  wishlist: [],
  isInCart: false
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case productActionTypes.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case productActionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case productActionTypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case productActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        isInCart: true
      };
    case productActionTypes.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    default:
      return state;
  }
};