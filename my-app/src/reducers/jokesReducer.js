import { FETCH_DATA, UPDATE_JOKES, SET_ERROR, TOGGLE_REVEAL } from '../actions';

const change = false;

const initialState = {
    jokes: [],
    isFetchingData: false,
    isRevealed: change,
    error: ''
};

export const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                jokes: []
            };
        case UPDATE_JOKES:
            return {
                ...state,
                jokes: action.payload,
                isFetchingData: false
            };
        case SET_ERROR: 
            return {
                ...state,
                isFetchingData:false,
                error: action.payload
            };
        case TOGGLE_REVEAL:
            return {
                ...state,
                isFetchingData:false,
                isRevealed: !change
            }
        default:
            return state;
    }
};