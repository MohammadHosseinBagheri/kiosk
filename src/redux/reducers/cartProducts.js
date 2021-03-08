import { RECIEVE_CART_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from './../../constants/actionTypes'

const cartProducts = (state = [], action) => {
    // console.log(state)
    switch (action.type) {
        case RECIEVE_CART_PRODUCTS:
            return action.cartProducts
        case ADD_TO_CART:
            return [
                ...state,
                action.product
            ]
        case REMOVE_FROM_CART:
            const products = state.reduce((obj, product) => {
                console.log(product)
                if (product._id !== action.id) {
                    obj.push(product)
                }
                return obj
            }, [])
            return products
        default:
            return state
    }
}

export default cartProducts