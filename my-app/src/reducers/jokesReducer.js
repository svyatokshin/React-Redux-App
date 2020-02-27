import { FETCH_DATA, UPDATE_JOKES, SET_ERROR, TOGGLE_REVEAL } from '../actions';

const change = false;
const changer = true;

const initialState = {
    jokes: [],
    isFetchingData: false,
    isRevealed: false,
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
                jokes: action.payload.map(joke => ({
                    ...joke, 
                    isRevealed: false
                })),
                isFetchingData: false
            };
        case SET_ERROR: 
            return {
                ...state,
                isFetchingData:false,
                error: action.payload
            };
        case TOGGLE_REVEAL:
            if (action.payload === 'all') {
                    return {
                        ...state,
                        isFetchingData: false,
                        isRevealed: !state.isRevealed
                    }
                } else {
                    return {
                        ...state,
                        isFetchingData:false,
                        jokes: state.jokes.map(joke => {
                            if (joke.id === action.payload){
                                return {...joke, 
                                isRevealed: true}
                            } else{
                                return joke
                            }
                        })
                    }
                }
        default:
            return state;
    }
};