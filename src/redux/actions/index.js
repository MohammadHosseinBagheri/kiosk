import * as types from "./../../constants/actionTypes";

export const receiveProducts = (products) => ({
  products,
  type: types.RECEIVE_PRODUCTS,
});

export const sideDrawerClosed = () => ({
  type: types.SIDE_DRAWER_CLOSED,
});

export const sideDrawerToggle = () => ({
  type: types.SIDE_DRAWER_TOGGLE,
});

export const receiveBestProducts = (products) => ({
  type: types.RECEIVE_BEST_PRODUCTS,
  products,
});

export const receiveNewestProducts = (products) => ({
  type: types.RECEIVE_NEWEST_PRODUCTS,
  products,
});

export const receiveFreeProducts = (products) => ({
  type: types.RECEIVE_FREE_PRODUCTS,
  products,
});

export const homeUrlParams = (homeUrlParams) => ({
  type: types.HOME_URL_PARAMS,
  homeUrlParams,
});

export const appUrlParams = (appUrlParams) => ({
  type: types.APP_URL_PARAMS,
  appUrlParams,
});

export const cartUrlParams = (cartUrlParams) => ({
  type: types.CART_URL_PARAMS,
  cartUrlParams,
});

export const aboutUrlParams = (aboutUrlParams) => ({
  type: types.ABOUT_URL_PARAMS,
  aboutUrlParams,
});

export const receiveComments = (comments) => ({
  comments,
  type: types.RECIEVE_COMMENTS,
});

export const addComments = (comment) => ({
  comment,
  type: types.ADD_COMMENT,
});

export const recieveUsers = (users) => ({
  users,
  type: types.RECIEVE_USERS,
});

export const recieveLoginedUser = (name='Ali', email, password, id=0) => ({
  name,
  email,
  password,
  type: types.RECIEVE_LOGINED_USER,
});

export const addUser = (user) => ({
  user,
  type: types.ADD_USER,
});

export const recieveCartProducts = (cartProducts) => ({
  type: types.RECIEVE_CART_PRODUCTS,
  cartProducts,
});

export const addToCart = (product) => ({
  type: types.ADD_TO_CART,
  product,
});

export const removeFromCart = (id) => ({
  type: types.REMOVE_FROM_CART,
  id,
});
