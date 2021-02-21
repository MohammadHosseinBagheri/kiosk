import { combineReducers } from "redux";
import { allProducts, newestProducts, bestProducts } from "./products";
import sideDrawer from './sideDrawer'
import { homeUrlParams, appUrlParams } from './urlParams'

export default combineReducers({
  allProducts,
  newestProducts,
  bestProducts,
  showsideDrawer: sideDrawer,
  homeUrlParams,
  appUrlParams
});
