import { RECIEVE_CART_PRODUCTS, ADD_TO_CART } from './../../constants/actionTypes'

const cartProducts = (state = [], action) => {
    switch (action.type) {
        case RECIEVE_CART_PRODUCTS:
            return action.cartProducts
        case ADD_TO_CART:
            return [
                ...state,
                action.product
            ]
        default:
            return state
    }
}

export default cartProducts