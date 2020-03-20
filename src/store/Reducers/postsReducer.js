import * as ACTIONTYPES from '../Actions/ActionTypes';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type){
        case ACTIONTYPES.FETCHPOSTS:
            return action.payload
        default:
            return state
    }
}