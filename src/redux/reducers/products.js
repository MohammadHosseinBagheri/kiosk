import * as types from "./../../constants/actionTypes";
import { best, newest, free } from "./../../constants";

const allProducts = (state = [], action) => {
  const { type, products } = action;

  switch (type) {
    case types.RECEIVE_PRODUCTS:
      return products;
    default:
      return state;
  }
};

const bestProducts = (state = [], action) => {
  const { type, products } = action;

  switch (type) {
    case types.RECEIVE_BEST_PRODUCTS:
      const bestProducts = products.reduce((obj, product) => {
        if (product.categori === best) {
          obj.push(product);
        }
        return obj;
      }, []);
      return bestProducts;

    default:
      return state;
  }
};

const newestProducts = (state = [], action) => {
  const { type, products } = action;

  switch (type) {
    case types.RECEIVE_NEWEST_PRODUCTS:
      const newestProducts = products.reduce((obj, product) => {
        if (product.categori === newest) {
          obj.push(product);
        }
        return obj;
      }, []);
      return newestProducts;
    default:
      return state;
  }
};

const freeProducts = (state = [], action) => {
  const { type, products } = action;

  switch (type) {
    case types.RECEIVE_FREE_PRODUCTS:
      const freeProducts = products.reduce((obj, product) => {
        if (product.price === "0") {
          obj.push(product);
        }
        return obj;
      }, []);
      return freeProducts;
    default:
      return state;
  }
};

export { allProducts, bestProducts, newestProducts, freeProducts };
