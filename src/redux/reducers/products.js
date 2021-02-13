import * as types from "./../../constants/actionTypes";

const products = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products,
      };

    default:
      return state;
  }
};

export default products;
