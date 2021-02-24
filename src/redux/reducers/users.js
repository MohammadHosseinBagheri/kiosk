import * as types from './../../constants/actionTypes'

const users = (state=[] , action) => {
    switch(action.type){
        case types.RECIEVE_USERS:
            return action.users
        default:
            return state
    }
}

const loginedUser = (state={} , action) => {
    if(action.type === types.RECIEVE_LOGINED_USER){
        return action.user
    }
    return state
}

export {users, loginedUser}