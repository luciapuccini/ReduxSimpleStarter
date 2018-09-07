import { FETCH_POSTS } from '../actions/types';
import _ from 'lodash';

export const PostReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state
    }
}