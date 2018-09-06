import { FETCH_WEATHER } from './types'
import axios from 'axios'
const API_KEY = 'a9f40a6eef1f61c2ded8ab0fdf806a1a';
const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = (city) => {
    const url = `${URL}&q=${city},ar`;
    const request = axios.get(url);

    //console.log('response from api:', request) //this is a promise, i don´t need to resolve it
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}