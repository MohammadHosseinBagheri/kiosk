import * as types from './../../constants/actionTypes'

const comments = (state = [], action) => {
    switch (action.type) {
        case types.RECIEVE_COMMENTS:
            return action.comments
        default:
            return state
    }
}

export default comments