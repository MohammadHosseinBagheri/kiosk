import { combineReducers } from "redux";
import { allProducts, newestProducts, bestProducts } from "./products";
import sideDrawer from './sideDrawer'
import { homeUrlParams, appUrlParams } from './urlParams'
import comments from './comments'
import { users, loginedUser } from './users'
import cartProducts from './cartProducts'

export default combineReducers({
  allProducts,
  newestProducts,
  bestProducts,
  showsideDrawer: sideDrawer,
  homeUrlParams,
  appUrlParams,
  comments,
  users,
  loginedUser,
  cartProducts
});
