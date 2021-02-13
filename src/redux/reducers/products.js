import * as types from "./../../constants/actionTypes";

const products = (state = {}, action) => {
    // console.log(state, action)
    switch (action.type) {
    case types.RECEIVE_PRODUCTS:
      return action.products
    ;
    // return state;

    default:
      return state;
  }
};

export default products;
