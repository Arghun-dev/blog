import * as ACTIONTYPES from '../Actions/ActionTypes';
import jsonPlaceholder from '../../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({
            type: ACTIONTYPES.FETCHPOSTS,
            payload: response
        })
    }
}