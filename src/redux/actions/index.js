import * as types from './../../constants/actionTypes'

export const receiveProducts = products => ({
    products,
    type: types.RECEIVE_PRODUCTS
})