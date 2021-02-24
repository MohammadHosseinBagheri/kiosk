import * as types from "./../../constants/actionTypes";

export const receiveProducts = (products) => ({
  products,
  type: types.RECEIVE_PRODUCTS,
});

export const sideDrawerClosed = () => ({
  type: types.SIDE_DRAWER_CLOSED
})

export const sideDrawerToggle = () => ({
  type: types.SIDE_DRAWER_TOGGLE
})

export const receiveBestProducts = products => ({
  type: types.RECEIVE_BEST_PRODUCTS,
  products
})

export const receiveNewestProducts = products => ({
  type: types.RECEIVE_NEWEST_PRODUCTS,
  products
})

export const homeUrlParams = homeUrlParams => ({
  type: types.HOME_URL_PARAMS,
  homeUrlParams
})

export const appUrlParams = appUrlParams => ({
  type: types.APP_URL_PARAMS,
  appUrlParams
})

export const receiveComments = comments => ({
  comments,
  type: types.RECIEVE_COMMENTS,
});

export const addComments = comment => ({
  comment,
  type: types.ADD_COMMENT,
});

export const recieveUsers = users => ({
  users,
  type: types.RECIEVE_USERS
})