import { BOOK_SELECTED } from "../actions/types";

// state is only the part this reducer is responsible for
export default (state = null, action) => {
    switch (action.type) {
        case (BOOK_SELECTED):
            return action.payload

    }
    return state
}



    /*switch (action.type) {
        case BOOK_SELECTED:
            return {
               book: action.payload
            }
        default: { return state }
    };*/

