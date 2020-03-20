import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as Actions from '../store/Actions/Actions';

function PostList({dispatch}) {

    useEffect(() => {
        dispatch(Actions.fetchPosts())
    }, [])

    return (
        <div>PostList</div>
    )
}

export default connect(null, null)(PostList);