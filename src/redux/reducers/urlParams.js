import * as types from './../../constants/actionTypes'


export const homeUrlParams = (state={} , action) => {
    if(action.type === types.HOME_URL_PARAMS){
        return action.homeUrlParams
    }else{
        return state
    }
}

