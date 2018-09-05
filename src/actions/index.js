import { BOOK_SELECTED } from './types';

export const selectBook = (book) => {
    return {
        type: BOOK_SELECTED,
        payload: book
    }
}