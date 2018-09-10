import { FETCH_POSTS, CREATE_POST, FETCH_POST } from './types';
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
export const createPost = (values, callback) => {
    return (dispatch) => {
        axios.post(`${URL}/posts${API_KEY}`, values)
            .then(() => callback())
            .then(res => dispatch({
                type: CREATE_POST,
                payload: res
            }))
    }
}

export const fetchPost = (id) => {
    return (dispatch) => {
        axios.get(`${URL}/posts/${id}${API_KEY}`)
            .then(res => dispatch({
                type: FETCH_POST,
                payload: res
            }))
    }
}