import { FETCH_WEATHER } from '../actions/types'
export default function (state = [], action) {
    //console.log('action recived in reducer:', action) //the promise got resolved by the middleware

    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];

    }
    return state;
}