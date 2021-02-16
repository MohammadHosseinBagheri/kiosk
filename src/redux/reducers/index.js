import { combineReducers } from "redux";
import { allProducts, newestProducts, bestProducts } from "./products";
import sideDrawer from './sideDrawer'

export default combineReducers({
  allProducts,newestProducts,bestProducts,
  showsideDrawer: sideDrawer
});
