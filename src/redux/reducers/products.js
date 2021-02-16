import * as types from "./../../constants/actionTypes";

const products = (state = [], action) => {

  const { type, products } = action

  switch (action.type) {

    case types.RECEIVE_PRODUCTS:
      return products;

    case types.RECEIVE_BEST_PRODUCTS:
      const bestProducts = products.reduce((obj, product) => {
        if (product.categori === categori.best) {
          obj.push(product)
        }
        return obj
      }, [])
      return bestProducts

    case types.RECEIVE_BEST_PRODUCTS:
      const newestProducts = products.reduce((obj, product) => {
        if (product.categori === categori.newest) {
          obj.push(product)
        }
        return obj
      }, [])
      return newestProducts


    default:
      return state;
  }
};

export default products;




