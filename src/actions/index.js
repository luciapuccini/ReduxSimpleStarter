import { FETCH_POSTS } from './types';
import axios from 'axios';

const URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=LUCIAKEY';
export const fetchPosts = () => {
    const request = axios.get(`${URL}/posts${API_KEY}`)
    return {
        type: FETCH_POSTS,
        payload: request
    }
}