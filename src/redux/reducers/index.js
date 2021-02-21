import { combineReducers } from "redux";
import { allProducts, newestProducts, bestProducts } from "./products";
import sideDrawer from './sideDrawer'
import { homeUrlParams } from './urlParams'

export default combineReducers({
  allProducts,
  newestProducts,
  bestProducts,
  showsideDrawer: sideDrawer,
  homeUrlParams
});
