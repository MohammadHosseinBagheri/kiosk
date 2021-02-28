import { RECIEVE_CART_PRODUCTS } from './../../constants/actionTypes'

const cartProducts = (state = [], action) => {
    switch (action.type) {
        case RECIEVE_CART_PRODUCTS:
            return action.cartProducts
        default:
            return state
    }
}

export default cartProducts