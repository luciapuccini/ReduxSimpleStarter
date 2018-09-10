import { FETCH_POSTS } from './types';
import axios from 'axios';

const URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=LUCIAKEY';

export const fetchPosts = () => {
    return function (dispatch) {
        axios.get(`${URL}/posts${API_KEY}`)
            .then(res => dispatch({
                type: FETCH_POSTS,
                payload: res
            }))
    }
}

