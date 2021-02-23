import * as types from './../../constants/actionTypes'

const comments = (state = [], action) => {
    switch (action.type) {
        case types.RECIEVE_COMMENTS:
            return action.comments
        case types.ADD_COMMENT:
            return [
                action.comment,
                ...state
            ]
        default:
            return state
    }
}

export default comments